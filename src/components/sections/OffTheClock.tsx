import Link from "next/link";
import { offTheClock } from "@/content/site";

const OffTheClock = () => (
  <section aria-labelledby="off-the-clock" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
    <h2
      id="off-the-clock"
      className="lettering border-b-[1.5px] border-graphite pb-[10px] text-[32px] leading-[40px] text-graphite"
    >
      Off the clock
    </h2>
    <div className="grid grid-cols-1 gap-x-12 gap-y-8 pt-8 md:grid-cols-2">
      <ul className="pen space-y-1 text-[22px] leading-[30px] !text-graphite">
        {offTheClock.map((thing) => (
          <li key={thing}>{thing}</li>
        ))}
      </ul>
      <div>
        <p className="max-w-[44ch] text-graphite">
          Seven places I&apos;ve lived, worked or studied so far, from
          Charlotte to Sydney, each with a short story.
        </p>
        <p className="mt-3">
          <Link href="/about#places" className="ink-link">See them on the map</Link>
        </p>
      </div>
    </div>
  </section>
);

export default OffTheClock;
