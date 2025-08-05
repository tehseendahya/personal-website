import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
                      I&apos;m a student in Toronto who&apos;s genuinely passionate about using technology to tackle some of the world&apos;s 
                      biggest challenges. While that might sound ambitious (and maybe a bit naive), I truly believe that thoughtful innovation 
                      can help reduce global inequity and create opportunities for everyone.
                    </p>
                    
                    <p>
                      My interest in technology-for-good really crystallized during a teaching trip to Moshi, Tanzania. Working with local kids 
                      and seeing firsthand how resource constraints affect education made me realize that the problems worth solving aren&apos;t 
                      always the flashiest ones - they&apos;re the ones that can genuinely improve people&apos;s daily lives. That experience sparked 
                      my focus on building solutions that are accessible and meaningful to real communities.
                    </p>

                    <p>
                      Most of my time is spent working on projects that relate some degree of emerging technology with a political or soci-economic 
                      implication, allowing me to apply both my left and right brain to solve the problem . I&apos;ve been fortunate to work with 
                      some incredible companies as an intern or contractor, but some of my favorite projects have been the late-night builds 
                      and personal experiments that started as &quot;what if we could...&quot; conversations with friends.
                    </p>

                    <p>
                      On a personal level, I love spending time with my friends in a variety of different scenarios, whether it's a night out in
                      Durham or Toronto or a casual poker night in. As I've gotten older, I've also developed a keen interest in politics, inspiring
                      me to pick up a minor in Political Science at school.
                    </p>

                    <p>
                      What drives me isn&apos;t just the technology for the sake of technology, but the people and communities I am working with. I&apos;ve 
                      learned that the most meaningful work happens when you&apos;re working alongside others who share your values, not just academic or career 
                      interests. 
                    </p>

                    <p>
                      I&apos;m still figuring a lot of things out about myself and the world, but I know I enjoy working in startup environments due to their pace, 
                      requirement for agency, and initmate team settings. Through startups I hope to build things that matter,
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