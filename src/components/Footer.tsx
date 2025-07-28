"use client";

import Link from "next/link";
import { useState } from "react";
import { copyEmailToClipboard } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);

  const handleEmailCopy = async () => {
    const success = await copyEmailToClipboard();
    if (success) {
      setShowCopiedPopup(true);
      setTimeout(() => setShowCopiedPopup(false), 2000);
    }
  };

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tehseen Dahya</h3>
            <p className="text-muted-foreground mb-4">
              Developer, innovator, and changemaker working on technology solutions to reduce global inequity. 
              Currently a student from Toronto with expertise in ML, Web3, and climate tech.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/tehseen-dahya-jr/"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/tehseendahya"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <button
                onClick={handleEmailCopy}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Email
              </button>
              <Link
                href="https://x.com/tehseen_0"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/writing" className="text-muted-foreground hover:text-primary transition-colors">
                  Writing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">📍 Toronto & North Carolina</li>
              <li>
                <button
                  onClick={handleEmailCopy}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  📧 tdahya2@gmail.com
                </button>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  📝 Writing & Stories
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Tehseen Dahya. All rights reserved.
          </p>
        </div>
      </div>

      {/* Copied Email Popup */}
      {showCopiedPopup && (
        <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-lg z-50 animate-in slide-in-from-bottom-2 duration-300">
          Copied tdahya2@gmail.com to clipboard
        </div>
      )}
    </footer>
  );
};

export default Footer; 