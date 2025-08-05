import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { projectDetails, ProjectDetail } from "@/content/config";

// Import projects from centralized config
const projects = projectDetails;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Project Case Study`,
    description: project.description,
  };
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects] as ProjectDetail;

  if (!project) {
    notFound();
  }

  const categoryColors = {
    personal: "bg-primary/10 text-primary",
    contracting: "bg-secondary/10 text-secondary",
    hackathons: "bg-accent/10 text-accent",
  };

  const categoryLabels = {
    personal: "Personal Project",
    contracting: "Contract Project",
    hackathons: "Hackathon Project",
  };

  // Extract YouTube video ID if demoUrl exists
  const videoId = project.demoUrl ? getYouTubeVideoId(project.demoUrl) : null;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back to Projects Button - Top Right */}
              <div className="flex justify-end mb-6">
                <Button asChild variant="outline" size="sm">
                  <Link href="/projects">← Back to Projects</Link>
                </Button>
              </div>
              
              <div className="mb-6 flex gap-3">
                <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                  {categoryLabels[project.category as keyof typeof categoryLabels]}
                </Badge>
                {(project as { active?: boolean }).active && (
                  <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                    Currently Working On
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {'githubUrl' in project && project.githubUrl && (
                  <Button asChild className="bg-slate-700 hover:bg-slate-800 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      View GitHub
                    </Link>
                  </Button>
                )}
                {'githubUrl2' in project && project.githubUrl2 && (
                  <Button asChild className="bg-slate-700 hover:bg-slate-800 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <Link href={project.githubUrl2} target="_blank" rel="noopener noreferrer">
                      View Second GitHub Repo
                    </Link>
                  </Button>
                )}
                {'articleUrl' in project && project.articleUrl && (
                  <Button asChild className="bg-emerald-700 hover:bg-emerald-800 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <Link href={project.articleUrl} target="_blank" rel="noopener noreferrer">
                       Read Article
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        {videoId && (
          <section className="py-8 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Project Demo</h2>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Project Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Impact Highlight */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-secondary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Key Impact</h2>
                  <p className="text-lg text-secondary font-medium">
                    🎯 {project.impact}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <Separator />

              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <Separator />

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <Separator />

              {/* Results */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.results.map((result, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-secondary font-bold">{index + 1}</span>
                          </div>
                          <p className="text-muted-foreground">{result}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {project.technicalDetails && (
                <>
                  <Separator />

                  {/* Technical Details */}
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">Technical Implementation</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Architecture</h3>
                        <p className="text-muted-foreground">{project.technicalDetails.architecture}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Algorithms</h3>
                        <p className="text-muted-foreground">{project.technicalDetails.algorithms}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Data Processing</h3>
                        <p className="text-muted-foreground">{project.technicalDetails.dataProcessing}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Deployment</h3>
                        <p className="text-muted-foreground">{project.technicalDetails.deployment}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <Separator />

              {/* Key Learnings */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Learnings</h2>
                <div className="space-y-4">
                  {project.learnings.map((learning, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{learning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
      </main>
      <Footer />
    </div>
  );
} 