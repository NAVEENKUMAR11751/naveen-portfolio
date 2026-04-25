// src/sections/Contact.jsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    status: "idle", // idle, submitting, success, error
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });

    // Note: EmailJS requires Service ID, Template ID, and Public Key
    // Replace these with your actual EmailJS credentials
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    
    // Simulating API call for now since credentials aren't provided
    setTimeout(() => {
      setFormState({
        status: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      formRef.current?.reset();
      
      // Auto reset after 5 seconds
      setTimeout(() => {
        setFormState({ status: "idle", message: "" });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-slate-900/60">
      <div className="orb orb-blue w-[500px] h-[500px] bottom-0 right-0 opacity-20" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">What's next?</span>
          <h2 className="section-heading mt-2">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subheading mt-4">
            I'm open to internship opportunities, entry-level roles, and freelance React projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-8 bg-slate-800/40 border border-slate-700/50 rounded-3xl p-5 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl">
          
          {/* Contact Info */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Fill up the form and I will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:naveenkumar11751@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-400 group-hover:text-primary-light transition-colors">Email</p>
                    <p className="text-white break-all sm:break-normal">naveenkumar11751@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+918897135264" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-400 group-hover:text-accent-light transition-colors">Phone</p>
                    <p className="text-white">+(91) 88971 35264</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-400 group-hover:text-emerald-400 transition-colors">Location</p>
                    <p className="text-white break-words">Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Design Element */}
            <div className="hidden md:block mt-12">
              <div className="w-32 h-32 rounded-full border-4 border-slate-700/50 opacity-20 relative">
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary/40 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-slate-900/50 rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-700/50">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid xs:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="user_name" className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="user_email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Job Opportunity / Freelance Project"
                  className="form-input"
                />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Hello Naveen, I would like to discuss..."
                  className="form-input resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={formState.status === "submitting" || formState.status === "success"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300
                  ${formState.status === "success" 
                    ? "bg-emerald-500 text-white" 
                    : "bg-primary hover:bg-primary-dark text-white shadow-glow"}`
                }
              >
                {formState.status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : formState.status === "success" ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
              
              {formState.status === "error" && (
                <p className="text-red-400 text-sm text-center mt-2">
                  Failed to send message. Please try emailing me directly.
                </p>
              )}
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
