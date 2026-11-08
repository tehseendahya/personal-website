// Work, experience and the project archive.
// Rule: describe what was actually built and what actually happened.
// Kinds are deliberate: a case competition is not a contract, a hackathon concept is not a product.

export type Kind =
  | "Internship"
  | "Project lead"
  | "Investing"
  | "Hackathon"
  | "Case competition"
  | "Competition pitch"
  | "Side project"
  | "Learning project";

export type ArchiveEntry = {
  title: string;
  year: string;
  kind: Kind;
  note: string;
  links?: { label: string; href: string }[];
};

export const experience: {
  org: string;
  role: string;
  when: string;
  where: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, or missing if ongoing
  kind: Kind;
  summary: string;
  href?: string;
}[] = [
  {
    org: "Duke Capital Partners",
    start: "2025-09",
    kind: "Investing",
    role: "Investment analyst",
    when: "Sep 2025 – now",
    where: "Durham, NC",
    summary:
      "Sourcing and diligencing AI, SaaS and healthcare startups for Duke's venture fund, and writing monthly investment memos for the partners.",
  },
  {
    org: "Palantir",
    start: "2026-05",
    end: "2026-08",
    kind: "Internship",
    role: "Deployment strategist intern",
    when: "May – Aug 2026",
    where: "New York",
    summary:
      "Built AI document-extraction and classification workflows for an insurance customer, then procurement forecasting for a medical-supply customer.",
    href: "/work/palantir",
  },
  {
    org: "Clinic receptionist agents",
    start: "2025-06",
    end: "2025-12",
    kind: "Project lead",
    role: "Project lead and engineer",
    when: "Jun – Dec 2025",
    where: "North Carolina",
    summary:
      "Voice and SMS agents for eight pediatric autism clinics. Scoped it, ran it, built the voice agent and most of the SMS system, then handed it off.",
    href: "/work/clinic-agents",
  },
  {
    org: "Fastbreak AI",
    start: "2025-05",
    end: "2025-08",
    kind: "Internship",
    role: "Software engineering intern",
    when: "May – Aug 2025",
    where: "Charlotte, NC",
    summary:
      "Worked on Swoop.ai, an event discovery app for amateur sports. I built a CMS that lets tournament operators spin up branded event sites, plus SAML single sign-on shipped as an internal npm package.",
  },
  {
    org: "BenchSci",
    start: "2024-05",
    end: "2024-08",
    kind: "Internship",
    role: "Software engineering intern",
    when: "May – Aug 2024",
    where: "Toronto",
    summary:
      "I got there by winning BenchSci's case competition the year before. I built LLM research agents that draft scientists' reports, and was their first intern.",
  },
  {
    org: "bloXroute Labs",
    start: "2023-06",
    end: "2023-09",
    kind: "Internship",
    role: "Data engineering intern",
    when: "Jun – Sep 2023",
    where: "Remote",
    summary:
      "Analysed latency and block propagation in the Ethereum MEV infrastructure that quant funds and market makers trade on. I was 17.",
  },
];

export const archive: ArchiveEntry[] = [
  {
    title: "Ember",
    year: "2026",
    kind: "Side project",
    note: "A personal CRM that maps your network so you can find warm introductions. Won $1,500 from Duke Venture Group.",
    links: [{ label: "Live", href: "https://ember-network.vercel.app" }],
  },
  {
    title: "Rabbithole",
    year: "2025",
    kind: "Hackathon",
    note: "Turns a research question into an explorable mind map. 3rd place at Neo Hackathon 2025, with two teammates.",
    links: [{ label: "Case study", href: "/work/rabbithole" }],
  },
  {
    title: "LinkedIn Mentor",
    year: "2024",
    kind: "Side project",
    note: "An agent that matches students with mentors using LinkedIn profiles. Presented at LinkedIn HQ to co-founder Allen Blue.",
  },
  {
    title: "Daylee",
    year: "2024",
    kind: "Side project",
    note: "Founders post one update a day, publicly, and keep a streak going. Built solo with Next.js and Supabase.",
    links: [
      { label: "Demo", href: "https://www.loom.com/share/6ac44bc0f1f648fda3526a186f33fb4f" },
      { label: "Code", href: "https://github.com/tehseendahya/daylee" },
    ],
  },
  {
    title: "Smart Networks",
    year: "2023",
    kind: "Learning project",
    note: "Forecast bandwidth demand from ITU data with XGBoost, as a first step towards routing traffic better in under-served regions. Talked it through with people at Verizon and Ericsson. Simulating actual routing was planned as the next step.",
    links: [
      {
        label: "Write-up",
        href: "https://tksworld.notion.site/Optimizing-Internet-Routing-Algorithms-with-Gradient-Boosting-411d4952f5704639b70b807c7185c58c",
      },
      { label: "Video", href: "https://www.youtube.com/watch?v=BpXbB1gkLRU" },
    ],
  },
  {
    title: "Electricity demand forecasting",
    year: "2023",
    kind: "Learning project",
    note: "XGBoost against Prophet on hourly PJM demand. XGBoost won comfortably: 9.2% MAPE against 16.5%.",
    links: [
      {
        label: "Article",
        href: "https://medium.com/@tdahya2/predicting-us-electricity-usage-a-comparison-of-two-approaches-34303b81a4aa",
      },
      { label: "Code", href: "https://github.com/tehseendahya/Energy_predict_xgboost" },
    ],
  },
  {
    title: "Rescue robots with RT-X",
    year: "2023",
    kind: "Hackathon",
    note: "A 36-hour pitch for retrofitting heavy machinery with Google's RT-X model to speed up post-disaster rescue. Top 5.",
    links: [
      {
        label: "Write-up",
        href: "https://loud-vinyl-715.notion.site/Optimizing-post-disaster-rescue-robots-to-save-lives-20x-faster-de846cac217e4c99a4e36fa9e6ce283f",
      },
    ],
  },
  {
    title: "BenchSci case competition",
    year: "2023",
    kind: "Case competition",
    note: "With a team of five, interviewed 15+ BenchSci employees and pitched our solution in the finals. We won, which led to my internship there.",
    links: [{ label: "Final pitch", href: "https://www.youtube.com/watch?v=6bFD5ksRM6w" }],
  },
  {
    title: "Photonix",
    year: "2023",
    kind: "Competition pitch",
    note: "A team concept for using excimer lasers to break down ground-level ozone. Won Most Impactful at Moonshot Challenge '23. Nothing was built; it was a pitch.",
    links: [
      { label: "Article", href: "https://medium.com/@tdahya2/can-lasers-put-an-end-to-climate-change-b566a915da60" },
      { label: "Video", href: "https://www.youtube.com/watch?v=3LYy043jBY4" },
    ],
  },
  {
    title: "EventChain",
    year: "2023",
    kind: "Learning project",
    note: "NFT event tickets on a local Ethereum network, built from a tutorial base to learn Solidity and Hardhat.",
    links: [
      { label: "Article", href: "https://medium.com/@tdahya2/no-more-scalping-ecd045215e48" },
      { label: "Code", href: "https://github.com/tehseendahya/EventChain-fullstack" },
    ],
  },
  {
    title: "Amazon Alexa case competition",
    year: "2023",
    kind: "Case competition",
    note: "A team of four pitched Amazon on getting Gen Z to use Alexa in the kitchen. We delivered a deck and a clickable prototype.",
    links: [
      {
        label: "Deck (PDF)",
        href: "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2Ftehseen.dahya%2FAmazon%20Alexa%20Recommendation%20Deck.pdf?alt=media&token=b4661f7d-abbd-4a56-8839-65ff8169b252",
      },
    ],
  },
  {
    title: "Web3 Twitter",
    year: "2023",
    kind: "Learning project",
    note: "A tutorial-based dApp for posting messages on-chain, built with React and Solidity on the Goerli testnet.",
    links: [
      { label: "Article", href: "https://medium.com/@tdahya2/the-social-network-of-the-future-web3-0s-twitter-71bd1833e918" },
      { label: "Code", href: "https://github.com/tehseendahya/Web3.0-s-Twitter-Backend." },
    ],
  },
  {
    title: "CapsuLedger",
    year: "2023",
    kind: "Hackathon",
    note: "A concept for catching counterfeit drugs: a regulator-issued code on each bottle that anyone can check by SMS.",
    links: [
      { label: "Write-up", href: "https://tehseendahya.substack.com/i/102085018/using-the-blockchain-to-save-million-lives" },
    ],
  },
  {
    title: "ZK-SNARK circuit",
    year: "2023",
    kind: "Learning project",
    note: "A small Circom circuit (prove you know three factors of a number) to learn how zero-knowledge proofs work.",
    links: [
      { label: "Article", href: "https://medium.com/@tdahya2/creating-a-zk-snark-with-circom-2-0-2095e48c6784" },
      { label: "Code", href: "https://github.com/tehseendahya/simple-zk-proof" },
    ],
  },
  {
    title: "CIBC case competition",
    year: "2022",
    kind: "Case competition",
    note: "Pitched CIBC on getting Gen Z into mobile banking: gamified savings, personalised cashback, financial education.",
    links: [
      {
        label: "Deck (PDF)",
        href: "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2Ftehseen.dahya%2FCIBC%20Recommendation%20Deck%20(1).pdf?alt=media&token=574c6156-568b-40cd-a825-5d7a979c1490",
      },
    ],
  },
  {
    title: "mEye Vote",
    year: "2022",
    kind: "Hackathon",
    note: "A concept for voting with an iris-scan hash tied to a wallet, with zero-knowledge proofs to keep ballots private.",
    links: [{ label: "Write-up", href: "https://tehseendahya.substack.com/p/less-talking-more-action-october" }],
  },
];

// Things that broke, or that I'd do differently. Only real ones, from the code or from what happened.
export const lessons: { project: string; first: string; then: string; now: string }[] = [
  {
    project: "Clinic agents",
    first: "Four CrewAI agents in a row: classify, schedule, decide on escalation, write the reply.",
    then: "Every text paid for four model calls in sequence.",
    now: "One tool-calling agent, with everything deterministic moved out of the model.",
  },
  {
    project: "Clinic agents",
    first: "An async calendar client with a shared lock, inside a threaded web server.",
    then: "Python's “future attached to a different loop” error.",
    now: "A fully synchronous sync path, a lock around the token, and one database client per thread.",
  },
  {
    project: "Clinic agents",
    first: "Escalations went to staff as one-way cards in Teams.",
    then: "Staff could see everything but had no clean way to pause the agent and reply themselves.",
    now: "Human takeover goes in the first version, not the second.",
  },
  {
    project: "Clinic agents",
    first: "The hours saved were estimated after the fact.",
    then: "So the 500+ hours figure is an estimate, not a measurement.",
    now: "Instrument the outcome you care about from day one.",
  },
  {
    project: "Smart Networks",
    first: "The plan was to make internet routing smarter in under-served regions.",
    then: "I only got as far as forecasting bandwidth demand. Simulating routing was left as the next step.",
    now: "I describe it as a forecasting project, because that's what it was.",
  },
];
