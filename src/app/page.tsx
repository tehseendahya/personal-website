import PageShell from "@/components/PageShell";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import OpenQuestions from "@/components/sections/OpenQuestions";
import WritingPicks from "@/components/sections/WritingPicks";
import OffTheClock from "@/components/sections/OffTheClock";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <SelectedWork />
      <OpenQuestions />
      <WritingPicks />
      <OffTheClock />
    </PageShell>
  );
}
