import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const AllProjects = () => {
  return (
    <section id="all-projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to Home
          </Link>
          <div className="mx-auto max-w-3xl text-center mt-8">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              All Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Complete Project Portfolio
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Browse through all of my projects, from complex web applications to
              innovative tools that solve real-world problems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/AshenKavisha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              View GitHub Profile
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};