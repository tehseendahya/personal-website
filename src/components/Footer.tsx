import Link from "next/link";
import CopyEmail from "@/components/CopyEmail";
import { site } from "@/content/site";

const links = [
  { name: "GitHub", href: site.links.github },
  { name: "LinkedIn", href: site.links.linkedin },
  { name: "Substack", href: site.links.substack },
  { name: "X", href: site.links.x },
];

const Footer = () => (
  <footer className="border-t-[1.5px] border-graphite bg-pad">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="lettering text-[28px] leading-[36px] text-graphite">
          Say hi. Email is the best way to reach me.
        </p>
        <CopyEmail className="mt-3" />
      </div>

      <div className="md:text-right">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} target="_blank" rel="noopener noreferrer" className="ink-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[15px] text-graphite-soft">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
