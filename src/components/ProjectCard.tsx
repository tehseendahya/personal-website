import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  category: "personal" | "contracting" | "hackathons";
  technologies?: string[];
  impact?: string;
  githubUrl?: string;
  demoUrl?: string;
  slug: string;
  featured?: boolean;
  active?: boolean;
  comingSoon?: boolean;
}

const ProjectCard = ({
  title,
  description,
  category,
  technologies,
  impact,
  githubUrl,
  demoUrl,
  slug,
  featured = false,
  active = false,
  comingSoon = false,
}: ProjectCardProps) => {
  const categoryColors = {
    personal: "bg-primary/10 text-primary",
    contracting: "bg-secondary/10 text-secondary",
    hackathons: "bg-accent/10 text-accent",
  };

  const categoryLabels = {
    personal: "Personal",
    contracting: "Contract",
    hackathons: "Hackathon",
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${featured ? 'ring-2 ring-primary/20' : ''}`}>
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
      
      <CardFooter className="flex justify-between items-center">
        {comingSoon ? (
          <Button variant="ghost" size="sm" disabled>
            More Info Coming Soon
          </Button>
        ) : (
          <Button asChild variant="ghost" size="sm">
            <Link href={`/projects/${slug}`}>
              Learn More
            </Link>
          </Button>
        )}
        
        {!comingSoon && (
          <div className="flex space-x-2">
            {githubUrl && (
              <Button asChild variant="outline" size="sm">
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
            )}
            {demoUrl && (
              <Button asChild variant="outline" size="sm">
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Demo
                </Link>
              </Button>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard; 