import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import WritingIndex from "@/components/writing/WritingIndex";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and monthly updates by Tehseen Dahya on building things, technology and the world, and travel.",
};

export default function WritingPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-24 sm:px-6">
        <h1 className="lettering text-[48px] leading-[56px] text-graphite sm:text-[64px] sm:leading-[72px]">Writing</h1>
        <p className="mt-4 max-w-[60ch] text-[19px] leading-[30px] text-graphite">
          Most of this is a monthly newsletter I started in high school: what I built, where I
          went, what I got wrong. The rest are longer pieces on Medium. Some of it is old, and I
          left it up anyway.
        </p>
        <p className="mt-4 flex flex-wrap gap-x-6">
          <a href={site.links.substack} className="ink-link" target="_blank" rel="noopener noreferrer">Substack</a>
          <a href={site.links.medium} className="ink-link" target="_blank" rel="noopener noreferrer">Medium</a>
        </p>

        <div className="mt-12">
          <WritingIndex />
        </div>
      </div>
    </PageShell>
  );
}
