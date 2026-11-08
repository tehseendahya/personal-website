import Link from "next/link";
import { featuredPosts, formatMonth, posts } from "@/content/writing";

const WritingPicks = () => (
  <section aria-labelledby="writing-picks" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
    <h2
      id="writing-picks"
      className="lettering border-b-[1.5px] border-graphite pb-[10px] text-[32px] leading-[40px] text-graphite"
    >
      Writing
    </h2>
    <ul className="grid grid-cols-1 gap-x-10 md:grid-cols-3">
      {featuredPosts.map((post) => (
        <li key={post.url} className="border-b border-grid-major py-6 md:border-b-0">
          <p className="text-[15px] text-graphite-soft">
            {formatMonth(post.date)}, {post.source}
          </p>
          <h3 className="mt-1 font-serif text-[22px] leading-[30px] text-graphite">
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="ink-link text-graphite decoration-graphite/40">
              {post.title}
            </a>
          </h3>
          <p className="mt-2 text-graphite-soft">{post.summary}</p>
        </li>
      ))}
    </ul>
    <p className="mt-6">
      <Link href="/writing" className="ink-link">
        All {posts.length} pieces, mostly monthly updates from high school onwards
      </Link>
    </p>
  </section>
);

export default WritingPicks;
