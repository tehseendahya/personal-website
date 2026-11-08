"use client";

import Link from "next/link";
import { useState } from "react";
import { archive, experience, type Kind } from "@/content/work";

// Everything I've done, on one timeline and in one list, filterable by what kind of thing it was.

type Group = "Jobs" | "Hackathons and competitions" | "Side projects" | "Learning projects";

const groupOf: Record<Kind, Group> = {
  Internship: "Jobs",
  "Project lead": "Jobs",
  Investing: "Jobs",
  Hackathon: "Hackathons and competitions",
  "Case competition": "Hackathons and competitions",
  "Competition pitch": "Hackathons and competitions",
  "Side project": "Side projects",
  "Learning project": "Learning projects",
};
const groups: Group[] = ["Jobs", "Hackathons and competitions", "Side projects", "Learning projects"];

type Entry = {
  slug: string;
  title: string;
  subtitle?: string;
  when: string;
  kind: Kind;
  group: Group;
  note: string;
  start: number; // fractional year
  end?: number;
  byYear: boolean; // archive entries are only dated to the year
  href?: string;
  links?: { label: string; href: string }[];
};

// Short names for the timeline, where full titles won't fit.
const short = (t: string) =>
  t
    .replace(" case competition", "")
    .replace("Amazon Alexa", "Alexa")
    .replace("Electricity demand forecasting", "Electricity")
    .replace("Rescue robots with RT-X", "RT-X rescue")
    .replace(" circuit", "")
    .replace("Clinic receptionist agents", "Clinic agents");

const NOW = 2026 + 10 / 12; // November 2026
const toYear = (ym: string) => Number(ym.slice(0, 4)) + (Number(ym.slice(5, 7)) - 1) / 12;
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const entries: Entry[] = [
  ...experience.map((e) => ({
    slug: slugify(e.org),
    title: e.org,
    subtitle: e.role,
    when: `${e.when}, ${e.where}`,
    kind: e.kind,
    group: groupOf[e.kind],
    note: e.summary,
    start: toYear(e.start),
    end: e.end ? toYear(e.end) + 1 / 12 : NOW,
    byYear: false,
    href: e.href,
  })),
  ...archive.map((a) => ({
    slug: slugify(a.title),
    title: a.title,
    when: a.year,
    kind: a.kind,
    group: groupOf[a.kind],
    note: a.note,
    start: Number(a.year) + 0.5,
    byYear: true,
    links: a.links,
  })),
].sort((a, b) => b.start - a.start);

// ---- Timeline geometry ----
const Y0 = 2022;
const Y1 = 2027;
const PW = 1000;
const GUTTER = 170; // row labels live in the left gutter
const x = (year: number) => GUTTER + ((year - Y0) / (Y1 - Y0)) * (PW - GUTTER);

// Jobs overlap, so give them lanes.
function laneJobs(list: Entry[]) {
  const lanes: number[] = [];
  return [...list]
    .sort((a, b) => a.start - b.start)
    .map((e) => {
      let lane = lanes.findIndex((endAt) => endAt + 0.4 <= e.start); // leave room for the label
      if (lane === -1) lane = lanes.length;
      lanes[lane] = e.end ?? e.start;
      return { e, lane };
    });
}

// Year-dated projects get spread evenly across their year: position says "that year", not a month.
function spreadByYear(list: Entry[]) {
  const byYear: Record<string, Entry[]> = {};
  for (const e of list) (byYear[Math.floor(e.start)] ??= []).push(e);
  return Object.entries(byYear).flatMap(([y, es]) =>
    es.map((e, i) => ({ e, cx: x(Number(y) + (i + 1) / (es.length + 1)) })),
  );
}

function Timeline({ active, focus, setFocus }: { active: Group | null; focus: string | null; setFocus: (s: string | null) => void }) {
  const jobs = laneJobs(entries.filter((e) => e.group === "Jobs"));
  const jobLanes = Math.max(...jobs.map((j) => j.lane)) + 1;
  const rowH = 30;
  const rows: { group: Group; top: number; h: number }[] = [];
  let top = 40;
  for (const g of groups) {
    const h = g === "Jobs" ? jobLanes * rowH + 14 : 40;
    rows.push({ group: g, top, h });
    top += h + 78;
  }
  const H = top;
  const dim = (g: Group) => (active && active !== g ? 0.18 : 1);

  return (
    <svg viewBox={`0 0 ${PW} ${H}`} className="w-full overflow-visible" role="img" aria-label="Timeline of jobs and projects from 2022 to 2026">
      {/* Year rules, like the major lines on the paper */}
      {Array.from({ length: Y1 - Y0 + 1 }, (_, i) => Y0 + i).map((y) => (
        <g key={y}>
          <line x1={x(y)} x2={x(y)} y1={14} y2={H - 10} stroke="var(--graphite)" strokeOpacity={0.18} strokeDasharray={y === Y1 ? "3 4" : undefined} />
          {y < Y1 && (
            <text x={x(y) + 6} y={14} fontSize={14} fill="var(--graphite-soft)" className="tabular">
              {y}
            </text>
          )}
        </g>
      ))}
      <line x1={x(NOW)} x2={x(NOW)} y1={22} y2={H - 10} stroke="var(--ballpoint)" strokeWidth={1.5} />
      <text x={x(NOW) - 6} y={H} fontSize={17} textAnchor="end" fill="var(--ballpoint)" style={{ fontFamily: "var(--font-kalam)" }}>
        now
      </text>

      {rows.map(({ group, top }) => (
        <g key={group} opacity={dim(group)} style={{ transition: "opacity 150ms" }}>
          {(group === "Hackathons and competitions" ? ["Hackathons and", "competitions"] : [group]).map((line, i) => (
            <text key={line} x={0} y={top + (group === "Jobs" ? 22 : 20) + i * 17} fontSize={14} fontWeight={600} fill="var(--graphite)">
              {line}
            </text>
          ))}
          {group === "Jobs"
            ? jobs.map(({ e, lane }) => {
                const y = top + 12 + lane * rowH;
                const lit = focus === e.slug;
                return (
                  <a key={e.slug} href={`#${e.slug}`} onMouseEnter={() => setFocus(e.slug)} onMouseLeave={() => setFocus(null)} onFocus={() => setFocus(e.slug)} onBlur={() => setFocus(null)}>
                    <rect x={x(e.start)} y={y} width={Math.max(6, x(e.end!) - x(e.start))} height={10} rx={2} fill={lit ? "var(--ballpoint)" : "var(--graphite)"} />
                    <text x={x(e.start)} y={y + 24} fontSize={13} fill={lit ? "var(--ballpoint)" : "var(--graphite)"}>
                      {short(e.title)}
                    </text>
                  </a>
                );
              })
            : spreadByYear(entries.filter((e) => e.group === group)).map(({ e, cx }) => {
                const lit = focus === e.slug;
                return (
                  <a key={e.slug} href={`#${e.slug}`} aria-label={`${e.title}, ${e.when}`} onMouseEnter={() => setFocus(e.slug)} onMouseLeave={() => setFocus(null)} onFocus={() => setFocus(e.slug)} onBlur={() => setFocus(null)}>
                    <circle cx={cx} cy={top + 22} r={lit ? 8 : 6} fill={lit ? "var(--ballpoint)" : "var(--sheet)"} stroke={lit ? "var(--ballpoint)" : "var(--graphite)"} strokeWidth={1.5} />
                    <circle cx={cx} cy={top + 22} r={14} fill="transparent" />
                    <text
                      x={cx + 4}
                      y={top + 10}
                      fontSize={13}
                      transform={`rotate(-38 ${cx + 4} ${top + 10})`}
                      fill={lit ? "var(--ballpoint)" : "var(--graphite-soft)"}
                      fontWeight={lit ? 600 : 400}
                    >
                      {short(e.title)}
                    </text>
                  </a>
                );
              })}
        </g>
      ))}
    </svg>
  );
}

export default function WorkIndex() {
  const [active, setActive] = useState<Group | null>(null);
  const [focus, setFocus] = useState<string | null>(null);
  const shown = entries.filter((e) => !active || e.group === active);

  return (
    <div>
      <div role="group" aria-label="Filter by kind" className="flex flex-wrap gap-2">
        {[null, ...groups].map((g) => {
          const count = g ? entries.filter((e) => e.group === g).length : entries.length;
          const on = active === g;
          return (
            <button
              key={g ?? "all"}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(g)}
              className={`rounded-[3px] border-[1.5px] px-3 py-1 text-[15px] ${
                on ? "border-ballpoint bg-ballpoint text-white" : "border-graphite/50 bg-sheet text-graphite hover:border-graphite"
              }`}
            >
              {g ?? "Everything"} <span className={`tabular ${on ? "text-white/80" : "text-graphite-soft"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="sheet mt-6 hidden px-6 pt-6 pb-8 md:block">
        <Timeline active={active} focus={focus} setFocus={setFocus} />
        <p className="mt-3 text-[14px] text-graphite-soft">
          Jobs are drawn to the month. Projects are only placed by year. Click one to jump to it.
        </p>
      </div>

      <ul className="mt-8">
        {shown.map((e) => (
          <li
            key={e.slug}
            id={e.slug}
            onMouseEnter={() => setFocus(e.slug)}
            onMouseLeave={() => setFocus(null)}
            className={`grid scroll-mt-24 grid-cols-1 gap-x-6 gap-y-1 border-b border-grid-major px-2 py-5 transition-colors target:bg-[#e6eafb] md:grid-cols-[13rem_1fr] ${
              focus === e.slug ? "bg-sheet" : ""
            }`}
          >
            <div className="text-[15px] text-graphite-soft">
              <p className="tabular">{e.when}</p>
              <p>{e.kind}</p>
            </div>
            <div>
              <h3 className="font-semibold text-graphite">
                {e.title}
                {e.subtitle && <span className="font-normal text-graphite-soft">, {e.subtitle}</span>}
              </h3>
              <p className="max-w-[64ch] text-graphite">{e.note}</p>
              {(e.href || e.links) && (
                <p className="mt-1 flex flex-wrap gap-x-5 text-[15px]">
                  {e.href && (
                    <Link href={e.href} className="ink-link">
                      Case study
                    </Link>
                  )}
                  {e.links?.map((l) =>
                    l.href.startsWith("/") ? (
                      <Link key={l.href} href={l.href} className="ink-link">
                        {l.label}
                      </Link>
                    ) : (
                      <a key={l.href} href={l.href} className="ink-link" target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ),
                  )}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
