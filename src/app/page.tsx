import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import ProjectsOverview from "@/components/sections/ProjectsOverview";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProjectsOverview />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
