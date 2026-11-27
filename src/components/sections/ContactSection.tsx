"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/socials";
import { DiscordIcon } from "@/components/icons/BrandIcons";

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
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PERSONAL_INFO.email).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending."
      );
    }
  };

  return (
    <section id="contact" className="py-16 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Email & Community */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-red-700 dark:text-red-400 font-bold mb-1.5">
                Contact
              </p>
              <Heading className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight font-sans">
                Get in Touch
              </Heading>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Open to software engineering opportunities, custom Minecraft Fabric mods, Flutter projects, and technical collaborations.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#10050c] border border-zinc-200 dark:border-[#2b0c1e] font-sans shadow-sm">
              <div className="text-xs text-zinc-600 dark:text-zinc-400 font-semibold mb-2">
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-3 bg-zinc-50 dark:bg-[#070205] p-3 rounded-xl border border-zinc-200 dark:border-[#200816]">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-red-700 dark:text-red-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-900 dark:text-zinc-200 font-semibold truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2.5 py-1 rounded-lg bg-zinc-200/80 dark:bg-[#180712] hover:bg-zinc-300 dark:hover:bg-[#250b1c] text-zinc-800 dark:text-zinc-200 text-xs font-medium flex items-center gap-1 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied</span>
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

            {/* Discord Banner */}
            <div className="p-5 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/25 space-y-3 font-sans">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#4752c4] dark:text-[#a0b0ff] uppercase tracking-wider font-bold">
                  Community &amp; Mod Support
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#5865F2]/20 text-[#4752c4] dark:text-[#a0b0ff] font-semibold">
                  Discord
                </span>
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Join the community Discord server for mod changelog updates, release support, and feedback.
              </p>
              <a
                href={PERSONAL_INFO.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#4752c4] hover:bg-[#3c46ad] text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <DiscordIcon className="w-4 h-4" />
                <span>Join Discord Server</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c0408] border border-zinc-200 dark:border-[#230917] shadow-md relative font-sans">
              <SubHeading className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                Send a Message
              </SubHeading>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6">
                Delivered directly to my inbox via Resend.
              </p>

              {status === "success" ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <InnerHeading className="text-lg font-bold text-zinc-900 dark:text-white">
                    Message Sent
                  </InnerHeading>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 max-w-sm mx-auto">
                    Thanks for reaching out. I&apos;ll reply as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="hp_field">Leave this empty</label>
                    <input
                      id="hp_field"
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs text-zinc-800 dark:text-zinc-200 mb-1.5 font-semibold">
                        Your Name <span className="text-red-600 dark:text-red-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#14060e] border border-zinc-200 dark:border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs text-zinc-800 dark:text-zinc-200 mb-1.5 font-semibold">
                        Email Address <span className="text-red-600 dark:text-red-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#14060e] border border-zinc-200 dark:border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs text-zinc-800 dark:text-zinc-200 mb-1.5 font-semibold">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Minecraft Fabric Mod / Flutter App / Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#14060e] border border-zinc-200 dark:border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs text-zinc-800 dark:text-zinc-200 mb-1.5 font-semibold">
                      Message <span className="text-red-600 dark:text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your project, mod idea, or inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#14060e] border border-zinc-200 dark:border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-colors resize-y"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-500/40 text-red-800 dark:text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-xl text-xs font-bold bg-red-700 hover:bg-red-600 disabled:bg-red-800 text-white shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
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
