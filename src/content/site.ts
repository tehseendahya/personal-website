// Site-wide facts about Tehseen. Everything here should be true and checkable.
// If you change a claim, check it against docs/redesign-audit.md first.

export const site = {
  name: "Tehseen Dahya",
  url: "https://tehseendahya.com",
  description:
    "Duke ECE student. I've built voice and SMS agents for autism clinics, AI document workflows at Palantir, and a pile of experiments. Also: notes on infrastructure, travel and how the world works.",
  email: "tdahya2@gmail.com",
  links: {
    github: "https://github.com/tehseendahya",
    linkedin: "https://www.linkedin.com/in/tehseen-dahya-jr/",
    x: "https://x.com/tehseen_0",
    substack: "https://tehseendahya.substack.com",
    medium: "https://medium.com/@tdahya2",
  },
  nav: [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Writing", href: "/writing" },
    { name: "About", href: "/about" },
  ],
} as const;

export const offTheClock = [
  "Training for a marathon",
  "Club ice hockey at Duke",
  "Lifting and calisthenics",
  "Poker nights with friends",
  "Golf",
];

// The world map on /about. Only places with a real story attached.
// lon/lat are approximate city positions. Add a place by adding a line here.
export const places: {
  id: string;
  place: string;
  when: string;
  lon: number;
  lat: number;
  story: string;
  link?: { label: string; href: string };
}[] = [
  {
    id: "charlotte",
    place: "Charlotte",
    when: "Born here, until age twelve",
    lon: -80.8,
    lat: 35.2,
    story:
      "Where I was born and grew up until we moved to Toronto when I was twelve. I came back in summer 2025 to intern at Fastbreak AI, and it's where the clinic project happened, with weekends visiting the clinics to watch how the front desk actually worked.",
  },
  {
    id: "durham",
    place: "Durham",
    when: "2024 onwards, for Duke",
    lon: -78.9,
    lat: 36.0,
    story:
      "Honestly the most fun place I've ever been. Between Duke basketball, my frat, club hockey and everything in between, it's been endless memories. On the more professional side, I study electrical and computer engineering, look at startups with Duke Capital Partners, and won a Duke Venture Group prize for Ember.",
  },
  {
    id: "toronto",
    place: "Toronto",
    when: "From age twelve",
    lon: -79.4,
    lat: 43.7,
    story:
      "Where I went to high school. It's where I joined TKS, started the newsletter, did a lot of hackathons and case competitions, and later interned at BenchSci.",
  },
  {
    id: "bay",
    place: "Bay Area",
    when: "Summer 2024",
    lon: -122.2,
    lat: 37.6,
    story: "Where I presented LinkedIn Mentor at LinkedIn HQ, to co-founder Allen Blue.",
    link: { label: "The summer recap", href: "https://tehseendahya.substack.com/p/from-san-francisco-to-tanzania-to" },
  },
  {
    id: "nyc",
    place: "New York",
    when: "Summer 2026",
    lon: -74.0,
    lat: 40.7,
    story: "A summer at Palantir, on AI document workflows and procurement forecasting.",
    link: { label: "More on the work", href: "/work/palantir" },
  },
  {
    id: "moshi",
    place: "Moshi, Tanzania",
    when: "2022 and 2024",
    lon: 37.3,
    lat: -3.35,
    story:
      "My family's roots are in Tanzania. The summer I was sixteen I taught English here with a local NGO and wrote a diary every night. I came back to Tanzania in 2024 to work on a small motorbike-taxi pilot, with riders paying off their bikes through M-Pesa.",
    link: {
      label: "The diary",
      href: "https://medium.com/@tdahya2/daily-blogs-from-my-time-teaching-in-moshi-tanzania-2f22b9576514",
    },
  },  {
    id: "sydney",
    place: "Sydney",
    when: "Aug to Nov 2026",
    lon: 151.2,
    lat: -33.9,
    story:
      "I studied abroad here for four months, from August to the end of November 2026, and got to travel around Australia and Southeast Asia.",
  },
];

