"use client";

import { useState } from "react";
import { formatMonth, posts, type Theme } from "@/content/writing";

const themes: Theme[] = ["Technology and the world", "Building things", "Travel and life"];
const markOf: Record<Theme, string> = {
  "Technology and the world": "var(--ballpoint)",
  "Building things": "var(--graphite)",
  "Travel and life": "#3f7a4a",
};

const slug = (url: string) => url.split("/").pop()!.slice(0, 40);
const monthIndex = (d: string) => Number(d.slice(0, 4)) * 12 + Number(d.slice(5, 7)) - 1;

// One mark per piece, on a month axis, so you can see the rhythm of it.
function Strip({ active, focus, setFocus }: { active: Theme | null; focus: string | null; setFocus: (s: string | null) => void }) {
  const first = monthIndex("2022-09-01");
  const last = monthIndex("2024-09-01");
  const W = 1000;
  const x = (d: string) => 10 + ((monthIndex(d) - first) / (last - first)) * (W - 20);
  const years = [2023, 2024];
  const stacks: Record<number, number> = {};
  return (
    <svg viewBox={`0 0 ${W} 120`} className="w-full overflow-visible" role="img" aria-label="Every piece, by month, from September 2022 to August 2024">
      <line x1={0} x2={W} y1={86} y2={86} stroke="var(--graphite)" strokeWidth={1.5} />
      {years.map((y) => (
        <g key={y}>
          <line x1={x(`${y}-01-01`)} x2={x(`${y}-01-01`)} y1={80} y2={96} stroke="var(--graphite)" />
          <text x={x(`${y}-01-01`) + 5} y={110} fontSize={14} fill="var(--graphite-soft)">
            {y}
          </text>
        </g>
      ))}
      <text x={4} y={110} fontSize={14} fill="var(--graphite-soft)">
        Sep 2022
      </text>
      {[...posts].reverse().map((p) => {
        const m = monthIndex(p.date);
        const level = (stacks[m] = (stacks[m] ?? -1) + 1);
        const lit = focus === slug(p.url);
        const off = active && active !== p.theme;
        return (
          <a
            key={p.url}
            href={`#${slug(p.url)}`}
            aria-label={`${p.title}, ${formatMonth(p.date)}`}
            onMouseEnter={() => setFocus(slug(p.url))}
            onMouseLeave={() => setFocus(null)}
            onFocus={() => setFocus(slug(p.url))}
            onBlur={() => setFocus(null)}
            style={{ opacity: off ? 0.15 : 1 }}
          >
            <rect
              x={x(p.date) - 5}
              y={66 - level * 26}
              width={10}
              height={20}
              rx={1.5}
              fill={lit ? "var(--sheet)" : markOf[p.theme]}
              stroke={markOf[p.theme]}
              strokeWidth={2}
            />
          </a>
        );
      })}
    </svg>
  );
}

export default function WritingIndex() {
  const [active, setActive] = useState<Theme | null>(null);
  const [focus, setFocus] = useState<string | null>(null);
  const shown = posts.filter((p) => !active || p.theme === active);
  const byYear = shown.reduce<Record<string, typeof posts>>((acc, p) => {
    (acc[p.date.slice(0, 4)] ??= []).push(p);
    return acc;
  }, {});

  return (
    <div>
      <div role="group" aria-label="Filter by theme" className="flex flex-wrap gap-2">
        {[null, ...themes].map((t) => {
          const on = active === t;
          const count = t ? posts.filter((p) => p.theme === t).length : posts.length;
          return (
            <button
              key={t ?? "all"}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(t)}
              className={`flex items-center gap-2 rounded-[3px] border-[1.5px] px-3 py-1 text-[15px] ${
                on ? "border-ballpoint bg-ballpoint text-white" : "border-graphite/50 bg-sheet text-graphite hover:border-graphite"
              }`}
            >
              {t && <span className="inline-block h-3 w-2 rounded-[1px]" style={{ background: markOf[t], outline: on ? "1.5px solid white" : undefined }} />}
              {t ?? "Everything"} <span className={`tabular ${on ? "text-white/80" : "text-graphite-soft"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="sheet mt-6 hidden px-6 pt-4 pb-5 md:block">
        <Strip active={active} focus={focus} setFocus={setFocus} />
        <p className="mt-2 text-[14px] text-graphite-soft">
          One mark per piece, by month. Most of it is the newsletter I wrote through high school.
          Click a mark to jump to it.
        </p>
      </div>

      {Object.entries(byYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, list]) => (
          <section key={year} aria-labelledby={`y${year}`} className="mt-12">
            <h2 id={`y${year}`} className="lettering border-b-[1.5px] border-graphite pb-[10px] text-[32px] leading-[40px] text-graphite">
              {year}
            </h2>
            <ul>
              {list.map((post) => (
                <li
                  key={post.url}
                  id={slug(post.url)}
                  onMouseEnter={() => setFocus(slug(post.url))}
                  onMouseLeave={() => setFocus(null)}
                  className={`grid scroll-mt-24 grid-cols-1 gap-x-6 gap-y-1 border-b border-grid-major px-2 py-5 target:bg-[#e6eafb] md:grid-cols-[13rem_1fr] ${
                    focus === slug(post.url) ? "bg-sheet" : ""
                  }`}
                >
                  <div className="text-[15px] text-graphite-soft">
                    <p className="tabular">
                      {formatMonth(post.date)}, {post.source}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="inline-block h-3 w-2 rounded-[1px]" style={{ background: markOf[post.theme] }} />
                      {post.theme}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-[21px] leading-[29px]">
                      <a href={post.url} className="ink-link text-graphite decoration-graphite/40" target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-1 max-w-[66ch] text-graphite-soft">{post.summary}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </div>
  );
}
