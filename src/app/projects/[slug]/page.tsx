import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { projectDetails } from "@/content/config";

// Import projects from centralized config
const projects = projectDetails;
    overview: "This project addresses one of the most critical challenges in modern energy infrastructure: accurate electricity demand forecasting. By leveraging advanced machine learning techniques and time series analysis, the system enables grid operators to optimize energy distribution and integrate renewable sources more effectively.",
    challenge: "Traditional electricity demand forecasting methods often struggle with the increasing complexity of modern grids, renewable energy integration, and changing consumption patterns. The challenge was to develop a system that could handle these complexities while providing accurate, real-time predictions.",
    solution: "Developed a sophisticated ML pipeline using TensorFlow and advanced time series models. The system incorporates weather data, historical consumption patterns, economic indicators, and renewable energy production forecasts to provide highly accurate demand predictions.",
    results: [
      "23% improvement in prediction accuracy compared to traditional methods",
      "Reduced grid operation costs by 15% through optimized energy dispatch",
      "Enabled 30% better integration of renewable energy sources",
      "Decreased carbon emissions by 8% through optimized grid operations"
    ],
    technicalDetails: {
      architecture: "The system uses a multi-layer architecture combining LSTM networks for time series prediction, ensemble methods for improved accuracy, and real-time data processing pipelines.",
      algorithms: "Implemented advanced algorithms including Long Short-Term Memory (LSTM) networks, Random Forest ensembles, and Gaussian Process regression for uncertainty quantification.",
      dataProcessing: "Handles over 50,000 data points per hour from smart meters, weather stations, and grid sensors, with real-time preprocessing and feature engineering.",
      deployment: "Deployed on cloud infrastructure with auto-scaling capabilities, ensuring 99.9% uptime and sub-second prediction response times."
    },
    learnings: [
      "The importance of incorporating external factors like weather and economic indicators in energy forecasting",
      "Real-time data processing challenges and the need for robust error handling",
      "The value of ensemble methods in improving prediction reliability",
      "Grid operator feedback loops are crucial for model improvement"
    ]
  },
  "amazon-alexa-integration": {
    title: "Amazon Alexa Integration",
    description: "Led development of voice-enabled features for Amazon's Alexa platform, enhancing user accessibility and interaction patterns.",
    category: "consulting",
    technologies: ["Node.js", "AWS Lambda", "Alexa Skills Kit", "Voice UI", "AWS"],
    impact: "Increased user engagement by 40% through improved voice interactions",
    githubUrl: undefined,
    overview: "As part of a consulting engagement with Amazon, I led the development of next-generation voice interaction features for the Alexa platform, focusing on accessibility and natural conversation patterns.",
    challenge: "Users were struggling with complex voice commands and limited interaction patterns. The existing system had high abandonment rates and poor user satisfaction scores, particularly among elderly and visually impaired users.",
    solution: "Designed and implemented a comprehensive voice UI system with natural language processing, context awareness, and adaptive learning capabilities. Created intuitive voice flows that felt conversational rather than command-driven.",
    results: [
      "40% increase in user engagement and session duration",
      "65% reduction in voice command errors",
      "Improved accessibility scores by 80% for users with disabilities",
      "95% user satisfaction rating in post-deployment surveys"
    ],
    technicalDetails: {
      architecture: "Built using serverless architecture with AWS Lambda, DynamoDB for session management, and Amazon Comprehend for natural language understanding.",
      algorithms: "Implemented context-aware dialogue management, intent classification with confidence scoring, and adaptive response generation based on user behavior patterns.",
      dataProcessing: "Real-time processing of voice inputs with sub-100ms response times, handling over 1 million interactions per day.",
      deployment: "Deployed across multiple AWS regions with automatic failover and load balancing to ensure global availability."
    },
    learnings: [
      "Voice UI design requires fundamentally different thinking than visual interfaces",
      "Context preservation across conversation turns is crucial for natural interactions",
      "Accessibility considerations must be built into the core design, not added later",
      "User testing with diverse groups is essential for inclusive voice experiences"
    ]
  }
};

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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  const categoryColors = {
    personal: "bg-primary/10 text-primary",
    consulting: "bg-secondary/10 text-secondary",
    hackathons: "bg-accent/10 text-accent",
  };

  const categoryLabels = {
    personal: "Personal Project",
    consulting: "Consulting Project",
    hackathons: "Hackathon Project",
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                  {categoryLabels[project.category as keyof typeof categoryLabels]}
                </Badge>
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
              <div className="flex space-x-4">
                {project.githubUrl && (
                  <Button asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </Link>
                  </Button>
                )}
                <Button asChild variant="outline">
                  <Link href="/projects">← Back to Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Highlight */}
        <section className="py-16 bg-background">
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
        <section className="py-16 bg-muted/30">
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Interested in Similar Projects?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can work together on your next innovative project.
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">View More Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 