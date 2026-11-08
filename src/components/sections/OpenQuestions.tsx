import { nodes } from "@/content/map";

// The questions from the map, read as a list. They stand on their own: no forced links.
const questions = nodes.filter((n) => n.type === "question");

const OpenQuestions = () => (
  <section aria-labelledby="open-questions" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
    <h2
      id="open-questions"
      className="lettering border-b-[1.5px] border-graphite pb-[10px] text-[32px] leading-[40px] text-graphite"
    >
      Things I&apos;m trying to figure out
    </h2>
    <p className="mt-4 max-w-[62ch] text-[18px] leading-[28px] text-graphite-soft">
      A few questions I keep coming back to. Some come from things I&apos;ve built; others are just
      rabbit holes I&apos;ve fallen into. If you&apos;ve thought about any of these, I&apos;d love to talk.
    </p>
    <ul className="mt-6 grid grid-cols-1 gap-x-16 md:grid-cols-2">
      {questions.map((q) => (
        <li key={q.id} className="border-b border-grid-major py-9">
          <p className="pen max-w-[28ch] text-[27px] leading-[33px]">{q.label}</p>
          <p className="mt-4 max-w-[52ch] font-serif text-[17px] leading-[28px] text-graphite">{q.note}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default OpenQuestions;
