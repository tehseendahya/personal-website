"use client";

import { useMemo, useState } from "react";

// Illustrates Rabbithole's real context rule: asking from a node sends only that node's
// ancestors (the path back to the root). No siblings, no summary. The tree itself is an example.

type N = { id: string; title: string; parent?: string; q: string };

const tree: N[] = [
  { id: "root", title: "Subsea cables", q: "How do subsea cables work?" },
  { id: "lay", title: "Laying a cable", parent: "root", q: "How is a cable actually laid?" },
  { id: "own", title: "Who owns them", parent: "root", q: "Who pays for these?" },
  { id: "cut", title: "When one gets cut", parent: "root", q: "What happens when one breaks?" },
  { id: "ships", title: "Cable ships", parent: "lay", q: "How many cable ships exist?" },
  { id: "route", title: "Choosing a route", parent: "lay", q: "How do they pick the route?" },
  { id: "hyper", title: "Hyperscalers", parent: "own", q: "Why are Google and Meta building their own?" },
  { id: "repair", title: "Repairs at sea", parent: "cut", q: "How long does a repair take?" },
];

const byId = Object.fromEntries(tree.map((n) => [n.id, n]));
const children = (id: string) => tree.filter((n) => n.parent === id);

function pathTo(id: string): N[] {
  const out: N[] = [];
  let cur: N | undefined = byId[id];
  while (cur) {
    out.unshift(cur);
    cur = cur.parent ? byId[cur.parent] : undefined;
  }
  return out;
}

export default function ContextPath() {
  const [selected, setSelected] = useState("route");
  const path = useMemo(() => pathTo(selected), [selected]);
  const onPath = new Set(path.map((n) => n.id));

  const renderNode = (n: N, depth: number): React.ReactNode => (
    <li key={n.id}>
      <button
        type="button"
        onClick={() => setSelected(n.id)}
        aria-pressed={selected === n.id}
        className={`my-1 rounded-[3px] border-[1.5px] px-3 py-1.5 text-left text-[15px] leading-[20px] ${
          selected === n.id
            ? "border-ballpoint bg-ballpoint text-white"
            : onPath.has(n.id)
              ? "border-ballpoint bg-[#e6eafb] text-ballpoint"
              : "border-graphite/50 bg-sheet text-graphite-soft hover:border-graphite hover:text-graphite"
        }`}
      >
        {n.title}
      </button>
      {children(n.id).length > 0 && (
        <ul className="ml-5 border-l-[1.5px] border-graphite/30 pl-4">{children(n.id).map((c) => renderNode(c, depth + 1))}</ul>
      )}
    </li>
  );

  return (
    <figure className="not-prose my-10 border-[1.5px] border-graphite/25 bg-pad/60 p-5 sm:p-6">
      <figcaption className="mb-6">
        <p className="lettering text-[24px] leading-[32px] text-graphite">What the model sees</p>
        <p className="mt-1 text-[15px] text-graphite-soft">
          Pick a node to ask a follow-up from it. Only the highlighted path is sent as context. The
          tree is an example; the rule is the real one from the code.
        </p>
      </figcaption>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ul className="font-sans">{renderNode(byId.root, 0)}</ul>
        <div aria-live="polite">
          <p className="text-[14px] text-graphite-soft">Sent to the model, oldest first</p>
          <ol className="mt-2 space-y-2 font-sans text-[15px] leading-[22px]">
            {path.map((n, i) => (
              <li key={n.id} className="border-l-[3px] border-ballpoint/60 pl-3">
                <span className="text-graphite-soft">User: </span>
                <span className="text-graphite">{n.q}</span>
                <br />
                <span className="text-graphite-soft">Assistant: </span>
                <span className="text-graphite">
                  {i === path.length - 1 ? "(new answer generated here)" : `${n.title} + the answer text`}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-[14px] text-graphite-soft">
            Left out: {tree.length - path.length} other nodes on the map.
          </p>
        </div>
      </div>
    </figure>
  );
}
