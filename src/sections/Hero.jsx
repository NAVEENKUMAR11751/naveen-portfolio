// src/sections/Hero.jsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowDown, Briefcase } from "lucide-react";
import { useEffect, useRef } from "react";

// Floating particles
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrameId;
    const particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? "37,99,235" : "124,58,237",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37,99,235,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden"
    >
      {/* Particles */}
      <Particles />

      {/* Background Orbs */}
      <div className="orb orb-blue w-[600px] h-[600px] -top-32 -left-40 opacity-40" />
      <div className="orb orb-violet w-[500px] h-[500px] -bottom-20 -right-20 opacity-30" />
      <div className="orb orb-blue w-[400px] h-[400px] top-1/2 right-1/4 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="max-w-4xl">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary-light font-mono text-sm sm:text-base tracking-wider">
              Hi, I'm Naveen 👋
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
          >
            Building Web Apps{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text-hero">That Perform,</span>
            <br />
            <span className="text-white">Scale, &amp; Impress</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-slate-500 text-base sm:text-lg">I'm a</span>
            <TypeAnimation
              sequence={[
                "React Developer",
                2200,
                "Java Engineer",
                2200,
                "Frontend Builder",
                2200,
                "Full-Stack Dev",
                2200,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-base sm:text-xl font-semibold text-primary-light font-mono"
            />
          </motion.div>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
          >
            React &amp; Java developer crafting responsive, user-focused interfaces — from
            smart ML-powered dashboards to full-stack web solutions. Based in Andhra Pradesh,
            India. Open to remote &amp; on-site opportunities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold text-base shadow-lg hover:bg-primary-dark hover:shadow-glow transition-all duration-300"
            >
              <Briefcase size={18} />
              View My Projects
            </motion.button>
            <motion.a
              href="/resume-naveen.pdf"
              download="Naveen-Kumar-Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 border border-primary text-primary-light rounded-xl font-semibold text-base hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6 mt-14 pt-8 border-t border-slate-800/60"
          >
            {[
              { value: "4+", label: "Projects Delivered" },
              { value: "87%", label: "ML Model Accuracy" },
              { value: "2+", label: "Real Client Sites" },
              { value: "2024", label: "B.Tech Graduate" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-black gradient-text">{stat.value}</span>
                <span className="text-slate-500 text-xs mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
