// src/sections/Experience.jsx
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Calendar } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const experiences = [
  {
    role: "Freelance React Developer",
    period: "2023 – Present",
    location: "Remote",
    type: "Freelance",
    color: "from-primary to-primary-dark",
    borderColor: "border-primary/30",
    dotColor: "bg-primary",
    achievements: [
      "Built and deployed two complete company websites (BL Engineering Works & Vishwa Software Solutions) using React.js, Bootstrap, and GitHub Pages.",
      "Implemented modular, reusable component architecture and managed state using Context API and React Hooks.",
      "Delivered mobile-responsive, production-ready websites for real clients with no paid hosting costs.",
      "Achieved 100% mobile responsiveness across all devices and screen sizes.",
    ],
    tech: ["React.js", "Bootstrap", "Context API", "React Hooks", "GitHub Pages", "CSS3"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="orb orb-violet w-80 h-80 bottom-10 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">My journey</span>
          <h2 className="section-heading mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <AnimatedSection key={idx} delay={0.1}>
              <div className="relative flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className={`w-4 h-4 rounded-full ${exp.dotColor} ring-4 ring-primary/20 shrink-0 mt-1.5`}
                  />
                  <div className="timeline-line flex-1 mt-2 w-0.5" />
                </div>

                {/* Card */}
                <div className={`flex-1 mb-8 bg-slate-800/50 backdrop-blur border ${exp.borderColor} rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 card-glow`}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 text-sm">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="text-slate-500 text-sm">📍 {exp.location}</span>
                      </div>
                    </div>
                    <Briefcase size={28} className="text-primary/40 shrink-0" />
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-5">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* End of timeline — education start */}
          <AnimatedSection delay={0.3}>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20 shrink-0" />
              </div>
              <div className="pb-4 -mt-0.5">
                <span className="text-slate-600 text-sm italic">Career beginning — B.Tech 2020</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
