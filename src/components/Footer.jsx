import { Heart, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-navy border-t border-slate-800/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-xl mb-1">
              NK<span className="text-primary">.</span>
            </span>
            <p className="text-slate-500 text-sm">
              Frontend & Full-Stack Developer
            </p>
          </div>

          {/* Center text */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5 flex-wrap justify-center">
            © 2024 Naveen Kumar Reddy · Built with React &{" "}
            <Heart size={13} className="text-red-400 fill-red-400 inline" />
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/NAVEENKUMAR11751"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-9 h-9 bg-slate-800 border border-slate-700 hover:border-primary/40 hover:bg-primary/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
            >
              <FiGithub size={17} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/naveen-kumar-reddy-papadesu-81591b206/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-9 h-9 bg-slate-800 border border-slate-700 hover:border-blue-400/40 hover:bg-blue-500/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-200"
            >
              <FiLinkedin size={17} />
            </motion.a>
            <motion.a
              href="mailto:naveenkumar11751@gmail.com"
              aria-label="Email"
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-9 h-9 bg-slate-800 border border-slate-700 hover:border-emerald-400/40 hover:bg-emerald-500/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all duration-200"
            >
              <Mail size={17} />
            </motion.a>
          </div>
        </div>

        {/* Divider glow line */}
        <div className="section-divider mt-8" />
        <p className="text-center text-slate-700 text-xs mt-4">
          Made with passion in Andhra Pradesh, India 🇮🇳
        </p>
      </div>
    </footer>
  );
}
