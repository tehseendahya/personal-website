import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectDetails } from "@/content/config";

interface ProjectCardProps {
  title: string;
  description: string;
  category: "personal" | "contracting" | "hackathons";
  technologies?: string[];
  impact?: string;
  githubUrl?: string;
  demoUrl?: string;
  websiteUrl?: string;
  slug: string;
  active?: boolean;
  comingSoon?: boolean;
  showcase?: boolean;
  articleUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  category,
  technologies,
  impact,
  githubUrl,
  demoUrl,
  websiteUrl,
  slug,
  active = false,
  comingSoon = false,
  showcase = false,
  articleUrl,
}: ProjectCardProps) => {
  const categoryColors = {
    personal: "bg-blue-50 text-blue-600 border-blue-100",
    contracting: "bg-secondary/20 text-secondary border-secondary/30",
    hackathons: "bg-gray-100 text-gray-700 border-gray-200",
  };

  const categoryLabels = {
    personal: "Personal",
    contracting: "Contract",
    hackathons: "Hackathon",
  };

  // Determine if this project has external links but no detailed page
  const hasExternalLinks = githubUrl || demoUrl || articleUrl || websiteUrl;
  // Check if this project has a detailed page
  const hasDetailedPage = slug in projectDetails;

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 `}>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={categoryColors[category]}>
            {categoryLabels[category]}
          </Badge>
          {active && (
            <Badge variant="default" className="bg-green-500 hover:bg-green-600">Currently Working On</Badge>
          )}
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        
        {impact && (
          <div className="mb-4 p-3 bg-secondary/5 rounded-lg">
            <p className="text-sm font-medium text-secondary">
              🎯 {impact}
            </p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-3">
        {/* Coming Soon Projects - NO LINKS */}
        {comingSoon && (
          <div className="w-full">
            <Button variant="ghost" size="sm" disabled className="w-full text-muted-foreground">
              📝 More Info Coming Soon
            </Button>
          </div>
        )}

        {/* Complete Projects with Detailed Pages */}
        {!comingSoon && !showcase && hasExternalLinks && (
          <div className="w-full space-y-3">
            <Button asChild variant="outline" size="sm" className="w-full text-foreground hover:text-accent">
              <Link href={`/projects/${slug}`}>
                📖 Learn More
              </Link>
            </Button>
            <div className="flex flex-wrap gap-2 w-full">
              {githubUrl && (
                <Button asChild variant="outline" size="sm" className="border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300">
                  <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
              )}
              {demoUrl && (
                <Button asChild variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300">
                  <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                    Demo
                  </Link>
                </Button>
              )}
              {websiteUrl && (
                <Button asChild variant="outline" size="sm" className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300">
                  <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                    Website
                  </Link>
                </Button>
              )}
              {articleUrl && (
                <Button asChild variant="outline" size="sm" className="border-orange-200 text-orange-700 hover:bg-orange-50 hover:border-orange-300">
                  <Link href={articleUrl} target="_blank" rel="noopener noreferrer">
                    Article
                  </Link>
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Showcase Projects - Show Learn More if detailed page exists, otherwise just external links */}
        {showcase && (
          <div className="w-full space-y-3">
            {/* Show Learn More button if project has detailed page */}
            {hasDetailedPage && (
              <Button asChild variant="outline" size="sm" className="w-full text-foreground hover:text-accent">
                <Link href={`/projects/${slug}`}>
                  📖 Learn More
                </Link>
              </Button>
            )}
            {/* Show external links for showcase projects */}
            {(githubUrl || demoUrl || articleUrl || websiteUrl) && (
              <div className="flex flex-wrap gap-2 w-full">
                {githubUrl && (
                  <Button asChild variant="outline" size="sm" className="border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300">
                    <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Link>
                  </Button>
                )}
                {demoUrl && (
                  <Button asChild variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300">
                    <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                      Demo
                    </Link>
                  </Button>
                )}
                {websiteUrl && (
                  <Button asChild variant="outline" size="sm" className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300">
                    <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                      Website
                    </Link>
                  </Button>
                )}
                {articleUrl && (
                  <Button asChild variant="outline" size="sm" className="border-orange-200 text-orange-700 hover:bg-orange-50 hover:border-orange-300">
                    <Link href={articleUrl} target="_blank" rel="noopener noreferrer">
                      Article
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        )}

        
      </CardFooter>
    </Card>
  );
};

export default ProjectCard; 