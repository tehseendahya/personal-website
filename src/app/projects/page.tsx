"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
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

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Sort projects by date (newest first)
  const projects = [...siteConfig.projects].sort((a, b) => {
    const dateA = parseDateForSorting((a as { date?: string }).date);
    const dateB = parseDateForSorting((b as { date?: string }).date);
    return dateB - dateA; // Descending order (newest first)
  });

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "personal", label: "Personal", count: projects.filter(p => p.category === "personal").length },
    { id: "contracting", label: "Contract", count: projects.filter(p => p.category === "contracting").length },
    { id: "hackathons", label: "Hackathons", count: projects.filter(p => p.category === "hackathons").length },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  // Maintain sort order for filtered projects
  const sortedFilteredProjects = [...filteredProjects].sort((a, b) => {
    const dateA = parseDateForSorting((a as { date?: string }).date);
    const dateB = parseDateForSorting((b as { date?: string }).date);
    return dateB - dateA; // Descending order (newest first)
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                My Projects
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore my work across full-stack development, Web3, and more. 
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.id)}
                    className="text-sm"
                  >
                    {filter.label} ({filter.count})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedFilteredProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    {...project}
                  />
                ))}
              </div>
              
              {sortedFilteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No projects found for the selected filter.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 