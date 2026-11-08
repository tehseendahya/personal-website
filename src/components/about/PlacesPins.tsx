"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type Pin = {
  id: string;
  place: string;
  when: string;
  story: string;
  link?: { label: string; href: string };
  left: number;
  top: number;
};

const labelSide: Record<string, "left" | "right" | "top" | "bottom"> = {
  bay: "top",
  toronto: "top",
  durham: "bottom",
  charlotte: "left",
  moshi: "left",
  sydney: "left",
};

const MAX_ZOOM = 8;
type View = { k: number; tx: number; ty: number };

export default function PlacesPins({ pins, children }: { pins: Pin[]; children: React.ReactNode }) {
  const [selected, setSelected] = useState("moshi");
  const p = pins.find((x) => x.id === selected) ?? pins[0];
  const external = p.link && !p.link.href.startsWith("/");

  // Pan and zoom. The land layer is scaled; pins are re-positioned so they stay the same size.
  const box = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 1, h: 1 });
  const [view, setView] = useState<View>({ k: 1, tx: 0, ty: 0 });
  const [smooth, setSmooth] = useState(false);
  const [dragging, setDragging] = useState(false);
  const pointers = useRef(new Map<number, { x: number; y: number }>());

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clamp = useCallback(
    (v: View): View => {
      const k = Math.min(MAX_ZOOM, Math.max(1, v.k));
      return {
        k,
        tx: Math.min(0, Math.max(size.w - size.w * k, v.tx)),
        ty: Math.min(0, Math.max(size.h - size.h * k, v.ty)),
      };
    },
    [size],
  );

  // Zoom by a factor, keeping the point (px, py) inside the map where it is.
  const zoomAt = useCallback(
    (factor: number, px: number, py: number, animate = false) => {
      setSmooth(animate);
      setView((v) => {
        const k = Math.min(MAX_ZOOM, Math.max(1, v.k * factor));
        const r = k / v.k;
        return clamp({ k, tx: px - (px - v.tx) * r, ty: py - (py - v.ty) * r });
      });
    },
    [clamp],
  );

  // Trackpad pinch arrives as ctrl+wheel. A plain scroll is left alone so the page still scrolls.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const r = el.getBoundingClientRect();
      zoomAt(Math.exp(-e.deltaY * 0.01), e.clientX - r.left, e.clientY - r.top);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomAt]);

  const local = (e: { clientX: number; clientY: number }) => {
    const r = box.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    box.current!.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, local(e));
    setSmooth(false);
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const map = pointers.current;
    const prev = map.get(e.pointerId);
    if (!prev) return;
    const now = local(e);
    if (map.size === 1) {
      setView((v) => clamp({ ...v, tx: v.tx + now.x - prev.x, ty: v.ty + now.y - prev.y }));
    } else if (map.size === 2) {
      const other = [...map.entries()].find(([id]) => id !== e.pointerId)![1];
      const before = Math.hypot(prev.x - other.x, prev.y - other.y);
      const after = Math.hypot(now.x - other.x, now.y - other.y);
      if (before > 0) zoomAt(after / before, (now.x + other.x) / 2, (now.y + other.y) / 2);
    }
    map.set(e.pointerId, now);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size === 0) setDragging(false);
  };

  const select = (id: string, recenter: boolean) => {
    setSelected(id);
    if (!recenter || view.k === 1) return;
    const pin = pins.find((x) => x.id === id)!;
    setSmooth(true);
    setView((v) =>
      clamp({ ...v, tx: size.w / 2 - (pin.left / 100) * size.w * v.k, ty: size.h / 2 - (pin.top / 100) * size.h * v.k }),
    );
  };

  const { k, tx, ty } = view;
  const ease = smooth ? "250ms ease-out" : "0s";

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_20rem]">
      <div className="sheet relative self-start p-3 sm:p-4">
        <div
          ref={box}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onDoubleClick={(e) => {
            if ((e.target as HTMLElement).closest("button")) return;
            const at = local(e);
            zoomAt(2, at.x, at.y, true);
          }}
          className={`relative select-none ${k > 1 ? (dragging ? "cursor-grabbing" : "cursor-grab") : ""}`}
          style={{ touchAction: k > 1 ? "none" : "pan-y" }}
        >
          <div className="overflow-hidden">
            <div
              style={{
                transform: `translate(${tx}px, ${ty}px) scale(${k})`,
                transformOrigin: "0 0",
                transition: `transform ${ease}`,
              }}
            >
              {children}
            </div>
          </div>

          {pins.map((pin) => {
            const on = pin.id === selected;
            // The East Coast pins sit close together, so each label gets a side by hand.
            const side = labelSide[pin.id] ?? "right";
            const x = (pin.left / 100) * size.w * k + tx;
            const y = (pin.top / 100) * size.h * k + ty;
            if (x < -2 || x > size.w + 2 || y < 0 || y > size.h + 2) return null;
            return (
              <button
                key={pin.id}
                type="button"
                onClick={() => select(pin.id, false)}
                aria-pressed={on}
                aria-label={`${pin.place}, ${pin.when}`}
                className="group absolute flex items-end"
                style={{
                  left: `calc(${pin.left * k}% + ${tx}px)`,
                  top: `calc(${pin.top * k}% + ${ty}px)`,
                  transition: `left ${ease}, top ${ease}`,
                  transform:
                    side === "left"
                      ? "translate(calc(-100% + 7px), -100%)"
                      : side === "top"
                        ? "translate(-50%, -100%)"
                        : side === "bottom"
                          ? "translate(-50%, -20px)"
                          : "translate(-7px, -100%)",
                  flexDirection: side === "left" ? "row-reverse" : side === "top" ? "column-reverse" : side === "bottom" ? "column" : "row",
                  alignItems: side === "top" || side === "bottom" ? "center" : "flex-end",
                }}
              >
                <svg width="14" height="20" viewBox="0 0 14 20" aria-hidden="true" className="shrink-0">
                  <path d="M7 19C7 19 1.5 12 1.5 7.2a5.5 5.5 0 0 1 11 0C12.5 12 7 19 7 19Z" fill={on ? "var(--ballpoint)" : "var(--graphite)"} />
                  <circle cx="7" cy="7" r="2.2" fill="var(--sheet)" />
                </svg>
                <span
                  className={`${side === "top" || side === "bottom" ? "mb-0" : "mb-3"} hidden whitespace-nowrap px-1 text-[14px] leading-[18px] sm:inline ${
                    on ? "pen !text-[18px] font-semibold" : "text-graphite group-hover:text-ballpoint"
                  }`}
                >
                  {pin.place}
                </span>
              </button>
            );
          })}

          <div className="absolute bottom-2 left-2 z-10 flex gap-1">
            {[
              { label: "Zoom in", text: "+", act: () => zoomAt(1.6, size.w / 2, size.h / 2, true), off: k >= MAX_ZOOM },
              { label: "Zoom out", text: "−", act: () => zoomAt(1 / 1.6, size.w / 2, size.h / 2, true), off: k <= 1 },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                aria-label={b.label}
                onClick={b.act}
                disabled={b.off}
                className="h-8 w-8 rounded-[3px] border border-graphite/50 bg-sheet text-[18px] leading-none text-graphite hover:border-ballpoint disabled:opacity-40"
              >
                {b.text}
              </button>
            ))}
            {k > 1 && (
              <button
                type="button"
                onClick={() => {
                  setSmooth(true);
                  setView({ k: 1, tx: 0, ty: 0 });
                }}
                className="h-8 rounded-[3px] border border-graphite/50 bg-sheet px-2 text-[14px] text-graphite hover:border-ballpoint"
              >
                Reset
              </button>
            )}
          </div>
        </div>
        <p className="mt-2 text-[13px] text-graphite-soft">Drag to move. Pinch, double-click or use + and − to zoom.</p>
      </div>

      <aside aria-live="polite" className="sheet self-start p-6">
        <p className="text-[14px] text-graphite-soft">{p.when}</p>
        <p className="lettering mt-1 text-[28px] leading-[34px] text-graphite">{p.place}</p>
        <p className="mt-3 font-serif text-[17px] leading-[27px] text-graphite">{p.story}</p>
        {p.link &&
          (external ? (
            <a href={p.link.href} className="ink-link mt-3 inline-block" target="_blank" rel="noopener noreferrer">
              {p.link.label}
            </a>
          ) : (
            <Link href={p.link.href} className="ink-link mt-3 inline-block">
              {p.link.label}
            </Link>
          ))}
        <ul className="mt-6 flex flex-wrap gap-2 border-t border-grid-major pt-4">
          {pins.map((pin) => (
            <li key={pin.id}>
              <button
                type="button"
                onClick={() => select(pin.id, true)}
                aria-pressed={pin.id === selected}
                className={`rounded-[3px] border px-2 py-0.5 text-[14px] ${
                  pin.id === selected ? "border-ballpoint bg-ballpoint text-white" : "border-graphite/40 bg-pad text-graphite hover:border-ballpoint"
                }`}
              >
                {pin.place}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
