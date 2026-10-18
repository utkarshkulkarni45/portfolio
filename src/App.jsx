import React, { useState } from 'react';
import {
  Terminal,
  Server,
  Database,
  Code2,
  ExternalLink,
  Mail,
  Copy,
  Check,
  ChevronRight,
  Shield,
  Layers,
  Cpu,
  Sparkles,
  Bot,
  Activity,
  Workflow,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

const Github = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Chrome = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" x2="12" y1="8" y2="8" />
    <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
    <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
  </svg>
);

const Instagram = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Phone = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('utkarshkulkarni101@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919545091371');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const projects = [
    {
      id: 'gmail-genie',
      title: 'GmailGenie AI',
      category: 'ai-fullstack',
      badge: 'Flagship System',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      tagline: 'Context-Aware AI Email Response Engine & Native Chrome Extension',
      summary:
        'A production-grade, distributed AI email assistant powered by Google Gemini, Spring Boot, and React 19. Designed with a dual-interface architecture and intelligent backend failover.',
      highlights: [
        'Dual-Interface Architecture: Direct Chrome Extension embedded seamlessly into Gmail compose/reply alongside a standalone Web Dashboard for tone customization.',
        'High-Availability Failover: Automated multi-model fallback pipeline ensuring zero-downtime during Google Cloud API rate limits and demand spikes.',
        'Enterprise Security: Secure token handling and strict CORS policies between the extension client and Spring Boot backend.',
      ],
      tech: ['Java 21', 'Spring Boot', 'React 19', 'Vite', 'Docker', 'Google Gemini API', 'Chrome Extension API', 'Render'],
      github: 'https://github.com/utkarshkulkarni45',
      demo: 'https://github.com/utkarshkulkarni45',
      icon: Bot,
      stats: 'Instant AI Drafting (<500ms)'
    },
    {
      id: 'taskflow',
      title: 'Taskflow REST API & Dashboard',
      category: 'backend',
      badge: 'Enterprise Architecture',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      tagline: 'Full-Stack Task & Project Management System with Layered Architecture',
      summary:
        'A resilient task management application engineered with Spring Boot, relational MySQL persistence, and a reactive Tailwind CSS frontend dashboard.',
      highlights: [
        'Strict Layered Architecture: Clean separation of concerns following Controller -> Service -> Repository -> DTO -> Mapper patterns.',
        'Relational Data Modeling: Bidirectional One-to-Many mappings (Projects ↔ Tasks) managed via Spring Data JPA and Hibernate with HikariCP connection pooling.',
        'Zero-Leakage DTO Pattern: Decoupled database entities from API response contracts to eliminate circular JSON recursion.',
        'Input Validation: Jakarta Bean Validation (@Valid, @NotBlank, @NotNull) enforcing data integrity before persisting to MySQL.',
      ],
      tech: ['Java 25', 'Spring Boot 4', 'Spring Data JPA', 'Spring Security', 'MySQL 8.0', 'HikariCP', 'Tailwind CSS', 'Maven'],
      github: 'https://github.com/utkarshkulkarni45',
      demo: 'https://github.com/utkarshkulkarni45',
      icon: Workflow,
      stats: 'Layered REST Architecture'
    },
    {
      id: 'leetcode',
      title: 'LeetCode Algorithm Vault',
      category: 'dsa',
      badge: 'DSA & Optimization',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      tagline: 'High-Performance Algorithmic Problem Solving & Data Structures',
      summary:
        'A comprehensive collection of optimized solutions for core Data Structures & Algorithms, focusing on time & space complexity analysis and system design fundamentals.',
      highlights: [
        'Core Topics: Advanced Graph Traversals (BFS/DFS, Dijkstra), Dynamic Programming, Tree Manipulations, and Sliding Window techniques.',
        'Clean Java Idioms: Idiomatic Java implementations emphasizing cache locality, custom comparators, and clean Big-O complexity.',
        'Interview Ready: Continually updated with top tech interview patterns and edge-case handling.',
      ],
      tech: ['Java', 'Algorithms', 'Data Structures', 'Big-O Optimization', 'Dynamic Programming', 'Graph Theory'],
      github: 'https://github.com/utkarshkulkarni45',
      demo: 'https://leetcode.com/u/utkarshkulkarni101/',
      icon: Code2,
      stats: 'Optimized Time/Space'
    }
  ];

  const skillCategories = [
    {
      title: 'Backend & Core',
      icon: Server,
      skills: ['Java 21 / 25', 'Spring Boot 4', 'Spring Data JPA', 'Spring Security', 'RESTful APIs', 'Microservices Architecture', 'Hibernate ORM', 'Maven / Gradle']
    },
    {
      title: 'Databases & Persistence',
      icon: Database,
      skills: ['MySQL 8.0', 'HikariCP Connection Pool', 'Relational Schema Design', 'Entity Mapping (JPA)', 'Transaction Management', 'Query Optimization']
    },
    {
      title: 'Frontend & Extensions',
      icon: Chrome,
      skills: ['React 19', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'Chrome Extension APIs', 'Responsive UI / UX', 'HTML5 / CSS3']
    },
    {
      title: 'DevOps, Cloud & AI',
      icon: Cpu,
      skills: ['Docker Containerization', 'Google Gemini API', 'Render Cloud Deployment', 'Git & GitHub', 'Postman API Testing', 'Linux / Bash']
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
              <div className="w-full h-full bg-[#0d121f] rounded-[7px] flex items-center justify-center font-mono font-bold text-emerald-400 text-sm">
                UK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-emerald-400 transition-colors">
                Utkarsh Kulkarni
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                java.engineer()
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-emerald-400 transition-colors">Architecture</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">Open to Roles</span>
              <span className="sm:hidden">Available</span>
            </a>

            <a
              href="https://github.com/utkarshkulkarni45"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24 space-y-32">
        {/* Hero Section */}
        <section id="about" className="relative pt-6 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Backend Specialist • Full-Stack Engineer</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Architecting <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Robust APIs</span> & Full-Stack Systems.
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Hi, I'm <strong className="text-white font-semibold">Utkarsh Kulkarni</strong>. I specialize in building scalable Spring Boot microservices, high-throughput REST APIs, and production-grade full-stack systems with Java 21, Docker, and modern frontends.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/35"
                >
                  <span>Explore Featured Work</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-sm transition-all"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href="https://www.linkedin.com/in/utkarshkulkarni101/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-cyan-400 text-sm transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/u/utkarshkulkarni101/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-amber-400 text-sm transition-all"
                >
                  <Code2 className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>

                <a
                  href="https://www.instagram.com/a_simple_persona_/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-pink-400 text-sm transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>

              {/* Quick Status Bar */}
              <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Active on Java 21 / 25</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Spring Boot 4 Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>DSA & Algorithmic Problem Solver</span>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Window */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-slate-800 bg-[#0d121f]/90 backdrop-blur shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>utkarsh@spring-service: ~</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">v21.0.2</div>
                </div>

                {/* Terminal Content */}
                <div className="p-5 font-mono text-xs leading-relaxed space-y-3">
                  <div className="text-slate-400">
                    <span className="text-emerald-400">➜</span> <span className="text-cyan-300">curl</span> -X GET https://api.utkarsh.dev/v1/profile
                  </div>

                  <div className="p-3 rounded-lg bg-black/40 border border-slate-800/80 text-slate-300 space-y-1">
                    <p><span className="text-purple-400">"candidate"</span>: <span className="text-emerald-300">"Utkarsh Kulkarni"</span>,</p>
                    <p><span className="text-purple-400">"primaryRole"</span>: <span className="text-emerald-300">"Java Backend Engineer"</span>,</p>
                    <p><span className="text-purple-400">"coreExpertise"</span>: [</p>
                    <p className="pl-4 text-cyan-300">"Spring Boot Microservices",</p>
                    <p className="pl-4 text-cyan-300">"Relational DB Design (MySQL)",</p>
                    <p className="pl-4 text-cyan-300">"Distributed AI Pipelines (Gemini)",</p>
                    <p className="pl-4 text-cyan-300">"REST API Security & DTO Mapping"</p>
                    <p>],</p>
                    <p><span className="text-purple-400">"phone"</span>: <span className="text-cyan-300">"+91 95450 91371"</span>,</p>
                    <p><span className="text-purple-400">"email"</span>: <span className="text-emerald-300">"utkarshkulkarni101@gmail.com"</span>,</p>
                    <p><span className="text-purple-400">"status"</span>: <span className="text-amber-300">"Ready for Intern / SDE-1 Roles"</span></p>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 pt-1">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-slate-500">System health: OK (latency: 12ms)</span>
                    <span className="w-2 h-4 bg-emerald-400 animate-pulse ml-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>PRODUCTION-READY SYSTEMS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Featured Engineering Projects
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'all'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('ai-fullstack')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'ai-fullstack'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                AI & Full-Stack
              </button>
              <button
                onClick={() => setActiveTab('backend')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'backend'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Backend REST
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="rounded-2xl border border-slate-800 bg-[#0d121f]/70 backdrop-blur-sm p-6 sm:p-8 hover:border-slate-700 transition-all group hover:shadow-xl hover:shadow-emerald-500/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-emerald-400">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                              {project.title}
                            </h3>
                            <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
                              {project.badge}
                            </span>
                          </div>
                          <p className="text-xs font-mono text-slate-400 pt-0.5">{project.tagline}</p>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {project.summary}
                      </p>

                      <div className="space-y-2.5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-emerald-400" />
                          Key Architectural Highlights
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right column: Action buttons & Quick specs */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-slate-800 lg:pl-8">
                      <div className="p-4 rounded-xl bg-black/40 border border-slate-800/80 space-y-3">
                        <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                          <span>SYSTEM PERFORMANCE</span>
                          <Activity className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <div className="text-sm font-semibold text-emerald-300">
                          {project.stats}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Engineered for decoupled scaling, data integrity, and low-latency client communication.
                        </div>
                      </div>

                      <div className="space-y-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs font-mono border border-slate-700 transition-all hover:text-white"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Source on GitHub</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400" />
                        </a>

                        {project.id === 'leetcode' ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-medium text-xs font-mono border border-amber-500/30 transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>LeetCode Profile</span>
                            <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-amber-400" />
                          </a>
                        ) : (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-medium text-xs font-mono border border-emerald-500/30 transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Repository & Documentation</span>
                            <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-emerald-400" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Architecture & Engineering Standards Section */}
        <section id="architecture" className="space-y-8">
          <div className="border-b border-slate-800 pb-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>HOW I BUILD SOFTWARE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Engineering Principles & Architecture
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Industry standards applied across all backend microservices, database schemas, and API contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-800 bg-[#0d121f]/60 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-semibold text-white">DTO & Entity Isolation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Database models remain fully separated from API representations using explicit record DTOs and mappers, preventing infinite serialization loops and data leaks.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-[#0d121f]/60 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-semibold text-white">Zero-Trust Input Validation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Jakarta Bean Validation guards the perimeter (`@Valid`, `@NotBlank`, `@Size`), ensuring corrupted or malicious payloads never reach service business logic.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-[#0d121f]/60 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-semibold text-white">Resilient Failover Pipelines</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                External dependencies (such as AI LLMs and third-party APIs) are backed with automatic fallback cascades and graceful error handling for high uptime.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-[#0d121f]/60 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-mono font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-semibold text-white">Connection Pooling & ORM</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered with HikariCP connection pooling, optimal JPA relationship loading strategies, and indexed foreign keys to minimize database contention.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills Matrix */}
        <section id="skills" className="space-y-8">
          <div className="border-b border-slate-800 pb-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>TECHNICAL STACK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-slate-800 bg-[#0d121f]/60 space-y-4 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-emerald-400 border border-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white text-base">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* LeetCode & Problem Solving Callout */}
        <section className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-[#0d121f] to-slate-900/80 p-8 sm:p-10 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>Algorithmic Rigor</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Strong Foundation in Data Structures & Problem Solving
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Consistently sharpening core computer science foundations. Experienced in solving complex problems on LeetCode covering dynamic programming, graphs, trees, and system-level performance optimizations.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://leetcode.com/u/utkarshkulkarni101/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs font-mono transition-all"
              >
                <span>View LeetCode Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs font-mono text-slate-400">
                Handle: <code className="text-amber-300">utkarshkulkarni101</code>
              </span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <div className="border-b border-slate-800 pb-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Let's Build Something Exceptional
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              I am actively interviewing for Java Backend Engineer, Full-Stack Developer, and Software Engineer Intern / Graduate roles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-xl border border-slate-800 bg-[#0d121f]/60 space-y-4">
                <h3 className="font-semibold text-white text-base">Direct Contact Details</h3>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Mail className="w-4 h-4 text-emerald-400" />
                      <span>utkarshkulkarni101@gmail.com</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <a href="tel:+919545091371" className="hover:text-emerald-400 transition-colors">
                        +91 95450 91371
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href="https://wa.me/919545091371"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[11px] transition-colors"
                      >
                        WhatsApp
                      </a>
                      <button
                        onClick={handleCopyPhone}
                        className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                        title="Copy phone number"
                      >
                        {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Github className="w-4 h-4 text-emerald-400" />
                      <span>github.com/utkarshkulkarni45</span>
                    </div>
                    <a
                      href="https://github.com/utkarshkulkarni45"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Linkedin className="w-4 h-4 text-emerald-400" />
                      <span>linkedin.com/in/utkarshkulkarni101</span>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/utkarshkulkarni101/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <span>@a_simple_persona_</span>
                    </div>
                    <a
                      href="https://www.instagram.com/a_simple_persona_/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.target;
                  const subject = encodeURIComponent(target.subject.value);
                  const body = encodeURIComponent(`From: ${target.name.value} (${target.email.value})\n\n${target.message.value}`);
                  window.location.href = `mailto:utkarshkulkarni101@gmail.com?subject=${subject}&body=${body}`;
                }}
                className="p-6 rounded-xl border border-slate-800 bg-[#0d121f]/60 space-y-4"
              >
                <h3 className="font-semibold text-white text-base">Send a Direct Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    defaultValue="Opportunity Discussion: Java / Full-Stack Engineer"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Hi Utkarsh, we'd love to chat about a software engineering role on our team..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#060911] py-8 text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Utkarsh Kulkarni.</span>
            <span>•</span>
            <span className="text-slate-400">Designed for Scalable Engineering.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com/utkarshkulkarni45" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/utkarshkulkarni101/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/utkarshkulkarni101/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              LeetCode
            </a>
            <a href="https://www.instagram.com/a_simple_persona_/?hl=en" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">
              Instagram
            </a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
