import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import CurrentWork from "@/components/sections/CurrentWork";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CurrentWork />
        {/*<ProjectsOverview />
        <Newsletter />*/}
      </main>
      <Footer />
    </div>
  );
}
