import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { siteConfig } from "@/content/config";

// Helper function to parse date string to sortable value
function parseDateForSorting(dateStr: string | undefined): number {
  if (!dateStr) return 0;
  
  // If date contains "Present", return a very large number to rank it highest
  if (dateStr.includes('Present')) {
    return 999999; // Very large number to ensure it's always first
  }
  
  // Handle date ranges like "May 2024 - July 2024" (use the first date)
  const datePart = dateStr.split(' - ')[0];
  
  // Parse "Month YYYY" format
  const months: { [key: string]: number } = {
    'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
    'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
  };
  
  const parts = datePart.trim().split(' ');
  if (parts.length === 2) {
    const month = months[parts[0]];
    const year = parseInt(parts[1]);
    if (month && year) {
      return year * 100 + month; // Year * 100 + month for easy sorting
    }
  }
  
  return 0;
}

const ProjectsOverview = () => {
  // Sort projects by date (newest first) and get first 3 as featured projects
  const sortedProjects = [...siteConfig.projects].sort((a, b) => {
    const dateA = parseDateForSorting((a as { date?: string }).date);
    const dateB = parseDateForSorting((b as { date?: string }).date);
    return dateB - dateA; // Descending order (newest first)
  });
  const featuredProjects = sortedProjects.slice(0, 3);
  const categories = siteConfig.projectCategories.map(category => ({
    ...category,
    count: siteConfig.projects.filter(p => p.category === category.href.split('/').pop()).length
  }));

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my work across three main categories: personal projects, 
              contract projects, and hackathons.
            </p>
          </div>

          {/* Categories Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group block p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {category.count} projects
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex items-center text-sm text-primary group-hover:text-primary/80 transition-colors">
                  View All
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                {...project}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/projects">
                View All Projects
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverview; 