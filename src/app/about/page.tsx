import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { siteConfig } from "@/content/config";

export const metadata: Metadata = {
  title: "About - Tehseen Dahya",
  description: "Learn more about Tehseen Dahya - student, developer, and builder working on technology solutions to reduce global inequity.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Profile Image */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-2">
                      <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                        <Image
                          src="/images/profile/profile.png"
                          alt={`${siteConfig.personal.name} - Professional headshot`}
                          width={256}
                          height={256}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                  <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                    Hey, I&apos;m {siteConfig.personal.name}
                  </h1>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                    <p>
                      I&apos;m a 19-year-old from Toronto who&apos;s genuinely curious about how emerging technologies can reshape the world around us. 
                      Although I&apos;m loving what we can do with AI and where it will take us, I love learning about all technologies and focusing not
                      only on the technical details but also the broader implications these innovations have on society.
                    </p>
                    
                    <p>
                      My interest in mission-driven technology crystallized during an eight-week stay in Moshi, Tanzania, when I was 16. Working with local kids 
                      and seeing firsthand how resource and mindset constraints affect education made me realize that the most meaningful problems 
                      require hands-on understanding and experience, rather than classroom or code-based theoretical solutions.
                    </p>

                    <p>
                      Most of my time is spent working on projects that combine emerging technology with some sort of political or socio-economic implication. 
                      I&apos;ve been fortunate to work with some incredible companies as an intern or contractor, but some of my favorite 
                      projects have been the late-night builds and personal experiments that started as &quot;what if we could...&quot; conversations with friends.
                    </p>

                    <p>
                      On a personal level, I love spending time with friends in a variety of scenarios, whether it&apos;s a night out in
                      Durham or Toronto or a casual poker night. I&apos;ve also developed a keen interest in politics, which inspired
                      me to pick up a minor in Political Science at school.
                    </p>

                    <p>
                      What drives me is curiosity and the thrill of building things that matter. I enjoy working in startup environments 
                      due to their pace, requirement for agency, and intimate team settings. Through startups, I hope to build things that matter,
                      learn from incredible people, and hopefully make a small dent in solving problems that affect real communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Interests */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                My values
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary text-2xl">❤️</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Close Relationships</h3>
                    <p className="text-sm text-muted-foreground">
                      Building meaningful connections and learning from diverse perspectives
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-secondary text-2xl">📈</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Always push myself</h3>
                    <p className="text-sm text-muted-foreground">
                      Always be learning and pushing my boundaries physically, intellectually, and emotionally
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent text-2xl">🌍</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Be mission driven</h3>
                    <p className="text-sm text-muted-foreground">
                      Have a long term outlook on what I am working on to ensure there is a positive mission associated
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 