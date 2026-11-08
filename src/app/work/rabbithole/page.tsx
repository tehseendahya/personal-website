import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CaseHeader from "@/components/work/CaseHeader";
import ContextPath from "@/components/work/ContextPath";
import Print from "@/components/Print";

export const metadata: Metadata = {
  title: "Rabbithole",
  description:
    "A Neo Hackathon 2025 project (3rd place) that turns research into a branching map: the tree, the context rule, the clustering, and what we didn't finish.",
};

export default function RabbitholePage() {
  return (
    <PageShell>
      <CaseHeader
        title="Rabbithole"
        standfirst="Research turns into forty tabs and a chat thread you can't scroll back through. We built a version where every answer is a node you can branch from."
        facts={[
          { label: "When", value: "November 2025" },
          { label: "What", value: "Neo Hackathon 2025, 3rd place" },
          { label: "Team", value: "Three of us, equal parts" },
          {
            label: "Links",
            value: (
              <span className="flex flex-wrap gap-x-4">
                <a className="ink-link" href="https://rabbithole-cl.vercel.app" target="_blank" rel="noopener noreferrer">Live</a>
                <a className="ink-link" href="https://youtu.be/xVqi0sJ7xJU" target="_blank" rel="noopener noreferrer">Demo</a>
                <a className="ink-link" href="https://github.com/tehseendahya/rabbithole" target="_blank" rel="noopener noreferrer">Code</a>
              </span>
            ),
          },
        ]}
      />

      <article className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,760px)_1fr]">
          <div className="sheet px-5 py-10 sm:px-12 sm:py-14">
            <div className="prose-notebook">
              <h2>The idea</h2>
              <p>
                Chat is linear, and research isn&apos;t. You ask about subsea cables, wonder who
                pays for them, then want to know how repairs work. Three questions later the first
                thread is buried. In Rabbithole you ask from any card, or highlight a sentence and
                ask about that. Each answer becomes a child node on a canvas, so the shape of what
                you explored stays visible.
              </p>

              <h2>How it&apos;s put together</h2>
              <p>
                The frontend is Next.js with React Flow, laid out top-down with dagre. The backend
                is FastAPI on Modal. Answers come from OpenAI&apos;s search-enabled GPT-4o, so
                they&apos;re grounded in the web, and they come back as structured output: a title,
                the answer, two suggested follow-ups and a few subtopics. Sessions are saved to
                Postgres on Supabase, with Google sign-in and shareable links.
              </p>
              <p>
                The tree is just nodes and edges. Each edge remembers the question that created it
                and any text you highlighted. Rather than storing nodes as rows, every operation
                saves a snapshot of the whole graph as JSON. It&apos;s simple, and it gives each
                session a history you can replay.
              </p>
            </div>

            <ContextPath />

            <div className="prose-notebook">
              <h2>Choosing context</h2>
              <p>
                This was the interesting design question. When you ask from a node, we walk the
                edges back to the root and replay that path as a conversation: each ancestor&apos;s
                question, then its title and answer. Siblings and cousins are left out. That keeps
                answers focused on the branch you&apos;re on, and the prompt stays small even when
                the map gets large. The cost is that the model can&apos;t connect ideas across
                branches. That&apos;s what grouping is for.
              </p>
              <p>
                There are two smaller guards. If a new question overlaps 85% or more
                (by words) with one of the last three on the path, the prompt asks for a fresh
                angle instead of repeating itself. And a user&apos;s custom instructions are fenced
                off in their own tag with a hard cap on length.
              </p>

              <h2>Grouping related ideas</h2>
              <p>
                Each node is embedded with OpenAI&apos;s small embedding model, then clustered with
                k-means. Picking k is the fiddly part: we try a few values and keep the best
                silhouette score if it&apos;s above 0.2. Otherwise we fall back to an elbow rule
                (keep adding clusters while the error still drops by more than 8%). A small model
                names each cluster in two or three words, and the canvas colours nodes to match.
                &ldquo;Auto mode&rdquo; uses the same embeddings to attach a new question under
                whichever existing node it&apos;s closest to.
              </p>

              <h2>What we didn&apos;t finish</h2>
              <ul>
                <li>
                  An agent mode with Exa search over MCP that would add nodes to the canvas as it
                  researched. It&apos;s built, but it&apos;s switched off in the shipped version.
                </li>
                <li>
                  The embedding cache lives in memory, so every cold start on Modal throws it away.
                  Auto mode also embeds nodes one at a time.
                </li>
                <li>
                  Two clusters that get the same generated name collide, and one disappears.
                </li>
                <li>Plenty of hackathon leftovers: debug prints, comments that disagree with the code, a README behind the app.</li>
              </ul>
              <p>
                We didn&apos;t get it in front of real researchers in any serious way, so I can&apos;t
                tell you whether the map beats a good notes app.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <Print
              src="/images/work/rabbithole-neo-pitch.jpg"
              alt="Tehseen and a teammate presenting Rabbithole to a packed room at Neo Hackathon, with the app on screen"
              width={1800}
              height={1198}
              tilt={1.5}
              sizes="(min-width: 1024px) 360px, 92vw"
              caption="demo day at Neo, Nov 2025"
            />
          </div>
        </div>

        <p className="mt-12">
          <Link href="/work" className="ink-link">Back to all work</Link>
        </p>
      </article>
    </PageShell>
  );
}
