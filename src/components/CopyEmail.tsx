"use client";

import { useState } from "react";
import { site } from "@/content/site";

// Email as a real mailto link, plus a copy button for people without a mail client set up.
export default function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the mailto link still works.
    }
  };

  return (
    <div className={`flex flex-wrap items-baseline gap-x-1.5 gap-y-2 ${className}`}>
      <a href={`mailto:${site.email}`} className="ink-link">
        {site.email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        title={copied ? "Copied" : "Copy email"}
        className="relative top-[3px] inline-flex h-6 w-6 items-center justify-center rounded-[3px] text-graphite-soft hover:bg-grid-major/60 hover:text-ballpoint"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M3 8.5l3.2 3L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <rect x="5.5" y="5.5" width="8" height="8.5" rx="1.2" />
            <path d="M10.5 3.5V3a1.2 1.2 0 0 0-1.2-1.2H3.7A1.2 1.2 0 0 0 2.5 3v6.8A1.2 1.2 0 0 0 3.7 11h.8" />
          </svg>
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </div>
  );
}
