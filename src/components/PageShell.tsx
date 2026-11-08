import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Every page sits on the same grid paper, under the title-block header.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="paper min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[60] focus:bg-pad focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
