"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation - Fixed at top */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            SC
          </span>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-blue-400 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="md:hidden text-gray-400">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-blue-400 text-lg font-medium">👋 Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Susil Chand
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-300">
                Full Stack Developer
              </h2>
              <p className="text-gray-400 text-lg max-w-lg">
                Building modern, scalable web applications with a passion for clean code and great design.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-all transform hover:scale-105"
                >
                  Get in Touch
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-full transition-all"
                >
                  View Projects
                </button>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4 pt-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-7xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                With a strong foundation in both frontend and backend technologies, I create seamless digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity for how things work on the web. Today, 
                I'm dedicated to writing clean, efficient code and staying current with industry trends.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-400">2+</p>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-400">15+</p>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'Next.js', 'MongoDB', 'AWS'].map((skill) => (
                <div key={skill} className="bg-[#1a1a1a] p-4 rounded-lg text-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Tech <span className="text-blue-400">Stack</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Docker', icon: '🐳' },
            ].map((tech) => (
              <div key={tech.name} className="bg-[#1a1a1a] p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all hover:bg-blue-600 cursor-pointer">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <p className="font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'E-Commerce Platform',
                desc: 'Full-stack e-commerce with payment integration',
                tech: ['React', 'Node.js', 'MongoDB']
              },
              {
                title: 'Portfolio Website',
                desc: 'Modern portfolio with animations and dark mode',
                tech: ['Next.js', 'Tailwind', 'Framer Motion']
              },
              {
                title: 'Task Management App',
                desc: 'Collaborative task management with real-time updates',
                tech: ['React', 'Firebase', 'Material-UI']
              }
            ].map((project, index) => (
              <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all">
                <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center text-4xl">
                  📁
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-blue-400 hover:underline">Live Demo →</a>
                  <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Full Stack Developer',
                company: 'Tech Company Inc.',
                period: '2023 - Present',
                desc: 'Building scalable web applications with React and Node.js'
              },
              {
                title: 'Junior Developer',
                company: 'StartUp Studio',
                period: '2022 - 2023',
                desc: 'Developed responsive websites and learned modern frameworks'
              },
              {
                title: 'Freelance Developer',
                company: 'Self-Employed',
                period: '2021 - 2022',
                desc: 'Built custom websites for small businesses and clients'
              }
            ].map((exp, index) => (
              <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#222222] transition-colors border border-gray-800">
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-400 mt-3">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-[#1a1a1a] p-6 rounded-xl">
              <div className="text-3xl mb-2">📧</div>
              <p className="font-medium">Email</p>
              <p className="text-gray-400 text-sm">your.email@example.com</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl">
              <div className="text-3xl mb-2">📍</div>
              <p className="font-medium">Location</p>
              <p className="text-gray-400 text-sm">Your City, Country</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl">
              <div className="text-3xl mb-2">💼</div>
              <p className="font-medium">Freelance</p>
              <p className="text-gray-400 text-sm">Available for work</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-colors">
              Download Resume
            </a>
            <a href="#" className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-full transition-colors">
              Hire Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Susil Chand. Built with ❤️ using Next.js</p>
        </div>
      </footer>
    </div>
  );
}