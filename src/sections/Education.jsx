// src/sections/Education.jsx
import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const certifications = [
  {
    title: "Web Development",
    issuer: "Exposys Data Labs",
    type: "Core Skill",
  },
  {
    title: "Ethical Hacking",
    issuer: "Internshala",
    type: "Security Awareness",
  },
  {
    title: "Cybersecurity",
    issuer: "Spypro Security Solutions",
    type: "Security Awareness",
  },
  {
    title: "Ethical Hacking Workshop",
    issuer: "Nikistian Media Pvt. Ltd.",
    type: "Industry Exposure",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <AnimatedSection className="mb-10 text-left">
              <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
                <GraduationCap className="text-primary" size={32} />
                Education
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700/60 rounded-2xl p-7 hover:border-blue-500/30 transition-all duration-300 card-glow h-full">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  B.Tech Degree
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-2">Computer Science Engineering</h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 text-slate-400 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> Bapatla Engineering College
                  </span>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span>Graduated: 2024</span>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-emerald-400 font-medium tracking-wide">CGPA: 6.7/10</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-900/50 border border-slate-700/50 rounded-xl">
                    <p className="text-sm font-semibold text-white mb-1">Final Year Project</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Energy Consumption Prediction Dashboard (ML + IoT)
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-white mb-3">Key Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures", "Algorithms", "DBMS", "Web Technologies", "Machine Learning"].map(course => (
                        <span key={course} className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-xs font-medium">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Certifications Column */}
          <div>
            <AnimatedSection className="mb-10 text-left">
               <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
                <Award className="text-accent" size={32} />
                Certifications
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                  <motion.div 
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="cert-badge rounded-2xl p-5 h-full relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                    
                    <span className="inline-block px-2.5 py-1 mb-3 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50">
                      {cert.type}
                    </span>
                    
                    <h4 className="text-white font-bold text-base mb-1">{cert.title}</h4>
                    <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    
                    <div className="mt-4 pt-4 border-t border-slate-700/30 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-primary-light font-medium">Verified</span>
                      <Award size={14} className="text-primary-light" />
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
