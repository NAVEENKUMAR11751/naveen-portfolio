// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    // Small delay lets menu close before scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 navbar-blur"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-2 group shrink-0"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-white/5 ring-1 ring-primary/30 flex items-center justify-center shadow-glow shrink-0">
                <img
                  src="/logo.png"
                  alt="NK Logo"
                  className="w-full h-full object-contain scale-[1.15]"
                />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                NK<span className="text-primary">.</span>
              </span>
            </motion.a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {activeSection === link.href.replace("#", "") && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/20 rounded-lg border border-primary/30"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="/resume-naveen.pdf"
                download="Naveen-Kumar-Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2 border border-primary text-primary-light rounded-lg text-sm font-semibold hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
              >
                <Download size={15} />
                Resume
              </motion.a>
            </div>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[60] p-2 -mr-1 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay — full screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: "rgba(10, 16, 31, 0.98)", backdropFilter: "blur(24px)" }}
          >
            {/* Spacer for navbar height */}
            <div className="h-16 shrink-0" />

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-primary/20 text-white border border-primary/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {activeSection === link.href.replace("#", "") && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  )}
                  {link.label}
                </motion.a>
              ))}

              {/* Resume download */}
              <motion.a
                href="/resume-naveen.pdf"
                download="Naveen-Kumar-Resume.pdf"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                className="flex items-center justify-center gap-2 mt-4 px-5 py-4 bg-primary text-white rounded-2xl text-base font-bold hover:bg-primary-dark transition-all duration-200 shadow-glow"
                onClick={() => setIsOpen(false)}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </nav>

            {/* Footer socials inside mobile menu */}
            <div className="pb-8 px-6 text-center">
              <p className="text-slate-600 text-xs">Naveen Kumar Reddy · React & Java Developer</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
