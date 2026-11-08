"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { columns, edges, nodes, typeNames, type MapNode, type NodeType } from "@/content/map";

const W = 1000;
const H = 640;
const byId = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<string, MapNode>;
const types = columns.map((c) => c.type);

// Each kind of thing gets a column; nodes are spread evenly down it.
const COL_X: Record<NodeType, number> = { place: 80, work: 265, project: 455, question: 665, writing: 885 };
const TOP = 70;
const BOTTOM = 615;
const pos: Record<string, { x: number; y: number }> = {};
for (const c of columns) {
  const step = (BOTTOM - TOP) / Math.max(1, c.ids.length - 1);
  const pad = c.ids.length < 6 ? (BOTTOM - TOP) / (c.ids.length + 1) : 0;
  c.ids.forEach((id, i) => {
    pos[id] = {
      x: COL_X[c.type],
      y: pad ? TOP + pad * (i + 1) - pad / 2 : TOP + step * i,
    };
  });
}

const neighbours: Record<string, string[]> = {};
for (const [a, b] of edges) {
  (neighbours[a] ??= []).push(b);
  (neighbours[b] ??= []).push(a);
}

// A smooth pencil line between two nodes. Same-column links bow out to the right.
function curve(a: { x: number; y: number }, b: { x: number; y: number }) {
  if (a.x === b.x) return `M${a.x} ${a.y} C${a.x + 150} ${a.y} ${b.x + 150} ${b.y} ${b.x} ${b.y}`;
  const mx = (a.x + b.x) / 2;
  return `M${a.x} ${a.y} C${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}`;
}

// How each kind of thing is drawn. The legend uses the same marks.
function nodeClass(type: NodeType, state: "selected" | "near" | "idle" | "dim") {
  const base = "transition-[opacity,color,background-color,border-color] duration-150";
  const dim = state === "dim" ? " opacity-30" : "";
  const sel = state === "selected";
  const near = state === "near";
  switch (type) {
    case "work":
      return `${base}${dim} rounded-[3px] border-[1.5px] px-2.5 py-1 text-[14px] leading-[18px] font-medium ${
        sel ? "border-ballpoint bg-ballpoint text-white" : near ? "border-ballpoint bg-sheet text-ballpoint" : "border-graphite bg-sheet text-graphite hover:border-ballpoint hover:text-ballpoint"
      }`;
    case "question":
      return `${base}${dim} pen max-w-[13.5rem] rounded-[14px] border-[1.5px] border-dashed px-3 py-1.5 text-[16px] leading-[19px] ${
        sel ? "border-ballpoint bg-ballpoint !text-white" : near ? "border-ballpoint bg-[#e6eafb]" : "border-ballpoint/60 bg-sheet hover:bg-[#e6eafb]"
      }`;
    case "place":
      return `${base}${dim} flex items-center gap-1.5 bg-sheet px-1 text-[14px] leading-[18px] ${
        sel ? "text-ballpoint font-semibold" : near ? "text-ballpoint" : "text-graphite hover:text-ballpoint"
      }`;
    case "writing":
      return `${base}${dim} max-w-[12rem] border-b-[1.5px] bg-sheet px-1 font-serif text-[15px] italic leading-[19px] ${
        sel ? "border-ballpoint text-ballpoint" : near ? "border-ballpoint text-ballpoint" : "border-graphite/40 text-graphite hover:border-ballpoint hover:text-ballpoint"
      }`;
    case "project":
      return `${base}${dim} rounded-[10px] border px-2.5 py-1 text-[14px] leading-[18px] ${
        sel ? "border-ballpoint bg-ballpoint text-white" : near ? "border-ballpoint bg-sheet text-ballpoint" : "border-graphite/70 bg-sheet text-graphite hover:border-ballpoint hover:text-ballpoint"
      }`;
  }
}

function Pin({ active }: { active: boolean }) {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" aria-hidden="true" className="shrink-0">
      <path d="M5 13.5C5 13.5 1 8.6 1 5.2a4 4 0 0 1 8 0C9 8.6 5 13.5 5 13.5Z" fill={active ? "var(--ballpoint)" : "var(--graphite)"} />
      <circle cx="5" cy="5" r="1.6" fill="var(--pad)" />
    </svg>
  );
}

function LegendMark({ type }: { type: NodeType }) {
  switch (type) {
    case "work":
      return <span className="inline-block h-3.5 w-5 rounded-[2px] border-[1.5px] border-graphite bg-sheet" />;
    case "question":
      return <span className="inline-block h-3.5 w-5 rounded-full border-[1.5px] border-dashed border-ballpoint" />;
    case "place":
      return <Pin active={false} />;
    case "writing":
      return <span className="inline-block w-5 border-b-[1.5px] border-graphite/60 font-serif text-[13px] italic leading-none">Aa</span>;
    case "project":
      return <span className="inline-block h-3.5 w-5 rounded-[5px] border border-graphite/70 bg-sheet" />;
  }
}


function Detail({
  node,
  onPick,
}: {
  node: MapNode;
  onPick: (id: string) => void;
}) {
  const links = (neighbours[node.id] ?? []).map((id) => byId[id]);
  const external = node.link && !node.link.href.startsWith("/");
  return (
    <div>
      <p className="pr-12 text-[14px] text-graphite-soft">{typeNames[node.type]}</p>
      <p className={`mt-1 text-graphite ${node.type === "question" ? "pen !text-ballpoint text-[24px] leading-[29px]" : "lettering text-[26px] leading-[32px]"}`}>
        {node.label}
      </p>
      <p className="mt-3 font-serif text-[17px] leading-[27px] text-graphite">{node.note}</p>
      {node.link &&
        (external ? (
          <a href={node.link.href} target="_blank" rel="noopener noreferrer" className="ink-link mt-3 inline-block">
            {node.link.label}
          </a>
        ) : (
          <Link href={node.link.href} className="ink-link mt-3 inline-block">
            {node.link.label}
          </Link>
        ))}
      {links.length > 0 && (
        <div className="mt-6 border-t border-grid-major pt-4">
          <p className="text-[14px] text-graphite-soft">Connected to</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {links.map((n) => (
              <li key={n.id}>
                <button
                  type="button"
                  onClick={() => onPick(n.id)}
                  className="rounded-[3px] border border-graphite/40 bg-pad px-2 py-0.5 text-left text-[14px] leading-[19px] text-graphite hover:border-ballpoint hover:text-ballpoint"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function HeadMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const sheetRef = useRef<HTMLDivElement>(null);
  const [cardPos, setCardPos] = useState<{ left: number; top: number } | null>(null);

  // Place the note next to the selected node: right of it if there's room, otherwise left.
  useLayoutEffect(() => {
    const sheet = sheetRef.current;
    if (!selected || !sheet) return setCardPos(null);
    const place = () => {
      const btn = sheet.querySelector<HTMLElement>(`[data-node="${selected}"]`);
      if (!btn) return;
      const s = sheet.getBoundingClientRect();
      const b = btn.getBoundingClientRect();
      const cardW = 336;
      const gap = 16;
      const left = b.right + gap + cardW <= s.right - 8 ? b.right - s.left + gap : Math.max(8, b.left - s.left - gap - cardW);
      const cardH = sheet.querySelector<HTMLElement>(".note-pop")?.offsetHeight ?? 260;
      const top = Math.min(Math.max(8, b.top - s.top - 24), Math.max(8, s.height - cardH - 8));
      setCardPos({ left, top });
    };
    place();
    const raf = requestAnimationFrame(place); // re-run once the card has its real height
    window.addEventListener("resize", place);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", place);
    };
  }, [selected]);

  // Hovering previews a node's connections; clicking pins them and opens the note.
  const focus = hovered ?? selected;
  const near = useMemo(() => new Set(focus ? neighbours[focus] ?? [] : []), [focus]);
  const node = selected ? byId[selected] : null;

  const stateOf = (n: MapNode) => {
    if (n.id === focus) return "selected" as const;
    if (near.has(n.id)) return "near" as const;
    if (focus) return "dim" as const;
    return "idle" as const;
  };

  const pick = (id: string) => setSelected((cur) => (cur === id ? null : id));

  return (
    <div>
      {/* The map itself, for screens wide enough to read it */}
      <div className="hidden lg:block">
        <div
          ref={sheetRef}
          className="sheet relative"
          style={{ aspectRatio: `${W} / ${H}` }}
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="absolute inset-x-6 inset-y-4" onClick={(e) => e.target === e.currentTarget && setSelected(null)}>
            <svg viewBox={`0 0 ${W} ${H}`} className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true" preserveAspectRatio="none">
              {edges.map(([a, b], i) => {
                const lit = focus && (a === focus || b === focus);
                return (
                  <path
                    key={`${a}-${b}`}
                    d={curve(pos[a], pos[b])}
                    pathLength={1}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    className="map-edge"
                    style={{ animationDelay: `${120 + i * 30}ms` }}
                    stroke={lit ? "var(--ballpoint)" : "var(--graphite)"}
                    strokeOpacity={lit ? 1 : 0}
                    strokeWidth={lit ? 2 : 1.25}
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>

            {/* Column headings */}
            {columns.map((c) => (
              <p
                key={c.type}
                className="absolute flex w-max -translate-x-1/2 items-center gap-2 text-[14px] text-graphite-soft"
                style={{ left: `${(COL_X[c.type] / W) * 100}%`, top: 0 }}
              >
                <LegendMark type={c.type} />
                {typeNames[c.type]}
              </p>
            ))}

            {nodes.map((n) => {
              const st = stateOf(n);
              const p = pos[n.id];
              return (
                <button
                  key={n.id}
                  data-node={n.id}
                  type="button"
                  onClick={() => pick(n.id)}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(n.id)}
                  onBlur={() => setHovered(null)}
                  aria-pressed={selected === n.id}
                  aria-expanded={selected === n.id}
                  className={`absolute w-max -translate-x-1/2 -translate-y-1/2 text-center ${nodeClass(n.type, st)}`}
                  style={{ left: `${(p.x / W) * 100}%`, top: `${(p.y / H) * 100}%` }}
                >
                  {n.type === "place" ? (
                    <>
                      <Pin active={st === "selected" || st === "near"} />
                      {n.label}
                    </>
                  ) : (
                    n.label
                  )}
                </button>
              );
            })}
          </div>

          {/* The note opens beside whatever you clicked, on the side with room */}
          {node && cardPos && (
            <aside
              aria-live="polite"
              className="note-pop absolute z-10 w-[21rem] border-[1.5px] border-graphite bg-sheet p-5 shadow-[0_18px_40px_-20px_rgba(40,48,43,.55)]"
              style={{ left: cardPos.left, top: cardPos.top }}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-3 top-2 text-[15px] text-graphite-soft hover:text-ballpoint"
              >
                Close
              </button>
              <Detail node={node} onPick={pick} />
            </aside>
          )}
        </div>
      </div>

      {/* Smaller screens: the same notes, as a list you can open */}
      <div className="lg:hidden">
        {types.map((t) => (
          <div key={t} className="mt-6 first:mt-0">
            <p className="flex items-center gap-2 border-b-[1.5px] border-graphite pb-1 font-semibold text-graphite">
              <LegendMark type={t} />
              {typeNames[t]}
            </p>
            <ul>
              {columns
                .find((c) => c.type === t)!
                .ids.map((id) => byId[id])
                .map((n) => (
                  <li key={n.id} className="border-b border-grid-major">
                    <details className="group py-3">
                      <summary className={`cursor-pointer list-none ${n.type === "question" ? "pen text-[19px] leading-[24px]" : "text-graphite"}`}>
                        {n.label}
                      </summary>
                      <p className="mt-2 font-serif text-[17px] leading-[26px] text-graphite">{n.note}</p>
                      {n.link && (
                        <a
                          href={n.link.href}
                          className="ink-link mt-2 inline-block"
                          {...(n.link.href.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {n.link.label}
                        </a>
                      )}
                    </details>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
