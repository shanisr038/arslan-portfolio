import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as Lucide from 'lucide-react' // Use Lucide icons for the arrows

function App() {
  const scrollRef = useRef(null);

  // Function to handle the manual scroll
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: "01",
      title: "AI-Based Smart Clinic",
      category: "Full Stack (Laravel & React)",
      description: "A comprehensive healthcare management system featuring AI-driven diagnostics and patient scheduling.",
      tech: ["React", "Laravel", "Tailwind", "MySQL"],
      github: "https://github.com/shanisr038/Ai-Based-Smart-Clinic",
      image: "/project1.jpg"
    },
    {
      id: "02",
      title: "E-Commerce Ecosystem",
      category: "Frontend Development",
      description: "Real-time sales tracking dashboard with interactive charts and inventory management.",
      tech: ["Laravel", "React", "Chart.js", "Firebase"],
      github: "https://github.com/shanisr038",
      image: "/project2.jpg"
    },
    {
      id: "03",
      title: "Smart Car Parking System",
      category: "Full Stack (Laravel & React)",
      description: "A modern web-based Car Parking Management System.",
      tech: ["Laravel","React", "Tailwind"],
      github: "https://github.com/shanisr038/Car-Parking-System",
      image: "/project3.jpg"
    },
    {
      id: "04",
      title: "Portfolio Engine",
      category: "UI/UX Design",
      description: "A high-performance portfolio template built for developers using Framer Motion.",
      tech: ["Laravel","React", "Tailwind"],
      github: "https://github.com/shanisr038/My-Portfolio",
      image: "/project4.jpg"
    },
     {
      id: "05",
      title: "Food Delivery System",
      category: "laravel & Vue.js",
      description: "A full-featured food ordering platform built with Laravel 11",
      tech: ["Laravel","Vue.js", "Tailwind"],
      github: "https://github.com/shanisr038/food-delivery-system",
      image: "/project5.jpg"
    }
  ];

  const skills = ["React.js", "Laravel", "Tailwind CSS", "Vite", "JavaScript", "GitHub", "UI/UX Design", "REST APIs", "MySQL", "PHP"];

  return (
    <div className="min-h-screen bg-[#020203] text-slate-300 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-900/10 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[140px] rounded-full animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020203]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
          <div className="text-2xl font-black tracking-tighter text-white">
            ARSLAN<span className="text-cyan-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-black text-slate-500">
            <a href="#projects" className="hover:text-cyan-400 transition">Works</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          <a href="/resume.pdf" download className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors">
            Resume
          </a>
        </div>
      </nav>

      {/* Professional Hero Section */}
      <section className="relative pt-48 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
              <span className="text-cyan-500 text-[9px] font-black uppercase tracking-widest">Open for new opportunities</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.85]">
              Full Stack <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Developer.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
              Hi, I'm <span className="text-white">Arslan Asghar</span>. I specialize in building high-performance backends with <span className="text-cyan-400">Laravel</span> and immersive frontends with <span className="text-cyan-400">React.js</span>. 
            </motion.p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="bg-cyan-500 text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-cyan-500/20">Explore Work</a>
              <a href="https://github.com/shanisr038" target="_blank" className="border border-white/10 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition">GitHub</a>
            </div>
          </div>

          {/* Profile Card */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-72 h-96 md:w-80 md:h-[480px] bg-[#0a0a0b] border border-white/10 rounded-[2.5rem] overflow-hidden p-3 shadow-2xl">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black">
                <img src="/profile.jpg" alt="Arslan" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x600?text=ARSLAN' }} />
              </div>
              <div className="absolute bottom-10 left-8 right-8 p-4 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10">
                 <p className="text-white font-black text-xs text-center tracking-widest uppercase">Arslan Asghar</p>
                 <p className="text-slate-500 text-[8px] uppercase font-bold text-center mt-1">Full Stack Developer / Pakistan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     {/* Moving Skills Strip */}
<div className="group py-12 bg-white/[0.01] border-y border-white/5 flex overflow-hidden whitespace-nowrap cursor-default">
  <motion.div 
    animate={{ x: [0, -1200] }} 
    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
    className="flex gap-24 items-center"
  >
    {([...skills, ...skills]).map((skill, i) => (
      <span 
        key={i} 
        className="text-5xl md:text-7xl font-black text-white/5 uppercase italic tracking-tighter transition-colors duration-500 group-hover:text-cyan-400/40"
      >
        {skill}
      </span>
    ))}
  </motion.div>
</div>

      {/* Horizontal Scrolling Projects Section */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
           <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter italic uppercase underline decoration-cyan-500 decoration-8 underline-offset-[12px]">Featured Repos</h2>
           
           {/* Navigation Arrows */}
           <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500 hover:text-black transition-all"
              >
                <Lucide.ArrowLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500 hover:text-black transition-all"
              >
                <Lucide.ArrowRight size={24} />
              </button>
           </div>
        </div>
        
        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 px-6 md:px-[10%] pb-12 no-scrollbar snap-x scroll-smooth"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="min-w-[300px] md:min-w-[450px] snap-center bg-[#0a0a0b] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl hover:border-cyan-500/30 transition-all group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-70"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=GitHub+Project' }} />
                <div className="absolute top-6 right-6 text-white/20 font-black text-6xl italic leading-none">{project.id}</div>
              </div>
              <div className="p-8">
                <p className="text-cyan-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3">{project.category}</p>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase leading-tight">{project.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-8 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                   {project.tech.map(t => (
                     <span key={t} className="px-3 py-1 bg-white/5 text-slate-500 text-[8px] font-bold uppercase rounded-md border border-white/5">{t}</span>
                   ))}
                </div>

                <a href={project.github} target="_blank" className="block w-full bg-white/5 hover:bg-white text-slate-400 hover:text-black text-center py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                  View Source on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-32 border-t border-white/5 text-center px-6">
        <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.4em] mb-6 italic">Ready to collaborate?</p>
        <a href="mailto:shanisr038@gmail.com" className="text-3xl md:text-7xl font-black text-white hover:text-cyan-400 transition-all tracking-tighter leading-none block break-words">
          shanisr038<span className="text-cyan-500">@</span>gmail.com
        </a>
        
        <div className="mt-20 flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <a href="https://github.com/shanisr038" target="_blank" className="hover:text-white transition">GitHub</a>
          <a href="#" target="_blank" className="hover:text-white transition">LinkedIn</a>
          <span className="text-slate-800">|</span>
          <div className="hover:text-white transition">+92 309 5724877</div>
        </div>
      </footer>

      {/* Floating Hire Button */}
      <a href="https://wa.me/03095724877" target="_blank" className="fixed bottom-10 right-10 z-50 group">
         <div className="absolute -inset-2 bg-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
         <div className="relative bg-cyan-500 text-black px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl">
            Hire Arslan
         </div>
      </a>
    </div>
  )
}

export default App