
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { siteConfig, Project } from "@/content/config";
import { CardContent } from "../ui/card";
import { Card } from "../ui/card";

const CurrentWork = () => {
  // Get active projects from config
  const activeProjects = siteConfig.projects.filter(project => (project as Project).active);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Currently Up To: 
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Active Projects */}
            {activeProjects.map((project) => (
              <Card key={project.slug}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  {/* Impact Section */}
                  {(project as Project).impact && (
                    <div className="mb-4 p-3 bg-secondary/5 rounded-lg">
                      <p className="text-sm font-medium text-secondary">
                        🎯 {(project as Project).impact}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    {(project as Project).comingSoon ? (
                      <Button variant="outline" size="sm" disabled>
                        More Info Coming Soon
                      </Button>
                    ) : (
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/projects/${project.slug}`}>View Project Details</Link>
                      </Button>
                    )}
                    
                    {!(project as Project).comingSoon && (
                      <div className="flex space-x-2">
                        {(project as Project).githubUrl && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={(project as Project).githubUrl!} target="_blank" rel="noopener noreferrer">
                              GitHub
                            </Link>
                          </Button>
                        )}
                        {(project as Project).demoUrl && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={(project as Project).demoUrl!} target="_blank" rel="noopener noreferrer">
                              Demo
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Duke University Card - Always show if no active projects, or as second card if there are active projects */}
            {activeProjects.length === 0 || activeProjects.length === 1 ? (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">🎓 Student at Duke University</h3>
                  <p className="text-muted-foreground mb-4">
                    Studying Electrical and Computer Engineering with a minor in Political Science. Exploring the intersection of technology and policy while building a foundation in both technical and social sciences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">ECE</Badge>
                    <Badge variant="outline" className="text-xs">Computer Science</Badge>
                    <Badge variant="outline" className="text-xs">Political Science</Badge>
                    <Badge variant="outline" className="text-xs">Duke University</Badge>
                  </div>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork; 