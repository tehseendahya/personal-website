import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CaseHeader from "@/components/work/CaseHeader";

export const metadata: Metadata = {
  title: "Palantir",
  description:
    "What I worked on as a deployment strategist intern at Palantir in summer 2026: insurance document intelligence and medical-supply procurement forecasting.",
};

export default function PalantirPage() {
  return (
    <PageShell>
      <CaseHeader
        title="Document and procurement AI at Palantir"
        standfirst="I spent summer 2026 as a deployment strategist intern in New York, working with two customers: an insurer and a medical-supply company."
        facts={[
          { label: "When", value: "May to August 2026" },
          { label: "Role", value: "Deployment strategist intern" },
          { label: "Customers", value: "An insurer and a medical-supply company" },
          { label: "Scope", value: "One contributor on larger teams" },
        ]}
      />

      <article className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="sheet mx-auto mt-12 max-w-[760px] px-5 py-10 sm:px-12 sm:py-14 lg:mx-0 lg:ml-[8%]">
          <div className="prose-notebook">
            <p>
              Deployment strategists sit between the software and the people who&apos;ll use it.
              In practice, that means figuring out what the customer is really trying to decide,
              finding the data that bears on it, building the workflow, and then watching people
              use it and fixing what doesn&apos;t fit.
            </p>

            <h2>Insurance: reading a hundred million documents</h2>
            <p>
              The first customer was an insurer. I built extraction and classification agents for a
              pipeline covering more than 100 million documents. Together with the rest of the
              team&apos;s work, that surfaced more than $50 million in addressable premium.
            </p>
            <p>
              I also helped ship the platform the customer&apos;s team now works in. More than 60
              insurance professionals use it every week, in place of the spreadsheets, email
              threads and phone calls they had before.
            </p>

            <h2>Medical supply: forecasting what to buy</h2>
            <p>
              For the second customer I embedded with their team and built procurement forecasting
              agents. Their analysis is informing roughly $20 million in potential savings.
            </p>

            <h2>What the work taught me</h2>
            {/* TODO(tehseen): these are drafted from the brief; rewrite in your own words or cut */}
            <ul>
              <li>
                <strong>The first version of the question is usually wrong.</strong> Most of the
                early work was finding out what decision a team was actually trying to make.
              </li>
              <li>
                <strong>At a hundred million documents, data quality is the project.</strong>
                Classification is only as good as your handling of the scans, duplicates and
                formats nobody planned for.
              </li>
              <li>
                <strong>People have to be able to check the machine.</strong> A tool is only adopted
                when the person using it can see why it said what it said, and correct it.
              </li>
            </ul>

          </div>
        </div>
        <p className="mx-auto mt-12 max-w-[760px] lg:mx-0 lg:ml-[8%]">
          <Link href="/work" className="ink-link">Back to all work</Link>
        </p>
      </article>
    </PageShell>
  );
}
