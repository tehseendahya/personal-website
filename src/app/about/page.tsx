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
                      I&apos;m a student in Toronto who&apos;s genuinely passionate about using technology to tackle some of the world&apos;s biggest challenges. While that might sound ambitious (and maybe a bit naive), I truly believe that thoughtful innovation can help reduce global inequity and create opportunities for everyone.
                    </p>
                    
                    <p>
                      My interest in technology-for-good really crystallized during a teaching trip to Moshi, Tanzania. Working with local kids and seeing firsthand how resource constraints affect education made me realize that the problems worth solving aren&apos;t always the flashiest ones - they&apos;re the ones that can genuinely improve people&apos;s daily lives. That experience sparked my focus on building solutions that are accessible and meaningful to real communities.
                    </p>

                    <p>
                      Most of my time is spent working on projects that sit at the intersection of machine learning, Web3, and climate tech. I&apos;ve been fortunate to work with companies like Amazon, CIBC, and BenchSci, but honestly, some of my favorite projects have been the late-night hackathon builds and personal experiments that started as &quot;what if we could...&quot; conversations with friends.
                    </p>

                    <p>
                      When I&apos;m not coding, you&apos;ll probably find me exploring Toronto&apos;s food scene (I&apos;m always down for good ramen), reading about global development policy, or planning my next travel adventure. I&apos;m also that person who gets genuinely excited about sustainable energy grids and zero-knowledge proofs - yeah, I know how that sounds!
                    </p>

                    <p>
                      What drives me isn&apos;t just the tech itself, but the people and communities behind it. I&apos;ve learned that the most meaningful work happens when you&apos;re building alongside others who share your values. Whether that&apos;s collaborating with fellow developers, mentoring younger students, or just having deep conversations with friends over coffee - those relationships are what keep me grounded and inspired.
                    </p>

                    <p>
                      I&apos;m still figuring a lot of things out (aren&apos;t we all?), but I know I want to spend my time building things that matter, learning from incredible people, and hopefully making a small dent in solving problems that affect real communities. If you&apos;re working on something interesting or just want to chat about ideas, I&apos;d love to hear from you.
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
                What I Value
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary text-2xl">🤝</span>
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
                      <span className="text-secondary text-2xl">🌱</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Personal Growth</h3>
                    <p className="text-sm text-muted-foreground">
                      Constantly learning, pushing boundaries, and embracing new challenges
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent text-2xl">🌍</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Community Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Using technology to advance communities and reduce global inequity
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Currently Working On
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">🎓 Learning & Growing</h3>
                    <p className="text-muted-foreground mb-4">
                      Diving deep into machine learning and AI development while exploring the intersection of technology and social impact.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {siteConfig.personal.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">🚀 Building Projects</h3>
                    <p className="text-muted-foreground mb-4">
                      Working on climate tech solutions, Web3 applications, and ML models that address real-world problems.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/projects">View My Work</Link>
                    </Button>
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