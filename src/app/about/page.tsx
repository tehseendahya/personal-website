import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PlacesMap from "@/components/about/PlacesMap";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tehseen Dahya: grew up in Charlotte and Toronto, family roots in Tanzania, studying ECE at Duke, and still working out what to work on.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6">
        <h1 className="lettering text-[48px] leading-[56px] text-graphite sm:text-[64px] sm:leading-[72px]">About</h1>

        <div className="sheet relative mt-10 max-w-[760px] px-5 py-10 sm:px-12 sm:py-14 lg:ml-[8%]">
          <div className="prose-notebook">
            <p>
              I was born and raised in Charlotte, moved to Toronto when I was twelve, and came back
              to North Carolina for university at Duke to study engineering. My family&apos;s roots
              are in Tanzania. I&apos;ve also spent time living in New York and Sydney, and I like
              figuring out how different places work: who runs things, what things cost, what people
              take for granted.
            </p>

            <h2>Moshi, June 2022</h2>
            <p>
              When I was sixteen, I spent a summer teaching English with a local NGO in Moshi,
              Tanzania. I kept a daily blog.
            </p>
            <p>
              That experience made me think a lot about how much opportunity depends on where
              you&apos;re born, the resources around you, and the institutions that shape everyday
              life. I was sixteen and didn&apos;t have many answers, but I had a lot of questions.
            </p>
            <p>
              <a href="https://medium.com/@tdahya2/daily-blogs-from-my-time-teaching-in-moshi-tanzania-2f22b9576514" target="_blank" rel="noopener noreferrer">
                The blog is still online.
              </a>
            </p>

            <h2>How I got into building things</h2>
            <p>
              I got into technology in high school through a natural aptitude for STEM and a mentor
              who gave me two pieces of advice:
            </p>
            <ol className="list-decimal pl-6">
              <li>Pick a technology and become exceptional at it</li>
              <li>Learn how to get in front of important people through cold outreach</li>
            </ol>
            <p>
              Through high school, that meant blockchain and zero-knowledge proofs, then internet
              infrastructure, bandwidth forecasting, and a lot of hackathons and experiments.
            </p>
            <p>
              At seventeen, through cold outreach and a funny story about determination, I interned
              at bloXroute Labs, working on Ethereum infrastructure used by trading firms. I worked
              with some incredibly smart people and learned to love that fast-paced environment.
            </p>
            <p>
              Since then, I&apos;ve spent time at a handful of startups, including BenchSci and
              Fastbreak AI, and most recently at Palantir in New York, building and deploying
              enterprise AI systems.
            </p>
            <p>
              I&apos;ve learned an enormous amount from each experience, but the work that probably
              changed how I think the most happened outside a traditional internship.
            </p>

            <h2>Helping pediatric autism clinics help more patients</h2>
            <p>I spent the second half of 2025 building AI agents for healthcare clinics in North Carolina.</p>
            <p>
              I was negotiating contracts, going into clinics on weekends to watch the front desk
              work, running engineering standups with the MSOs engineering team, and writing a lot of
              code. We eventually deployed across eight clinics, automating parts of intake,
              scheduling, and insurance workflows, saving an estimated 500+ staff hours a month.
            </p>
            <p>
              It was my first real experience being responsible for both whether something worked
              technically and whether anyone actually wanted it.
            </p>
            <p>
              I came away with a much greater appreciation for how messy real-world problems are.
              The interesting parts rarely fit neatly into a software requirements document.
            </p>
            <p>
              <Link href="/work/clinic-agents">More about what we built.</Link>
            </p>

            <h2>What I&apos;m curious about</h2>
            <p>
              These days, I&apos;m studying electrical and computer engineering at Duke, while also
              spending time with Duke Capital Partners looking at startups and how businesses work.
            </p>
            <p>
              Increasingly, I&apos;m fascinated by the places where software meets the physical
              world: shipping and logistics, energy and commodity markets, the subsea cables that
              carry the internet, and the geopolitics behind all of it.
            </p>
            <p>
              I find it remarkable how much of modern life depends on enormous, complicated systems
              that most people rarely think about. I&apos;d love to spend my career understanding and
              building things in that world.
            </p>
            <p>I&apos;m still figuring out exactly what that looks like.</p>

            <h2>Outside of all that</h2>
            <p>
              Amongst having the best time of my life at Duke, I play club hockey, am training for a
              marathon, and enjoy golf and a good poker night. I love traveling, especially when it
              means spending enough time somewhere to get a sense of how people actually live.
            </p>
            <p>
              Most importantly, I care a lot about the people in my life: family, close friends, and
              the people I meet along the way.
            </p>
            <p>
              If you&apos;re in Durham, Toronto, or New York, or find any of this interesting,{" "}
              <a href="mailto:tdahya2@gmail.com">shoot me a message</a>.
            </p>
          </div>
        </div>

        <section id="places" aria-labelledby="places-h" className="mt-24 scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b-[1.5px] border-graphite pb-[10px]">
            <h2 id="places-h" className="lettering text-[32px] leading-[40px] text-graphite">Places</h2>
            <p className="pen text-[19px] leading-[24px]">pick a pin</p>
          </div>
          <p className="mt-4 max-w-[60ch] text-graphite-soft">
            Where I&apos;ve lived, worked or studied, and what happened there.
          </p>
          <div className="mt-6">
            <PlacesMap />
          </div>
        </section>
      </div>
    </PageShell>
  );
}
