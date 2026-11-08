"use client";

import { useState } from "react";

// An honest map of the clinic receptionist system, built from the actual codebase.
// "Step through a text" walks one example message through the parts it really touches.

type NodeId =
  | "parent"
  | "sms"
  | "voice"
  | "server"
  | "gates"
  | "agent"
  | "tools"
  | "db"
  | "clinic"
  | "staff"
  | "sync";

const nodes: Record<NodeId, { label: string; detail: string }> = {
  parent: {
    label: "Parent",
    detail: "Usually replying to a first text we sent when their child's referral came in.",
  },
  sms: { label: "SMS provider", detail: "Telnyx. Delivers each inbound text to our server as a webhook." },
  voice: {
    label: "Voice agent",
    detail: "Phone calls ran on Retell, with a separate agent I built that reused the same scheduling and patient logic.",
  },
  server: {
    label: "Web server",
    detail: "Python and Flask on AWS. Drops duplicate webhooks and handles compliance keywords before anything else runs.",
  },
  gates: {
    label: "Rules in code",
    detail: "Consent, which child we're talking about, and opt-outs. Deliberately kept out of the model.",
  },
  agent: {
    label: "Receptionist agent",
    detail: "A single LangGraph agent on GPT-4o (temperature 0.1) that decides what to do and which tools to call.",
  },
  tools: {
    label: "Tools",
    detail: "Eleven of them: search the calendar, find nearby clinics, book, cancel, look up a patient, search clinic info, escalate, record consent.",
  },
  db: {
    label: "Database",
    detail: "Supabase Postgres: patients, referrals, messages, calendar slots, clinic locations. Row-level security on.",
  },
  clinic: {
    label: "Clinic's own system",
    detail: "Where referrals come from and appointments live. Every message is mirrored there so staff see the whole conversation.",
  },
  staff: {
    label: "Front-desk staff",
    detail: "Get a Microsoft Teams card when the agent escalates, with the reason and the last ten messages.",
  },
  sync: {
    label: "Calendar sync",
    detail: "A background thread that copies open slots from the clinic's system into our database every five minutes.",
  },
};

const steps: { title: string; body: string; active: NodeId[] }[] = [
  {
    title: "A parent texts back",
    body: "Say: “Hi, yes, can we book the assessment? Mornings are best.” The SMS provider sends it to our server as a webhook.",
    active: ["parent", "sms", "server"],
  },
  {
    title: "Boring checks first",
    body: "Providers retry webhooks, so duplicates are dropped by message ID. STOP, HELP and START are handled in code for carrier compliance. Words like QUIT get a nudge to reply STOP, because carriers can auto-block a number over them. CANCEL is left alone, because parents use it to mean the appointment.",
    active: ["server"],
  },
  {
    title: "Rules, not the model",
    body: "If siblings share a phone number, we ask which child we're scheduling for. The first “yes” after our opening text is recorded as consent without calling the model at all. Anything legal or irreversible stays in plain code.",
    active: ["gates", "db"],
  },
  {
    title: "The agent decides",
    body: "History comes from the database and the agent picks a tool. As soon as it reaches for the calendar, the parent gets “One moment while I check our calendar…”, because silence feels broken over SMS.",
    active: ["agent", "tools", "sms", "parent"],
  },
  {
    title: "Finding a slot",
    body: "The calendar search only looks at least three days out, and at the three clinics nearest the family's city. The slots come from our own copy of the calendar, which the sync thread keeps fresh.",
    active: ["tools", "db", "sync", "clinic"],
  },
  {
    title: "Booking without double-booking",
    body: "The booking is a conditional update: only take the slot if it's still free. If saving it to the patient fails, the slot is released again. Then the booking goes to the clinic's system.",
    active: ["tools", "db", "clinic"],
  },
  {
    title: "Reply, and keep staff in the loop",
    body: "The confirmation goes back over SMS. The whole exchange is mirrored into the clinic's system, and new bookings post to a Teams channel.",
    active: ["agent", "sms", "parent", "clinic", "staff"],
  },
  {
    title: "When it isn't routine",
    body: "If the agent judges that a person should handle it, it escalates instead of guessing. Staff get a Teams card with the reason and the recent messages, and pick it up from there.",
    active: ["agent", "tools", "staff"],
  },
];

function Box({ id, active, onPick, picked }: { id: NodeId; active: boolean; picked: boolean; onPick: (id: NodeId) => void }) {
  return (
    <button
      type="button"
      onClick={() => onPick(id)}
      aria-pressed={picked}
      className={`w-full rounded-[3px] border-[1.5px] px-3 py-2 text-left text-[15px] leading-[20px] transition-colors ${
        active ? "border-ballpoint bg-[#e6eafb] text-ballpoint" : "border-graphite bg-sheet text-graphite hover:bg-[#eef2e6]"
      } ${picked ? "ring-2 ring-ballpoint ring-offset-2 ring-offset-pad" : ""}`}
    >
      {nodes[id].label}
    </button>
  );
}

function Down({ label }: { label?: string }) {
  return (
    <p aria-hidden="true" className="py-1 pl-4 text-[14px] leading-[18px] text-graphite-soft">
      ↓{label ? ` ${label}` : ""}
    </p>
  );
}

export default function MessageTrace() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<NodeId | null>(null);
  const current = steps[step];
  const isActive = (id: NodeId) => current.active.includes(id);
  const box = (id: NodeId) => (
    <Box id={id} active={isActive(id)} picked={picked === id} onPick={(n) => setPicked(picked === n ? null : n)} />
  );

  return (
    <figure className="sheet not-prose my-10 p-5 sm:p-8">
      <figcaption className="mb-6">
        <p className="lettering text-[24px] leading-[32px] text-graphite">Follow one text through the system</p>
        <p className="mt-1 text-[15px] text-graphite-soft">
          Drawn from the actual codebase. The message is an example. Click any box for what it does.
        </p>
      </figcaption>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_20rem]">
        {/* The map */}
        <div className="font-sans">
          <div className="grid grid-cols-2 gap-3">
            {box("parent")}
            {box("voice")}
          </div>
          <Down label="texts" />
          <div className="max-w-[calc(50%-6px)]">{box("sms")}</div>
          <Down label="webhook" />
          {box("server")}
          <Down />
          {box("gates")}
          <Down />
          <div className="grid grid-cols-2 gap-3">
            {box("agent")}
            {box("tools")}
          </div>
          <Down label="reads and writes" />
          <div className="grid grid-cols-3 gap-3">
            {box("db")}
            {box("clinic")}
            {box("staff")}
          </div>
          <p aria-hidden="true" className="py-1 pl-4 text-[14px] leading-[18px] text-graphite-soft">↑ every five minutes</p>
          <div className="max-w-[calc(66%-4px)]">{box("sync")}</div>
        </div>

        {/* The narration */}
        <div className="flex flex-col">
          <div aria-live="polite" className="min-h-[15rem]">
            <p className="tabular text-[14px] text-graphite-soft">
              Step {step + 1} of {steps.length}
            </p>
            <p className="lettering mt-1 text-[22px] leading-[28px] text-graphite">{current.title}</p>
            <p className="mt-2 font-serif text-[17px] leading-[27px] text-graphite">{current.body}</p>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="rounded-[3px] border-[1.5px] border-graphite px-3 text-[15px] leading-[30px] text-graphite hover:bg-graphite hover:text-pad disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-graphite"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
              disabled={step === steps.length - 1}
              className="rounded-[3px] border-[1.5px] border-ballpoint bg-ballpoint px-3 text-[15px] leading-[30px] text-white hover:opacity-90 disabled:opacity-40"
            >
              Next step
            </button>
          </div>
          {picked && (
            <div className="mt-6 border-t border-grid-major pt-4">
              <p className="font-semibold text-graphite">{nodes[picked].label}</p>
              <p className="mt-1 text-[15px] leading-[23px] text-graphite">{nodes[picked].detail}</p>
            </div>
          )}
        </div>
      </div>
    </figure>
  );
}
