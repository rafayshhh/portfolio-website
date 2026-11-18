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

export function ContactSection() {
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
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#060205] border-t border-[#200816]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Context & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 mb-2">
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Dispatch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
                GET IN TOUCH
              </h2>
              <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-light">
                Whether you want to discuss a Minecraft mod commission, inquire about an Android app, report an issue, or talk low-latency systems — my inbox is always open.
              </p>
            </div>

            {/* 1-Click Copy Email Card */}
            <div className="p-5 rounded-2xl bg-[#0c0408] border border-[#230917] space-y-3 font-mono">
              <span className="text-xs text-zinc-400 uppercase tracking-wider">
                Direct Developer Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-white font-medium truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#180611] hover:bg-red-600/20 text-zinc-300 hover:text-red-400 border border-[#2f0c20] transition-all flex items-center gap-1.5 text-xs font-semibold shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
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

            {/* Discord Community Card */}
            <div className="p-5 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/30 space-y-3 font-mono">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#a0b0ff] uppercase tracking-wider">
                  Real-time Chat & Support
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#5865F2]/20 text-[#a0b0ff] font-bold">
                  Fastest
                </span>
              </div>
              <p className="text-xs text-zinc-300 font-sans font-light">
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
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0408] border border-[#230917] shadow-2xl relative font-mono">
              <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-zinc-400 mb-6 font-sans">
                Powered by Resend. Delivers directly to my personal developer inbox.
              </p>

              {status === "success" ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Delivered!</h4>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto font-sans">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setStatus("idle");
                    }}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-bold bg-[#180611] text-zinc-300 hover:text-white border border-[#2f0c20]"
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
                      <label className="block text-xs text-zinc-300 mb-1.5">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Alex / Steve"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#14060e] border border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-zinc-300 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#14060e] border border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Minecraft Mod Commission / Android Project / Bug Report"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#14060e] border border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your idea, mod request, or collaboration..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#14060e] border border-[#260a1a] focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-white placeholder-zinc-600 transition-colors resize-y"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 disabled:opacity-50 text-white shadow-glow-sm hover:shadow-glow-red transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
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
