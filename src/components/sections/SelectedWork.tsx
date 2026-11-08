import Link from "next/link";

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="lettering border-b-[1.5px] border-graphite pb-[10px] text-[32px] leading-[40px] text-graphite"
    >
      {children}
    </h2>
  );
}

// A hand-ruled sketch of the clinic system: just the shape of it. The full diagram is on the case study.
function FlowSketch() {
  const box = "rounded-[3px] border-[1.5px] border-graphite bg-sheet px-3 py-2 text-[15px] leading-[20px] text-graphite";
  const arrow = "text-graphite-soft text-[15px] leading-[20px] pl-4";
  return (
    <div aria-hidden="true" className="font-sans">
      <div className="grid grid-cols-2 gap-3">
        <div className={box}>Parent texts</div>
        <div className={box}>Parent calls</div>
      </div>
      <p className={arrow}>↓ SMS and voice providers</p>
      <div className={box}>Receptionist agent: knows the clinic, checks the calendar, books, answers</div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <p className={arrow}>↓ when it&apos;s routine</p>
          <div className={box}>Reply sent, booking saved</div>
        </div>
        <div>
          <p className={arrow}>↓ when it isn&apos;t</p>
          <div className={`${box} border-ballpoint text-ballpoint`}>Handed to staff</div>
        </div>
      </div>
    </div>
  );
}

const SelectedWork = () => (
  <section aria-labelledby="selected-work" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
    <SectionTitle id="selected-work">Selected work</SectionTitle>

    {/* Flagship: the clinic agents get the most room */}
    <article className="grid grid-cols-1 gap-x-12 gap-y-8 border-b border-grid-major py-12 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="text-[15px] text-graphite-soft">2025, project lead and engineer</p>
        <h3 className="lettering mt-2 text-[36px] leading-[44px] text-graphite">
          Receptionist agents for eight autism clinics
        </h3>
        <p className="mt-4 max-w-[56ch] text-[18px] leading-[28px] text-graphite">
          I spent weekends in North Carolina clinics watching how front-desk staff handled calls,
          texts, scheduling and insurance questions. Then I built voice and SMS agents to take the
          routine part of that off their plates. Anything the agent wasn&apos;t sure about went to a
          person. Once the system was stable, I handed it to an engineering team.
        </p>
        <dl className="mt-6 grid max-w-[56ch] grid-cols-1 gap-y-3 sm:grid-cols-3 sm:gap-x-6">
          <div>
            <dt className="text-[15px] text-graphite-soft">Clinics</dt>
            <dd className="lettering text-[28px] leading-[36px] text-graphite">8</dd>
          </div>
          <div>
            <dt className="text-[15px] text-graphite-soft">Staff time saved</dt>
            <dd className="lettering text-[28px] leading-[36px] text-graphite">500+ hrs/mo</dd>
          </div>
          <div>
            <dt className="text-[15px] text-graphite-soft">Backlog it cut into</dt>
            <dd className="lettering text-[28px] leading-[36px] text-graphite">18 months</dd>
          </div>
        </dl>
        <p className="mt-6">
          <Link href="/work/clinic-agents" className="ink-link text-[18px]">
            How it worked, and what was hard
          </Link>
        </p>
      </div>
      <div className="self-center">
        <FlowSketch />
      </div>
    </article>

    {/* Palantir: plain text, no visuals, because the work is confidential */}
    <article className="grid grid-cols-1 gap-x-12 gap-y-4 border-b border-grid-major py-12 lg:grid-cols-[16rem_1fr]">
      <div>
        <p className="text-[15px] text-graphite-soft">Summer 2026, New York</p>
        <h3 className="lettering mt-2 text-[28px] leading-[36px] text-graphite">Palantir</h3>
        <p className="text-graphite-soft">Deployment strategist intern</p>
      </div>
      <div>
        <ul className="max-w-[62ch] space-y-3 text-[18px] leading-[28px] text-graphite">
          <li>
            Built extraction and classification agents for a pipeline of 100M+ insurance
            documents, which surfaced more than $50M in addressable premium.
          </li>
          <li>
            Helped ship a platform that 60+ insurance professionals use every week, in place of
            spreadsheets, email threads and phone calls.
          </li>
          <li>
            Embedded with a medical-supply company to build procurement forecasting agents,
            informing about $20M in potential savings.
          </li>
        </ul>
        <p className="mt-5">
          <Link href="/work/palantir" className="ink-link">
            More on what the work was like
          </Link>
        </p>
      </div>
    </article>

    {/* Older experiments, compact */}
    <article className="py-10">
      <h3 className="lettering text-[22px] leading-[28px] text-graphite">Earlier experiments with data</h3>
      <ul className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        <li>
          <p className="text-[15px] text-graphite-soft">2023</p>
          <p className="font-semibold text-graphite">Forecasting US electricity demand</p>
          <p className="max-w-[48ch] text-graphite-soft">
            XGBoost against Prophet on hourly PJM data. XGBoost won comfortably: 9.2% error against
            16.5%.{" "}
            <a className="ink-link" href="https://medium.com/@tdahya2/predicting-us-electricity-usage-a-comparison-of-two-approaches-34303b81a4aa" target="_blank" rel="noopener noreferrer">Write-up</a>
          </p>
        </li>
        <li>
          <p className="text-[15px] text-graphite-soft">2023</p>
          <p className="font-semibold text-graphite">Forecasting bandwidth for smarter routing</p>
          <p className="max-w-[48ch] text-graphite-soft">
            Predicted internet bandwidth demand from ITU data, as a first step towards routing
            traffic better in under-served regions.{" "}
            <a className="ink-link" href="https://tksworld.notion.site/Optimizing-Internet-Routing-Algorithms-with-Gradient-Boosting-411d4952f5704639b70b807c7185c58c" target="_blank" rel="noopener noreferrer">Write-up</a>
          </p>
        </li>
      </ul>
      <p className="mt-8">
        <Link href="/work" className="ink-link">Everything else, including internships and the hackathon pile</Link>
      </p>
    </article>
  </section>
);

export default SelectedWork;
