import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/content/config";
import CoverImage from "@/components/writing/CoverImage";

export const metadata: Metadata = {
  title: "Writing - Insights & Stories",
  description: "Read Tehseen Dahya's thoughts on technology, innovation, personal growth, and building solutions that matter. Stories from Substack and Medium.",
};

export default function WritingPage() {
  // Sort posts by date (newest first)
  const posts = [...siteConfig.writing].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // Descending order (newest first)
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
                Writing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stories about technology, travel, and building things that matter.
              </p>
              
              {/* Platform Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <Button asChild variant="outline" size="lg" className="px-6 py-3 border-2 border-amber-200 bg-amber-50 text-amber-800 hover:border-amber-300 hover:bg-amber-100 transition-all duration-300 hover:scale-105">
                  <Link href={siteConfig.contact.medium} target="_blank" rel="noopener noreferrer">
                    📰 Medium Articles
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-6 py-3 border-2 border-amber-200 bg-amber-50 text-amber-800 hover:border-amber-300 hover:bg-amber-100 transition-all duration-300 hover:scale-105">
                  <Link href={siteConfig.contact.substack} target="_blank" rel="noopener noreferrer">
                    💌 Substack Newsletter
                  </Link>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Featured posts below • Find my complete writing on Substack
              </p>
            </div>
          </div>
        </section>

        {/* Writing Posts */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-12">
                {posts.map((post, index) => (
                  <Link key={index} href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <article className="group cursor-pointer">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Image */}
                      <div className="order-2 lg:order-1 relative">
                        <div className="aspect-[16/10] relative overflow-hidden rounded-xl bg-muted">
                          <CoverImage
                            src={post.coverImage || ""}
                            alt={post.title}
                            source={post.source}
                          />
                        </div>
                        {/* Date in top right of image card */}
                        {(post as { displayDate?: string }).displayDate && (
                          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-md">
                            <span className="text-xs text-muted-foreground font-medium">
                              {(post as { displayDate: string }).displayDate}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="order-1 lg:order-2 space-y-4">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="secondary" className="capitalize">
                            {post.source}
                          </Badge>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="pt-2">
                          <span className="text-primary font-medium group-hover:underline">
                            Read full article →
                          </span>
                        </div>
                      </div>
                    </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 