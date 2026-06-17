import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Cpu, Globe } from 'lucide-react'
import './About.css'

const pillars = [
  { icon: <Code2 size={20} />, title: 'Backend Engineering', desc: 'RESTful APIs, MVC architecture, session-based auth with Passport.js and clean modular codebases.' },
  { icon: <Globe size={20} />, title: 'Full Stack Development', desc: 'End-to-end production apps with React on the frontend, Node.js on the backend, deployed to Render & Vercel.' },
  { icon: <Database size={20} />, title: 'Database Design', desc: 'Normalised MongoDB schemas with Mongoose ODM, cascading deletes and referential integrity.' },
  { icon: <Cpu size={20} />, title: 'Algorithms & Problem Solving', desc: '950+ DSA problems across LeetCode, CodeChef and Codeforces — strong algorithmic foundation.' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Building systems that<br />
            <span className="gradient-text">actually ship to production</span>
          </h2>
          <p className="section-desc" style={{ marginBottom: '56px' }}>
            I'm a 2nd-year CSE student at GL Bajaj Institute of Technology and Management,
            Greater Noida (CGPA 8.79). I build full-stack applications with real users,
            not just course projects — and I contribute to open-source repositories
            through GSSoC 2026.
          </p>
        </motion.div>

        <div className="about-grid">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              className="about-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="about-card-icon">{p.icon}</div>
              <h3 className="about-card-title">{p.title}</h3>
              <p className="about-card-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
