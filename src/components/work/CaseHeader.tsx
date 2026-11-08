import Link from "next/link";

// Top of a case study: title plus a ruled "title block" of facts, like the corner of an engineering drawing.
export default function CaseHeader({
  title,
  standfirst,
  facts,
}: {
  title: string;
  standfirst: string;
  facts: { label: string; value: React.ReactNode }[];
}) {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
      <p>
        <Link href="/work" className="ink-link text-[15px]">Work</Link>
      </p>
      <h1 className="lettering mt-4 max-w-[20ch] text-[44px] leading-[52px] text-graphite sm:text-[60px] sm:leading-[68px]">
        {title}
      </h1>
      <p className="mt-5 max-w-[56ch] font-serif text-[22px] leading-[33px] text-graphite">{standfirst}</p>
      <dl className="mt-10 grid grid-cols-1 border-[1.5px] border-graphite bg-pad sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="border-b border-graphite/30 px-4 py-3 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <dt className="text-[13px] text-graphite-soft">{f.label}</dt>
            <dd className="mt-1 text-[15px] leading-[22px] text-graphite">{f.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
