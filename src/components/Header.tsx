"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";

// Styled as the printed title block across the top of an engineering pad.
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-pad border-b-[1.5px] border-graphite">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-stretch">
        <Link
          href="/"
          className="lettering flex flex-1 items-center px-4 text-xl text-graphite sm:px-6"
        >
          {site.name}
        </Link>

        <ul className="hidden md:flex items-stretch">
          {site.nav.map((item) => (
            <li key={item.name} className="flex border-l-[1.5px] border-graphite">
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={`flex w-28 items-center justify-center text-[15px] transition-colors ${
                  isCurrent(item.href)
                    ? "text-ballpoint underline decoration-2 underline-offset-[6px]"
                    : "text-graphite hover:text-ballpoint"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="flex items-center border-l-[1.5px] border-graphite px-5 text-[15px] text-graphite md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {isMenuOpen && (
        <ul id="mobile-nav" className="border-t-[1.5px] border-graphite bg-pad md:hidden">
          {site.nav.map((item) => (
            <li key={item.name} className="border-b border-border last:border-b-0">
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={`block px-4 py-3 ${
                  isCurrent(item.href) ? "text-ballpoint" : "text-graphite"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
