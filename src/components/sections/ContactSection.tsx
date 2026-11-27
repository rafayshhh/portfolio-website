"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink, 
  AlertCircle 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/socials";
import { DiscordIcon } from "@/components/icons/BrandIcons";
import { sound } from "@/lib/sound";

export interface ContactSectionProps {
  headingTag?: "h1" | "h2";
}

export function ContactSection({ headingTag = "h2" }: ContactSectionProps) {
  const Heading = headingTag;
  const SubHeading = headingTag === "h1" ? "h2" : "h3";
  const InnerHeading = headingTag === "h1" ? "h3" : "h4";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      sound.playToggle(true);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch (err: unknown) {
      sound.playToggle(false);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending."
      );
    }
  };

  return (
    <section id="contact" className="py-24 relative transition-colors duration-200">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-red-600/5 dark:bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Discord */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Communications</span>
              </div>
              <Heading className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight font-sans">
                DISPATCH A MESSAGE
              </Heading>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 font-light leading-relaxed">
                Got a custom Minecraft mod inquiry, technical question, or project idea? Send a transmission or connect on Discord.
              </p>
            </div>

            {/* Email quick-action card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10050c] border border-zinc-200 dark:border-[#2b0c1e] font-sans shadow-sm">
              <div className="text-[11px] text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">
                Primary Direct Ingestion
              </div>
              <div className="flex items-center justify-between gap-3 bg-zinc-50 dark:bg-[#070205] p-3 rounded-xl border border-zinc-200 dark:border-[#200816]">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-bold truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-[#1a0713] hover:bg-zinc-200 dark:hover:bg-[#2b0c20] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#330f26] text-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Discord channel banner */}
            <div className="p-5 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/25 space-y-3 font-sans">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#5865F2] dark:text-[#a0b0ff] uppercase tracking-wider font-bold">
                  Real-time Chat & Support
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#5865F2]/20 text-[#5865F2] dark:text-[#a0b0ff] font-bold">
                  Fastest
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 font-sans font-light">
                Join the Discord server to talk with other mod users, test upcoming releases, and chat directly.
              </p>
              <a
                href={PERSONAL_INFO.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#5865F2] hover:bg-[#4752c4] text-white transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <DiscordIcon className="w-4 h-4" />
                <span>Join Discord Server</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Column: Resend Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c0408] border border-zinc-200 dark:border-[#230917] shadow-md dark:shadow-2xl relative font-sans">
              <SubHeading className="text-xl font-bold text-zinc-900 dark:text-white mb-1">Send a Message</SubHeading>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-sans">
                Powered by Resend. Delivers directly to my personal developer inbox.
              </p>

              {status === "success" ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <InnerHeading className="text-lg font-bold text-zinc-900 dark:text-white">Message Delivered!</InnerHeading>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 max-w-sm mx-auto font-sans">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setStatus("idle");
                    }}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-bold bg-zinc-100 dark:bg-[#180611] text-zinc-800 dark:text-zinc-300 hover:text-red-600 dark:hover:text-white border border-zinc-200 dark:border-[#2f0c20]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot anti-spam field */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Leave this empty</label>
                    <input
                      id="hp_field"
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) =>
                        setFormData({ ...formData, honeypot: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs text-zinc-700 dark:text-zinc-300 mb-1.5 font-semibold"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Alex / Steve"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#14060e] border border-zinc-200 dark:border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs text-zinc-700 dark:text-zinc-300 mb-1.5 font-semibold"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#14060e] border border-zinc-200 dark:border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs text-zinc-700 dark:text-zinc-300 mb-1.5 font-semibold"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Minecraft Fabric Mod / Flutter App / Web Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#14060e] border border-zinc-200 dark:border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs text-zinc-700 dark:text-zinc-300 mb-1.5 font-semibold"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your idea, mod request, or collaboration..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#14060e] border border-zinc-200 dark:border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 transition-colors resize-y"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-500/40 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-xl font-bold text-xs bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white shadow-sm hover:shadow-red-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message via Resend</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
