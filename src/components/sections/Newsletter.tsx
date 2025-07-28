import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter = () => {
  const recentPosts = [
    {
      title: "Building Sustainable Tech: Lessons from Climate Innovation",
      excerpt: "Exploring how technology can address climate challenges while maintaining ethical development practices...",
      date: "2024-01-15",
      readTime: "5 min read",
      source: "Medium",
    },
    {
      title: "The Future of Web3: Beyond Hype to Real Impact",
      excerpt: "Analyzing practical applications of blockchain technology that create genuine value for communities...",
      date: "2024-01-08",
      readTime: "7 min read",
      source: "Substack",
    },
    {
      title: "Machine Learning in Energy: Optimizing Grid Performance",
      excerpt: "How ML algorithms are revolutionizing energy distribution and contributing to renewable integration...",
      date: "2024-01-01",
      readTime: "6 min read",
      source: "Medium",
    },
  ];

  return (
    <section id="newsletter" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Newsletter Signup */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Stay Updated
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join my monthly newsletter for insights on technology, innovation, 
                  and building solutions that matter. No spam, just thoughtful content.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Subscribe to My Newsletter
                </h3>
                <form className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                  <Button type="submit" className="w-full">
                    Subscribe Now
                  </Button>
                </form>
                <p className="text-sm text-muted-foreground mt-3">
                  By subscribing, you agree to receive monthly updates. Unsubscribe anytime.
                </p>
              </div>

              <div className="mt-6 flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <span>📬</span>
                  <span>Monthly updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🎯</span>
                  <span>Quality over quantity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🚫</span>
                  <span>No spam</span>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Recent Posts
                </h3>
                <p className="text-muted-foreground">
                  Latest thoughts on technology, innovation, and creating positive impact.
                </p>
              </div>

              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {post.source}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.date} • {post.readTime}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild variant="outline">
                  <Link href="/writing">
                    Read All Writing
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 