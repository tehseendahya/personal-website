// Everything I've published, newest first. Summaries say what the piece is actually about.

export type Theme = "Building things" | "Technology and the world" | "Travel and life";

export type Post = {
  title: string;
  date: string; // YYYY-MM-DD
  url: string;
  source: "Substack" | "Medium";
  theme: Theme;
  summary: string;
  featured?: boolean;
};

const sub = (slug: string) => `https://tehseendahya.substack.com/p/${slug}`;
const med = (slug: string) => `https://medium.com/@tdahya2/${slug}`;

export const posts: Post[] = [
  {
    title: "From San Francisco to Tanzania to North Carolina: Summer '24 recap",
    date: "2024-08-15",
    url: sub("from-san-francisco-to-tanzania-to"),
    source: "Substack",
    theme: "Travel and life",
    summary:
      "Pitching LinkedIn Mentor at LinkedIn HQ, interning at BenchSci, building Daylee, and running a small lease-to-own motorbike-taxi pilot in Tanzania paid through M-Pesa.",
    featured: true,
  },
  {
    title: "How I'm setting up the next phase of my life",
    date: "2024-03-14",
    url: sub("how-im-setting-up-the-next-phase"),
    source: "Substack",
    theme: "Building things",
    summary:
      "Twelve lessons from the end of high school, a rabbit hole on internet routing that turned into a small grant from the 1517 Fund, and building LinkedIn Mentor.",
  },
  {
    title: "Using machine learning to predict US electricity demand: a comparison of two approaches",
    date: "2023-12-04",
    url: med("predicting-us-electricity-usage-a-comparison-of-two-approaches-34303b81a4aa"),
    source: "Medium",
    theme: "Building things",
    summary:
      "XGBoost against Prophet on hourly PJM data, motivated by how much power new data centres need. XGBoost wins, 9.2% error to 16.5%.",
    featured: true,
  },
  {
    title: "New beginnings: September and October 2023",
    date: "2023-11-04",
    url: sub("new-beginnings-september-and-october"),
    source: "Substack",
    theme: "Technology and the world",
    summary:
      "Moving on from blockchain to the digital divide, a 36-hour hackathon with Google's RT-X robotics model, and dinner with the 1517 Fund.",
  },
  {
    title: "Extending global internet access without building anything",
    date: "2023-10-25",
    url: med("loading-please-refresh-to-access-421a0c3b79b7"),
    source: "Medium",
    theme: "Technology and the world",
    summary:
      "Why billions of people are still offline, how the internet's physical layer actually works, and an argument for squeezing more out of existing networks by predicting bandwidth demand.",
    featured: true,
  },
  {
    title: "Summer 2023 wrap-up",
    date: "2023-09-04",
    url: sub("summer-2023-wrap-up"),
    source: "Substack",
    theme: "Building things",
    summary: "Interning on bloXroute's MEV team, winning BenchSci's case competition, and ETH Toronto.",
  },
  {
    title: "Reflect: May and June 2023",
    date: "2023-07-03",
    url: sub("reflect-may-and-june-2023"),
    source: "Substack",
    theme: "Building things",
    summary: "The ozone-laser pitch winning an award, building EventChain, and going to Collision.",
  },
  {
    title: "No more scalping",
    date: "2023-06-09",
    url: med("no-more-scalping-ecd045215e48"),
    source: "Medium",
    theme: "Building things",
    summary: "A walkthrough of EventChain, an NFT ticketing dApp I built to learn Solidity.",
  },
  {
    title: "Can lasers put an end to climate change?",
    date: "2023-05-16",
    url: med("can-lasers-put-an-end-to-climate-change-b566a915da60"),
    source: "Medium",
    theme: "Technology and the world",
    summary: "Our Moonshot Challenge '23 entry on breaking down ground-level ozone with excimer lasers.",
  },
  {
    title: "Gratitude: April 2023",
    date: "2023-05-07",
    url: sub("gratitude-april-2023"),
    source: "Substack",
    theme: "Travel and life",
    summary:
      "Running a youth mental-health fundraiser with Mahmoud Abdul-Rauf that raised over $150k, and winning the student body election.",
  },
  {
    title: "Step back: March 2023",
    date: "2023-04-01",
    url: sub("step-back-march-2023"),
    source: "Substack",
    theme: "Travel and life",
    summary:
      "The Alexa case competition, the Web3 Twitter build, and a trip to Egypt that left me thinking about corruption and currency collapse.",
  },
  {
    title: "The social network of the future: Web3.0's Twitter",
    date: "2023-03-28",
    url: med("the-social-network-of-the-future-web3-0s-twitter-71bd1833e918"),
    source: "Medium",
    theme: "Building things",
    summary: "Building a decentralized Twitter-style dApp, and an argument against data-monopoly business models.",
  },
  {
    title: "Iterate. Iterate. Iterate.: February 2023",
    date: "2023-03-06",
    url: sub("iterate-iterate-iterate-february"),
    source: "Substack",
    theme: "Building things",
    summary: "An HBS Starbucks China case and rounds of iteration on the Alexa challenge.",
  },
  {
    title: "Get to it: January 2023",
    date: "2023-02-15",
    url: sub("get-to-it-january-2023"),
    source: "Substack",
    theme: "Technology and the world",
    summary: "CapsuLedger, a concept for catching counterfeit drugs in Pakistan by SMS, plus my first Circom circuit.",
  },
  {
    title: "Daily blogs from my time teaching in Moshi, Tanzania",
    date: "2023-01-22",
    url: med("daily-blogs-from-my-time-teaching-in-moshi-tanzania-2f22b9576514"),
    source: "Medium",
    theme: "Travel and life",
    summary: "The diary I kept every night while teaching English with an NGO in Moshi.",
  },
  {
    title: "Onwards: December 2022",
    date: "2023-01-10",
    url: sub("onwards-december-2022"),
    source: "Substack",
    theme: "Travel and life",
    summary: "The CIBC case competition, learning zero-knowledge proofs, and looking back on Tanzania.",
  },
  {
    title: "Creating a ZK-SNARK with Circom 2.0",
    date: "2023-01-07",
    url: med("creating-a-zk-snark-with-circom-2-0-2095e48c6784"),
    source: "Medium",
    theme: "Building things",
    summary: "A tutorial: a toy factorization circuit with Circom and SnarkJS.",
  },
  {
    title: "Less talking, more action: October 2022",
    date: "2022-11-12",
    url: sub("less-talking-more-action-october"),
    source: "Substack",
    theme: "Building things",
    summary: "My first hackathon (blockchain voting with zero-knowledge proofs) and what I took away from it.",
  },
  {
    title: "The ABCs to ZKPs",
    date: "2022-11-05",
    url: med("the-abcs-to-zkps-2e970a57c765"),
    source: "Medium",
    theme: "Technology and the world",
    summary: "A beginner's explainer on zero-knowledge proofs.",
  },
  {
    title: "The takeoff: September 2022",
    date: "2022-10-08",
    url: sub("the-takeoff-september-2022"),
    source: "Substack",
    theme: "Travel and life",
    summary: "Joining TKS, what I learned about networking, and 5am gym mornings.",
  },
];

export const featuredPosts = posts.filter((p) => p.featured);

export function formatMonth(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
