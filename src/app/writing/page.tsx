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
  title: "Writing - Insights & Stories",
  description: "Read Tehseen Dahya's thoughts on technology, innovation, personal growth, and building solutions that matter. Stories from Substack and Medium.",
};

export default function WritingPage() {
  const posts = siteConfig.writing;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Writing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Thoughts on technology, innovation, and building solutions that matter. 
                Personal stories from building, traveling, and learning in the real world.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-primary/10 text-primary">Personal Growth</Badge>
                <Badge className="bg-secondary/10 text-secondary">Technology</Badge>
                <Badge className="bg-accent/10 text-accent">Global Impact</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Writing Posts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {posts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {/* Cover Image */}
                        <div className="md:col-span-1">
                          <div className="h-64 md:h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                                                         {post.coverImage ? (
                               <Image
                                 src={`/images/writing/post-${index + 1}.jpg`}
                                 alt={post.title}
                                 fill
                                 className="object-cover"
                               />
                             ) : (
                               <div className="text-4xl">
                                 {post.source === "Medium" ? "📝" : "📖"}
                               </div>
                             )}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="md:col-span-2 p-8">
                          <div className="flex justify-between items-start mb-4">
                            <Badge className={post.source === "Medium" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}>
                              {post.source}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {post.date} • {post.readTime}
                            </span>
                          </div>
                          
                          <h2 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                            <Link href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                              {post.title}
                            </Link>
                          </h2>
                          
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                              <Link href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                                Read on {post.source} →
                              </Link>
                            </Button>
                            
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" asChild>
                                <Link href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(post.externalUrl)}`} target="_blank" rel="noopener noreferrer">
                                  Share
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  Want to read more? Follow me on Medium and Substack for regular updates.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button asChild variant="outline">
                    <Link href={siteConfig.contact.medium} target="_blank" rel="noopener noreferrer">
                      Medium
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={siteConfig.contact.substack} target="_blank" rel="noopener noreferrer">
                      Substack
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 