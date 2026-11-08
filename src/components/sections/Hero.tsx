import Image from "next/image";
import Link from "next/link";
import CopyEmail from "@/components/CopyEmail";
import HeadMap from "@/components/map/HeadMap";
import { site } from "@/content/site";

const elsewhere = [
  { name: "GitHub", href: site.links.github },
  { name: "LinkedIn", href: site.links.linkedin },
  { name: "Substack", href: site.links.substack },
];

const Hero = () => (
  <section className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6">
    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="lg:col-span-8">
        <h1 className="lettering text-[48px] leading-[56px] text-graphite sm:text-[64px] sm:leading-[72px]">
          Hey, I&apos;m Tehseen.
        </h1>
        <p className="mt-6 max-w-[40ch] text-[22px] leading-[32px] text-graphite sm:text-[24px] sm:leading-[36px]">
          I study electrical and computer engineering at Duke, build software for messy real-world
          problems, and go down a lot of rabbit holes about how the world actually runs.
        </p>
        <div className="mt-8">
          <CopyEmail />
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {elsewhere.map((link) => (
              <li key={link.name}>
                <Link href={link.href} target="_blank" rel="noopener noreferrer" className="ink-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figure className="print self-start justify-self-center w-[15rem] sm:w-[17rem] lg:col-span-4 lg:mt-2 lg:justify-self-end">
        <Image
          src="/images/me/tehseen-mic.jpg"
          alt="Tehseen speaking into a microphone on a panel"
          width={421}
          height={333}
          priority
          sizes="(min-width: 640px) 17rem, 15rem"
          className="block h-auto w-full"
        />
      </figure>
    </div>

    <div className="mt-16">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b-[1.5px] border-graphite pb-[10px]">
        <h2 className="lettering text-[32px] leading-[40px] text-graphite">How it all connects</h2>
        <p className="pen text-[19px] leading-[24px]">hover to see connections, click to read more</p>
      </div>
      <p className="mt-4 max-w-[64ch] text-graphite-soft">
        What I&apos;ve worked on, the questions I keep coming back to, the places in between, and
        what I wrote along the way. A line means a real connection, not a theme.
      </p>
      <div className="mt-6">
        <HeadMap />
      </div>
    </div>
  </section>
);

export default Hero;
