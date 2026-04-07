// src/sections/Skills.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "../components/AnimatedSection";
import { skillCategories } from "../data/skills";

function SkillBar({ name, level, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
}

function SkillCard({ category, index }) {
  const Icon = category.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="group relative bg-slate-800/50 backdrop-blur border border-slate-700/60 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 card-glow"
    >
      {/* Category header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg shrink-0`}>
            <Icon size={18} className="text-white" />
          </div>
          <h3 className="text-white font-bold text-base leading-tight pr-1">
            {category.title}
          </h3>
        </div>
        {category.badge && (
          <span className="px-2 py-1 text-[10px] font-bold tracking-wider rounded-md bg-violet-500/20 text-violet-300 border border-violet-500/40 uppercase whitespace-nowrap">
            {category.badge}
          </span>
        )}
      </div>

      {/* Skill bars */}
      <div className={category.gridCols === 2 ? "grid sm:grid-cols-2 sm:gap-x-8" : ""}>
        {category.skills.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
        ))}
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 30px ${category.glowColor}` }}
      />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="orb orb-violet w-96 h-96 bottom-0 left-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">What I work with</span>
          <h2 className="section-heading mt-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mt-4 mx-auto">
            A curated set of tools and technologies I use to build fast, scalable, and
            beautiful web experiences.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div key={cat.id} className={`w-full ${cat.gridCols === 2 ? 'lg:col-span-2' : ''}`}>
              <SkillCard category={cat} index={i} />
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <AnimatedSection delay={0.3} className="mt-14">
          <div className="text-center mb-6">
            <span className="text-slate-500 text-sm">Also familiar with</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React Hooks", "Context API", "Component Architecture", "OOP Concepts",
              "Linear Regression", "Decision Trees", "Responsive Design",
              "GitHub Actions", "DOM Manipulation", "REST APIs", "Data Structures", "Algorithms",
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-slate-800/70 border border-slate-700/50 text-slate-400 text-xs rounded-full font-mono hover:border-primary/40 hover:text-slate-200 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
