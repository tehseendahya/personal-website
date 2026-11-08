import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import WorkIndex from "@/components/work/WorkIndex";
import { lessons } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies, internships and an honest archive of projects, hackathons and case competitions by Tehseen Dahya.",
};

const caseStudies = [
  {
    href: "/work/clinic-agents",
    title: "Receptionist agents for eight autism clinics",
    meta: "2025, project lead and engineer",
    blurb: "Voice and SMS agents, a human in the loop, and handing it all off to an engineering team.",
  },
  {
    href: "/work/palantir",
    title: "Document and procurement AI at Palantir",
    meta: "Summer 2026, internship",
    blurb: "Extraction agents for an insurer and procurement forecasting for a medical-supply company.",
  },

];

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="lettering border-b-[1.5px] border-graphite pb-[10px] text-[32px] leading-[40px] text-graphite">
      {children}
    </h2>
  );
}

export default function WorkPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-24 sm:px-6">
        <h1 className="lettering text-[48px] leading-[56px] text-graphite sm:text-[64px] sm:leading-[72px]">Work</h1>
        <p className="mt-4 max-w-[60ch] text-[19px] leading-[30px] text-graphite">
          Two write-ups I&apos;d most like you to read, then everything else on one timeline, then
          the things that went wrong.
        </p>

        <section aria-labelledby="case-studies" className="mt-16">
          <Heading id="case-studies">Case studies</Heading>
          <ul>
            {caseStudies.map((c) => (
              <li key={c.href} className="border-b border-grid-major">
                <Link href={c.href} className="group grid grid-cols-1 gap-x-6 py-6 md:grid-cols-[16rem_1fr]">
                  <span className="text-[15px] text-graphite-soft">{c.meta}</span>
                  <span>
                    <span className="lettering block text-[26px] leading-[34px] text-ballpoint underline decoration-ballpoint/40 underline-offset-4 group-hover:decoration-2 group-hover:decoration-ballpoint">
                      {c.title}
                    </span>
                    <span className="mt-1 block max-w-[60ch] text-graphite-soft">{c.blurb}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="everything" className="mt-18">
          <Heading id="everything">Everything, in order</Heading>
          <p className="mt-4 max-w-[64ch] text-graphite-soft">
            Jobs, hackathons, competitions and the projects I built to learn something. Labelled
            honestly: a case competition is a case competition, and a tutorial project is a
            tutorial project.
          </p>
          <div className="mt-6">
            <WorkIndex />
          </div>
        </section>

        <section aria-labelledby="lessons" className="mt-18">
          <Heading id="lessons">Things that broke, or that I&apos;d do differently</Heading>
          <p className="mt-4 max-w-[64ch] text-graphite-soft">
            The interesting part of building something is usually where it goes wrong.
          </p>
          <div className="mt-2 hidden grid-cols-[10rem_1fr_1fr_1fr] gap-x-6 border-b-[1.5px] border-graphite py-3 text-[15px] font-semibold text-graphite md:grid">
            <p>Project</p>
            <p>What we did first</p>
            <p>What happened</p>
            <p>What I&apos;d do now</p>
          </div>
          <ul>
            {lessons.map((l) => (
              <li key={l.first} className="grid grid-cols-1 gap-x-6 gap-y-2 border-b border-grid-major py-5 md:grid-cols-[10rem_1fr_1fr_1fr]">
                <p className="text-[15px] text-graphite-soft">{l.project}</p>
                <p className="text-graphite"><span className="font-semibold md:hidden">First: </span>{l.first}</p>
                <p className="text-graphite"><span className="font-semibold md:hidden">Then: </span>{l.then}</p>
                <p className="pen text-[19px] leading-[25px]"><span className="font-sans text-[17px] font-semibold text-graphite md:hidden">Now: </span>{l.now}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
