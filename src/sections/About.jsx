// src/sections/About.jsx
import { motion } from "framer-motion";
import { MapPin, Globe, User, Sparkles } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const highlights = [
  { label: "Location", value: "Andhra Pradesh, India", icon: MapPin },
  { label: "Status", value: "Open to Opportunities", icon: Globe },
  { label: "Degree", value: "B.Tech CSE, 2024", icon: User },
  { label: "Focus", value: "React · Java · JavaScript", icon: Sparkles },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle bg orb */}
      <div className="orb orb-blue w-96 h-96 top-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Get to know me</span>
          <h2 className="section-heading mt-2">About <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                I am a{" "}
                <span className="text-white font-semibold">
                  Computer Science Engineering graduate
                </span>{" "}
                with a strong foundation in frontend development, Java programming, and building
                data-driven applications. I specialise in{" "}
                <span className="text-primary-light font-semibold">
                  React.js, JavaScript, and modern web technologies
                </span>{" "}
                that create seamless digital experiences.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My projects range from responsive business websites to
                machine learning-powered energy dashboards — I bring both technical precision and
                creative problem-solving to every build. I am seeking an entry-level software
                engineering role where I can contribute immediately, grow continuously, and help
                teams deliver products users love.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Currently based in <span className="text-white">Andhra Pradesh, India</span>.
                Open to remote and on-site opportunities.
              </p>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {highlights.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-primary/30 transition-colors"
                  >
                    <Icon size={16} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                      <p className="text-sm text-white font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Avatar side */}
          <AnimatedSection delay={0.25} direction="left">
            <div className="flex justify-center">
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-8px] sm:inset-[-12px] rounded-full border border-dashed border-primary/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-16px] sm:inset-[-24px] rounded-full border border-dashed border-accent/20"
                />

                {/* Avatar container */}
                <div className="avatar-border w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                    {/* Initials avatar */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col items-center justify-center">
                      <div className="text-7xl md:text-8xl font-black gradient-text select-none">
                        NK
                      </div>
                      <div className="text-slate-500 text-sm mt-2 font-mono">Naveen Kumar</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-slate-800 border border-primary/40 rounded-xl px-4 py-2 shadow-glow"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white text-xs font-semibold">Available for hire</span>
                  </div>
                </motion.div>

                {/* React badge */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-4 -left-4 bg-slate-800 border border-accent/40 rounded-xl px-3 py-2"
                >
                  <span className="text-white text-xs font-mono">⚛️ React Dev</span>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
