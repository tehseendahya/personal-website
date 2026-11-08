import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CaseHeader from "@/components/work/CaseHeader";
import MessageTrace from "@/components/work/MessageTrace";

export const metadata: Metadata = {
  title: "Receptionist agents for eight autism clinics",
  description:
    "How I scoped, built and handed off voice and SMS agents for eight pediatric autism clinics in North Carolina: architecture, trade-offs and what went wrong.",
};

function Margin({ children }: { children: React.ReactNode }) {
  return <p className="pen mt-6 text-[20px] leading-[26px] lg:absolute lg:-right-60 lg:bottom-16 lg:mt-0 lg:w-52">{children}</p>;
}

export default function ClinicAgentsPage() {
  return (
    <PageShell>
      <CaseHeader
        title="Receptionist agents for eight autism clinics"
        standfirst="I spent weekends in North Carolina clinics watching how the front desk actually worked. Then I built voice and SMS agents to take the routine part of it off their plates."
        facts={[
          { label: "When", value: "June to December 2025" },
          { label: "My role", value: "Project lead. Built the voice agent and about 60% of the SMS system." },
          { label: "Built with", value: "Tyler Scaringella and Nick Brady" },
          { label: "Stack", value: "Python, Flask, LangGraph, GPT-4o, Supabase, Telnyx, Retell, AWS" },
        ]}
      />

      <article className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="sheet relative mx-auto mt-12 max-w-[760px] px-5 py-10 sm:px-12 sm:py-14 lg:mx-0 lg:ml-[8%]">
          <div className="prose-notebook">
            <h2>The front desk</h2>
            <p>
              Pediatric autism clinics run on phone calls and text messages. A family gets a
              referral, and someone at the front desk has to reach them, explain what happens next,
              check which location is closest, find an assessment slot and book it. Then they
              answer the follow-up questions, chase the ones who go quiet, and keep the
              clinic&apos;s own system up to date. Multiply that across eight clinics and you get a
              backlog measured in months. When I started, it was about eighteen.
            </p>
            <p>
              I didn&apos;t want to build this from a spec. So I went in on weekends and watched:
              which questions came up every day, where staff were copying the same information
              between screens, which conversations needed a human and which really didn&apos;t.
            </p>

            <h2>What I was responsible for</h2>
            <p>
              Everything outside the code: scoping, negotiating the contract, the relationship with
              the clinics, and a standup at 8am every day. Inside the code, I built the voice agent
              end to end and roughly 60% of the SMS system. Tyler Scaringella and Nick Brady built
              the rest with me.
            </p>
          </div>
          <Margin>8am standup, every day</Margin>
        </div>

        <MessageTrace />

        <div className="sheet relative mx-auto max-w-[760px] px-5 py-10 sm:px-12 sm:py-14 lg:mx-0 lg:ml-[8%]">
          <div className="prose-notebook">
            <h2>Decisions I&apos;d make again</h2>

            <h3>Four agents became one</h3>
            <p>
              The first prototype used CrewAI with four agents in a row: one to classify the
              message, one to schedule, one to decide on escalation, one to write the reply. That
              meant every text paid for four model calls in sequence. We
              replaced it with a single tool-calling agent in LangGraph and moved everything
              deterministic out of the model altogether.
            </p>

            <h3>The model doesn&apos;t get a vote on consent</h3>
            <p>
              Recording consent, verifying the guardian, working out which sibling a parent means,
              and handling STOP and HELP all happen in ordinary code before the agent runs. It&apos;s
              less clever, but those are the parts where being wrong has legal or human
              consequences, and plain code is easy to test.
            </p>

            <h3>Book with a conditional update, not a check-then-write</h3>
            <p>
              Two families can ask for the same Tuesday morning. A booking only succeeds if the slot
              is still marked free at the moment we write, and if the follow-up write to the patient
              fails, the slot is released. Then the booking is pushed to the clinic&apos;s system.
            </p>

            <h3>Read from a local copy of the calendar</h3>
            <p>
              Instead of calling the clinic&apos;s scheduling API mid-conversation, a background
              thread copies availability into our database every five minutes. It marks the
              day&apos;s slots taken, then re-adds whatever the clinic says is open. That keeps a slow
              external API out of the conversation. The cost is that the copy can be a few minutes
              stale, so the booking step still goes through the clinic&apos;s system.
            </p>

            <h3>Keyword search over a single document</h3>
            <p>
              Clinic information (addresses, services, what to expect at an assessment) lives in one
              long markdown file. The agent searches it with keyword scoring and synonyms, not
              embeddings. The trade-off: it misses
              paraphrases that embeddings would catch, but when a parent got a strange answer you
              could see exactly which of the hundred-odd sections matched, and why.
            </p>

            <h2>What was harder than expected</h2>

            <h3>Threads and event loops</h3>
            <p>
              The server handles requests on threads, and the calendar client was async with a shared
              lock and cached auth token. That produced the classic Python error:
              a future attached to a different event loop. The fix was unglamorous. We made the sync
              path fully synchronous, put the token behind a thread lock, and gave each thread its
              own database client.
            </p>

            <h3>Parents send three texts in a row</h3>
            <p>
              &ldquo;Hi.&rdquo; &ldquo;Can we do Thursday?&rdquo; &ldquo;Actually Friday.&rdquo; Each
              text starts its own agent run, so replies can arrive out of order or answer a question
              that&apos;s already changed. We designed per-number locks and a short queue, then
              deliberately didn&apos;t build them until real traffic showed it was a problem worth the
              complexity.
            </p>

            <h3>Carriers have opinions</h3>
            <p>
              US texting rules mean certain words trigger automatic opt-outs. If a parent typed QUIT,
              the carrier could block the number without us knowing. So the server catches those
              words and asks them to reply STOP if they mean it. CANCEL is left alone, because parents
              use it to mean an appointment, not the conversation.
            </p>

            <h3>Testing something that talks back</h3>
            <p>
              Unit tests don&apos;t tell you whether a conversation goes well. So we built a harness
              where another model plays a parent: anxious, Spanish-speaking, confused or
              aggressive, each with their own situation and preferred times. Many of these run in
              parallel against the agent. Each run ends with an outcome code: the parent was
              satisfied, it hit a 25-message cap, or the agent ended it. Alongside it sat a
              regression suite keyed to the project&apos;s requirement IDs.
            </p>

            <h2>What happened</h2>
            <ul>
              <li>Ran across eight clinics, handling hundreds of patient conversations a week over text and phone.</li>
              <li>Saved an estimated 500+ hours of staff time a month. {/* TODO(tehseen): one sentence on how this was estimated */}</li>
              <li>Cut into a backlog that had reached about eighteen months.</li>
              <li>
                Once it was stable, I handed the system and what we&apos;d learned to an internal
                engineering team.
              </li>
            </ul>

            <h2>What I&apos;d change</h2>
            <ul>
              <li>
                <strong>Let staff take over.</strong> Escalations went to Teams as one-way cards.
                Staff could see everything, but there was no clean way to pause the agent and reply
                as a person. That should have been in the first version.
              </li>
              <li>
                <strong>Run the tests in CI.</strong> We had the simulator and a regression suite,
                but our CI only guarded which branches could merge. Wiring the regression suite into
                every pull request would have caught a few things earlier.
              </li>
              <li>
                <strong>Keep conversation state out of process memory.</strong> Some state lived in
                the server process, which is fine on one machine and wrong the moment you add a
                second.
              </li>
              <li>
                <strong>Put clinic details in the database.</strong> Locations and addresses started
                out in code. That was fine for one organisation and painful for anything beyond it.
              </li>
              <li>
                <strong>Measure the time saved from day one.</strong> The hours figure is an
                estimate. I&apos;d instrument it properly next time.
              </li>
            </ul>

            <p>
              No patient data, clinic names or internal details appear on this page. If you&apos;re
              building something similar and want to compare notes,{" "}
              <a href="mailto:tdahya2@gmail.com">email me</a>.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-[760px] lg:mx-0 lg:ml-[8%]">
          <Link href="/work" className="ink-link">Back to all work</Link>
        </p>
      </article>
    </PageShell>
  );
}
