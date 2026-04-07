// src/components/ProjectCard.jsx
import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Zap } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8, rotateX: 2, rotateY: 1.5, scale: 1.01 }}
      style={{ transformPerspective: 1200 }}
      className="group relative bg-slate-800/50 backdrop-blur border border-slate-700/60 
                 rounded-2xl p-6 flex flex-col
                 hover:border-primary/40 transition-all duration-400 card-glow"
    >
      {/* Top bar */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{project.emoji}</span>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>
        <div className="flex gap-1 shrink-0 ml-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 text-slate-500 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200"
            >
              <FiGithub size={17} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-2 text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.summary}</p>

      {/* Problem Solved */}
      {project.problem && (
        <div className="mb-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700/40">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
            <Zap size={11} className="text-amber-400" />
            Problem Solved
          </p>
          <p className="text-slate-300 text-xs leading-relaxed">{project.problem}</p>
        </div>
      )}

      {/* Impact */}
      <div className="mb-4 flex items-start gap-2">
        <TrendingUp size={15} className="text-emerald-400 mt-0.5 shrink-0" />
        <p className="text-emerald-400 text-sm font-medium leading-snug">{project.impact}</p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      {/* Bottom links */}
      <div className="flex gap-3 mt-5 pt-4 border-t border-slate-700/40">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <FiGithub size={13} />
            Source Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
        {!project.demo && (
          <span className="text-xs text-slate-600 italic">No live demo available</span>
        )}
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
