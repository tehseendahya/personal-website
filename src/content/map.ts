// The homepage map: jobs, projects, open questions, places and writing, and how they actually connect.
// Rules:
// - An edge means a real relationship (same project, same place, same subject), never a stretch.
// - Questions are open questions, not claims of expertise. They don't need a link to anything.
// - Layout comes from `columns` at the bottom of this file.

export type NodeType = "work" | "project" | "question" | "place" | "writing";

export type MapNode = {
  id: string;
  type: NodeType;
  label: string;
  note: string;
  link?: { label: string; href: string };
};

export const typeNames: Record<NodeType, string> = {
  work: "Jobs",
  project: "Projects",
  question: "Questions",
  place: "Places",
  writing: "Writing",
};

export const nodes: MapNode[] = [
  // ---- Agents and work (left) ----
  {
    id: "clinic",
    type: "work",
    label: "Clinic receptionist agents",
    note: "Voice and SMS agents for eight pediatric autism clinics in North Carolina, 2025. I led it and built the voice agent and most of the SMS side.",
    link: { label: "Read the case study", href: "/work/clinic-agents" },
  },
  {
    id: "palantir",
    type: "work",
    label: "Palantir",
    note: "Summer 2026 in New York as a deployment strategist intern: AI document workflows for an insurance customer, then procurement forecasting for a medical-supply one.",
    link: { label: "What I can say about it", href: "/work/palantir" },
  },
  {
    id: "benchsci",
    type: "work",
    label: "BenchSci",
    note: "Won their case competition in 2023, then came back in 2024 as their first intern, building LLM research agents that draft scientists' reports.",
  },
  {
    id: "mentor",
    type: "project",
    label: "LinkedIn Mentor",
    note: "An agent that matches students with mentors from their LinkedIn profiles. I presented it at LinkedIn HQ to co-founder Allen Blue in 2024.",
  },
  {
    id: "rabbithole",
    type: "project",
    label: "Rabbithole",
    note: "A research tool that turns one question into a branching map. Third place at Neo Hackathon 2025, built by three of us.",
    link: { label: "How it works", href: "/work/rabbithole" },
  },
  {
    id: "dcp",
    type: "work",
    label: "Duke Capital Partners",
    note: "Investment analyst since 2025. I diligence AI, SaaS and healthcare startups and write memos for the partners, which mostly means reading a lot of pitch decks.",
  },
  {
    id: "ember",
    type: "project",
    label: "Ember",
    note: "A personal CRM that maps your network so you can find warm introductions. Won $1,500 from Duke Venture Group in 2026.",
    link: { label: "Try it", href: "https://ember-network.vercel.app" },
  },
  {
    id: "fastbreak",
    type: "work",
    label: "Fastbreak AI",
    note: "Summer 2025 in Charlotte. A CMS for tournament operators and SAML single sign-on, shipped as an internal package.",
  },
  {
    id: "bloxroute",
    type: "work",
    label: "bloXroute Labs",
    note: "The summer I was seventeen, remotely: analysing latency and block propagation in the Ethereum infrastructure that trading firms run on.",
  },

  // ---- Places ----
  {
    id: "charlotte",
    type: "place",
    label: "Charlotte",
    note: "Born and raised here until I was twelve. Back in 2025 for Fastbreak and the clinic project.",
    link: { label: "On the world map", href: "/about#places" },
  },
  {
    id: "durham",
    type: "place",
    label: "Durham",
    note: "College at Duke, from 2024, and the most fun place I've ever been: basketball, my frat, club hockey, endless memories. Also ECE, Duke Capital Partners and Ember.",
    link: { label: "On the world map", href: "/about#places" },
  },
  {
    id: "toronto",
    type: "place",
    label: "Toronto",
    note: "Moved here at twelve. High school, TKS, the newsletter, and BenchSci.",
    link: { label: "On the world map", href: "/about#places" },
  },
  {
    id: "nyc",
    type: "place",
    label: "New York",
    note: "Summer 2026, for Palantir.",
  },
  {
    id: "bay",
    type: "place",
    label: "Bay Area",
    note: "Summer 2024, pitching LinkedIn Mentor at LinkedIn HQ.",
  },
  {
    id: "tanzania",
    type: "place",
    label: "Moshi, Tanzania",
    note: "Where my family's roots are. I taught English here with a local NGO the summer I was sixteen, and came back in 2024.",
    link: { label: "On the world map", href: "/about#places" },
  },

  // ---- Questions about how the world works (right) ----

  {
    id: "sydney",
    type: "place",
    label: "Sydney",
    note: "I studied abroad here from August to the end of November 2026, and got to travel around Australia and Southeast Asia.",
    link: { label: "On the world map", href: "/about#places" },
  },

  // ---- Questions I keep coming back to ----
  {
    id: "agents",
    type: "question",
    label: "When can you actually trust an AI agent?",
    note: "On the clinic project, the version that worked in a demo and the version I'd leave running at a real front desk were far apart. We started with several agents passing work between them and ended with one, plus plain code wherever a wrong answer mattered and a handoff to staff for anything unclear. I still don't have a clean rule for when an agent has earned less supervision.",
  },
  {
    id: "geopolitics",
    type: "question",
    label: "Can you engineer your way around geopolitics?",
    note: "A lot of what I end up reading starts as an engineering story and turns into a political one: a subsea cable routed the long way around a contested sea, a shipping lane that empties out after a few attacks, export controls on chips. I'm not an expert in any of it. Mostly I'm trying to see where the engineering stops being the hard part.",
  },
  {
    id: "logistics",
    type: "question",
    label: "Why is moving a container across the world still so complicated?",
    note: "Between a factory and a shelf, one container goes through trucking companies, two ports, a shipping line and customs brokers, and each keeps its own records. Some of that friction is physical: ships are slow and ports fill up. A lot of it seems to be email and PDFs. I'd like to know which part is which. It's a big reason Flexport interests me.",
  },
  {
    id: "skill",
    type: "question",
    label: "How do you actually get exceptionally good at something?",
    note: "In high school a mentor told me to pick one technical skill and become exceptional at it. I've come back to that a lot, partly because I've moved around: blockchain, forecasting, now agents. Running and hockey are where practice adding up is easiest to see. Whether the rest is reps, obsession, the people around you or some mix, I don't know yet.",
  },

  // ---- Old experiments ----
  {
    id: "electricity",
    type: "project",
    label: "Power-demand forecasting",
    note: "A 2023 learning project: XGBoost against Prophet on hourly PJM data. XGBoost won, 9.2% error to 16.5%.",
    link: {
      label: "The write-up",
      href: "https://medium.com/@tdahya2/predicting-us-electricity-usage-a-comparison-of-two-approaches-34303b81a4aa",
    },
  },
  {
    id: "pilot",
    type: "project",
    label: "Motorbike-taxi pilot",
    note: "In 2024 I worked on a small lease-to-own pilot in Tanzania: riders paying off their motorbikes through M-Pesa.",
  },

  // ---- Writing ----
  {
    id: "w-internet",
    type: "writing",
    label: "Extending internet access",
    note: "2023. Why billions of people are still offline, and an argument for predicting bandwidth demand to squeeze more out of networks that already exist.",
    link: { label: "Read on Medium", href: "https://medium.com/@tdahya2/loading-please-refresh-to-access-421a0c3b79b7" },
  },
  {
    id: "w-diary",
    type: "writing",
    label: "Daily blogs from Moshi",
    note: "The diary I kept every night while teaching in Moshi.",
    link: {
      label: "Read on Medium",
      href: "https://medium.com/@tdahya2/daily-blogs-from-my-time-teaching-in-moshi-tanzania-2f22b9576514",
    },
  },
  {
    id: "w-summer24",
    type: "writing",
    label: "Summer '24: SF to Tanzania to NC",
    note: "One summer: LinkedIn HQ, interning at BenchSci, building Daylee, and the motorbike pilot in Tanzania.",
    link: { label: "Read on Substack", href: "https://tehseendahya.substack.com/p/from-san-francisco-to-tanzania-to" },
  },

];

// Undirected. Each one is a real relationship.
export const edges: [string, string][] = [
  ["agents", "clinic"],
  ["agents", "palantir"],
  ["agents", "benchsci"],
  ["agents", "mentor"],
  ["agents", "rabbithole"],
  ["logistics", "palantir"],
  ["logistics", "geopolitics"],
  ["clinic", "charlotte"],
  ["fastbreak", "charlotte"],
  ["palantir", "nyc"],
  ["benchsci", "toronto"],
  ["mentor", "bay"],
  ["dcp", "durham"],
  ["ember", "durham"],
  ["pilot", "tanzania"],
  ["tanzania", "w-diary"],
  ["benchsci", "w-summer24"],
  ["mentor", "w-summer24"],
  ["pilot", "w-summer24"],
];

// The map is drawn as columns, one per kind of thing, top to bottom in this order.
// Ordered so that lines between neighbouring columns stay short.
export const columns: { type: NodeType; ids: string[] }[] = [
  { type: "place", ids: ["toronto", "bay", "nyc", "charlotte", "durham", "tanzania", "sydney"] },
  { type: "work", ids: ["benchsci", "bloxroute", "palantir", "clinic", "fastbreak", "dcp"] },
  { type: "project", ids: ["mentor", "rabbithole", "ember", "electricity", "pilot"] },
  { type: "question", ids: ["agents", "logistics", "geopolitics", "skill"] },
  { type: "writing", ids: ["w-internet", "w-summer24", "w-diary"] },
];
