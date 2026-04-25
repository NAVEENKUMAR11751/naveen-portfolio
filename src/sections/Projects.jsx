// src/sections/Projects.jsx
import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="orb orb-blue w-96 h-96 top-20 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">What I've built</span>
          <h2 className="section-heading mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mt-4 mx-auto">
            A selection of projects that showcase my technical skills, problem-solving approach,
            and passion for building software that matters.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-14">
          <p className="text-slate-400 text-sm mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/NAVEENKUMAR11751"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 rounded-xl text-sm font-medium hover:border-primary/50 hover:text-white hover:bg-primary/10 transition-all duration-300"
          >
            View all on GitHub →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
