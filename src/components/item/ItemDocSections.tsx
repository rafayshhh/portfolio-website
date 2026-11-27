"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SpecificationItem,
  DocumentationSection,
  ControlBinding,
  CommandEntry,
  DependencyLink,
} from "@/data/types";
import {
  BookOpen,
  Check,
  Copy,
  CheckCheck,
  Sliders,
  Layers,
  Terminal,
  Keyboard,
  Link2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { sound } from "@/lib/sound";

export interface RelatedNavItem {
  id: string;
  title: string;
  href: string;
  tagline?: string;
}

export interface ItemDocSectionsProps {
  features: string[];
  specifications: SpecificationItem[];
  documentation: DocumentationSection[];
  controls?: ControlBinding[];
  commands?: CommandEntry[];
  dependencies?: DependencyLink[];
  prevItem?: RelatedNavItem | null;
  nextItem?: RelatedNavItem | null;
  theme: "cyan" | "emerald" | "red";
}

/** Parses inline markdown tokens (**bold**, `code`, and [link](url)) into clean React nodes */
function renderInlineMarkdown(text: string): React.ReactNode[] {
  const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-zinc-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 mx-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-emerald-300 font-mono text-[12px]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = href.startsWith("http");
      return isExternal ? (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-zinc-400 dark:decoration-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          {label}
        </a>
      ) : (
        <Link key={idx} href={href} className="underline decoration-zinc-400 hover:text-zinc-900 dark:hover:text-white">
          {label}
        </Link>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

/** Clean, safe block markdown renderer for doc sections (headings, bullet/numbered lists, paragraphs) */
function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/);

  return (
    <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed">
      {blocks.map((block, bIdx) => {
        const lines = block.split("\n").map((l) => l.trimEnd());
        const first = lines[0]?.trim() || "";

        if (first.startsWith("### ")) {
          const rest = lines.slice(1);
          return (
            <div key={bIdx} className="space-y-2.5 pt-1">
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                {renderInlineMarkdown(first.replace(/^###\s+/, ""))}
              </h4>
              {rest.length > 0 && <MarkdownContent content={rest.join("\n")} />}
            </div>
          );
        }

        const isBulletList = lines.every((l) => l.trim().startsWith("- "));
        if (isBulletList) {
          return (
            <ul key={bIdx} className="space-y-2 pl-1">
              {lines.map((line, lIdx) => (
                <li key={lIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0 mt-2" />
                  <span>{renderInlineMarkdown(line.trim().replace(/^-\s+/, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }

        const isOrderedList = lines.every((l) => /^\d+\.\s+/.test(l.trim()));
        if (isOrderedList) {
          return (
            <ol key={bIdx} className="space-y-2 list-decimal pl-5 marker:text-zinc-500 marker:font-mono marker:font-bold">
              {lines.map((line, lIdx) => (
                <li key={lIdx} className="pl-1">
                  {renderInlineMarkdown(line.trim().replace(/^\d+\.\s+/, ""))}
                </li>
              ))}
            </ol>
          );
        }

        return <p key={bIdx}>{renderInlineMarkdown(lines.join(" "))}</p>;
      })}
    </div>
  );
}

export function ItemDocSections({
  features,
  specifications,
  documentation,
  controls,
  commands,
  dependencies,
  prevItem,
  nextItem,
  theme,
}: ItemDocSectionsProps) {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const themeStyles = {
    cyan: {
      accentBg: "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    emerald: {
      accentBg: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    red: {
      accentBg: "bg-red-50 dark:bg-red-950/60 border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300",
      iconColor: "text-red-600 dark:text-red-400",
    },
  }[theme];

  const handleCopy = (text: string, key: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedSlug(key);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Top 2-Column: Features Checklist & Technical Specifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Core Capabilities */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#070c14] border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
            <Layers className={`w-4 h-4 ${themeStyles.iconColor}`} />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
              Core Capabilities &amp; Features
            </h2>
          </div>
          <ul className="space-y-3">
            {features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans">
                <Check className={`w-4 h-4 ${themeStyles.iconColor} shrink-0 mt-0.5`} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Specifications */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#070c14] border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
            <Sliders className={`w-4 h-4 ${themeStyles.iconColor}`} />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
              Technical Specifications
            </h2>
          </div>
          <dl className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
            {specifications.map((spec, idx) => (
              <div key={idx} className="py-2.5 flex items-center justify-between gap-4 text-xs">
                <dt className="text-zinc-500 dark:text-zinc-400 font-medium shrink-0">{spec.label}</dt>
                <dd className="text-zinc-900 dark:text-white font-mono font-semibold text-right">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      {/* Dependencies & Ecosystem Compatibility */}
      {dependencies && dependencies.length > 0 && (
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#070c14] border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
            <Link2 className={`w-4 h-4 ${themeStyles.iconColor}`} />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
              Requirements &amp; Compatible Modules
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {dependencies.map((dep, idx) => {
              const inner = (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors h-full flex flex-col justify-between gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                      <span>{dep.name}</span>
                      {dep.href && <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border ${
                        dep.required
                          ? "bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700/50"
                          : themeStyles.accentBg
                      }`}
                    >
                      {dep.required ? "Required" : "Optional"}
                    </span>
                  </div>
                  {dep.notes && (
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{dep.notes}</p>
                  )}
                </div>
              );

              if (!dep.href) return <div key={idx}>{inner}</div>;
              return dep.href.startsWith("http") ? (
                <a key={idx} href={dep.href} target="_blank" rel="noopener noreferrer" onClick={() => sound.playClick()}>
                  {inner}
                </a>
              ) : (
                <Link key={idx} href={dep.href} onClick={() => sound.playClick()}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Keybindings & Client Commands Section */}
      {((controls && controls.length > 0) || (commands && commands.length > 0)) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {controls && controls.length > 0 && (
            <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#070c14] border border-zinc-200 dark:border-zinc-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
                <Keyboard className={`w-4 h-4 ${themeStyles.iconColor}`} />
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                  Default Keybindings
                </h2>
              </div>
              <div className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
                {controls.map((ctrl, idx) => (
                  <div key={idx} className="py-3 flex items-start justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-zinc-900 dark:text-white">{ctrl.action}</div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">{ctrl.description}</div>
                    </div>
                    <kbd className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 font-mono text-[11px] font-bold text-zinc-900 dark:text-zinc-200 shrink-0 shadow-sm">
                      {ctrl.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </section>
          )}

          {commands && commands.length > 0 && (
            <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#070c14] border border-zinc-200 dark:border-zinc-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
                <Terminal className={`w-4 h-4 ${themeStyles.iconColor}`} />
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                  Client-Side Commands
                </h2>
              </div>
              <div className="space-y-2.5">
                {commands.map((cmd, idx) => {
                  const cmdKey = `cmd-${idx}`;
                  const baseCmd = cmd.command.split(" | ")[0];
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 min-w-0">
                        <code className="block text-xs font-mono font-bold text-zinc-900 dark:text-emerald-300 break-words">
                          {cmd.command}
                        </code>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">{cmd.description}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(baseCmd, cmdKey)}
                        aria-label={`Copy command ${baseCmd}`}
                        className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 shrink-0 transition-colors"
                      >
                        {copiedSlug === cmdKey ? (
                          <CheckCheck className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Deep Documentation Section */}
      {documentation.length > 0 && (
        <section aria-labelledby="docs-heading" className="space-y-8">
          <div className="flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
            <BookOpen className={`w-5 h-5 ${themeStyles.iconColor}`} />
            <h2 id="docs-heading" className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Technical Documentation &amp; Guides
            </h2>
          </div>

          <div className="space-y-6">
            {documentation.map((doc, idx) => (
              <article
                key={doc.slug || idx}
                id={doc.slug}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#060a12] border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                    {doc.title}
                  </h3>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-mono uppercase font-bold border shrink-0 ${themeStyles.accentBg}`}>
                    Section {idx + 1}
                  </span>
                </div>

                <MarkdownContent content={doc.content} />

                {doc.codeSnippet && (
                  <div className="relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100 font-mono text-xs my-4 shadow-md">
                    <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-[11px] text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{doc.codeLanguage || "code"}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(doc.codeSnippet!, doc.slug)}
                        aria-label={`Copy ${doc.title} code snippet`}
                        className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
                      >
                        {copiedSlug === doc.slug ? (
                          <>
                            <CheckCheck className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto text-xs leading-relaxed text-zinc-200">
                      <code>{doc.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Adjacent Sibling Cross-Navigation */}
      {(prevItem || nextItem) && (
        <nav aria-label="Related entries" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <div>
            {prevItem && (
              <Link
                href={prevItem.href}
                onClick={() => sound.playClick()}
                className="p-4 rounded-2xl bg-white dark:bg-[#070c14] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex items-center gap-3 group"
              >
                <ChevronLeft className="w-5 h-5 text-zinc-400 group-hover:-translate-x-0.5 transition-transform shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 dark:text-zinc-400 block">
                    Previous
                  </span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white truncate block">
                    {prevItem.title}
                  </span>
                </div>
              </Link>
            )}
          </div>
          <div>
            {nextItem && (
              <Link
                href={nextItem.href}
                onClick={() => sound.playClick()}
                className="p-4 rounded-2xl bg-white dark:bg-[#070c14] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex items-center justify-end gap-3 text-right group"
              >
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 dark:text-zinc-400 block">
                    Next
                  </span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white truncate block">
                    {nextItem.title}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </Link>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
