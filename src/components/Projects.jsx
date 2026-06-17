import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    name: 'ResumeForge Pro',
    tagline: 'ATS-Friendly Resume Builder',
    date: 'June 2026',
    stack: ['React.js', 'Vite', 'jsPDF', 'html2canvas', 'LocalStorage'],
    description: 'A modern ATS-friendly resume builder with live preview, customisable sections, and professional templates. Supports PDF export, dark mode, and real-time updates — built as a SaaS-style product.',
    bullets: [
      'PDF export via jsPDF + html2canvas — downloadable instantly',
      'Dynamic sections: education, skills, projects, experience, achievements',
      'Auto LocalStorage persistence across sessions',
      'Responsive dark-mode SaaS interface',
    ],
    github: 'https://github.com/shivansh-127/ResumeForge-Pro',
    live: 'https://resume-forge-pro-five.vercel.app/',
    flagship: true,
  },
  {
    name: 'WanderLust',
    tagline: 'Full-Stack Property Listing Platform',
    date: 'Jan 2026 – Apr 2026',
    stack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'EJS', 'Cloudinary', 'Leaflet.js', 'Render'],
    description: 'A production full-stack Airbnb-style app deployed on Render with modular MVC architecture, 15+ RESTful endpoints, and session-based auth.',
    bullets: [
      'Passport.js session auth — only owners can edit or delete listings',
      'Normalised MongoDB Atlas schema (users, listings, reviews) with cascading deletes',
      'Cloudinary media pipeline with dynamic image preview on edit',
      'Maps via open-source Leaflet.js + OpenStreetMap',
    ],
    github: 'https://github.com/shivansh-127/WanderLust',
    live: 'https://airbnb-clone-5xjt.onrender.com/listings',
  },
  {
    name: 'VERDIQUE',
    tagline: 'Smart Farming Intelligence Dashboard',
    date: 'Oct 2025 – Dec 2025',
    stack: ['Flask', 'Python', 'HTML', 'CSS', 'JavaScript', 'ML'],
    description: 'A full-stack ML-integrated agricultural dashboard — ranked Top 45 / 360+ teams at Smart India Hackathon 2025 (Internal Round).',
    bullets: [
      '4 ML models (soil, crop, pest, yield) served via Flask REST API',
      'Real-time data-driven UI consuming structured JSON responses',
      'Ranked Top 45 / 360+ teams at SIH 2025 Internal Round',
    ],
    github: null,
    live: null,
  },
  {
    name: 'InclusivePay',
    tagline: 'Accessible Payment Web App',
    date: 'Feb 2025',
    stack: ['JavaScript', 'Web Speech API', 'CSS', 'Accessibility Engineering'],
    description: 'An accessible fintech interface with Voice Pay, Haptic Feedback, and High-Contrast/Dark Mode — recognised at Hackground 2k25.',
    bullets: [
      'Voice Pay using browser-native Web Speech API',
      'Haptic feedback and high-contrast mode for accessibility',
      'Hackground 2k25 Finalist — accessibility engineering impact',
    ],
    github: null,
    live: null,
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-label">Featured Projects</p>
          <h2 className="section-title">Things I've shipped</h2>
          <p className="section-desc">
            Production-grade applications — not course projects.
            Each one is deployed, functional, and built with real architecture decisions.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              className={`project-card ${project.flagship ? 'flagship' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {project.flagship && (
                <div className="flagship-badge">
                  <Star size={11} fill="currentColor" />
                  Flagship Project
                </div>
              )}

              <div className="project-header">
                <div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>
                <span className="project-date">{project.date}</span>
              </div>

              <p className="project-desc">{project.description}</p>

              <ul className="project-bullets">
                {project.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>

              <div className="project-footer">
                <div className="project-stack">
                  {project.stack.map((tech, j) => (
                    <span key={j} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                      <Github size={15} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link proj-link-primary">
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
