import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import shivanshPhoto from '../assets/shivansh.jpeg'
import resumePDF from '../assets/Shivansh_Saxena_Resume.pdf'
import './Hero.css'

const stats = [
  { value: '950+', label: 'DSA Problems Solved' },
  { value: 'GSSoC', label: '2026 Contributor' },
  { value: 'Top 45', label: 'SIH 2025 Team' },
  { value: 'Finalist', label: 'Hackground 2k25' },
]

function AnimatedCounter({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const isNumeric = !isNaN(parseInt(target))
  const numericPart = parseInt(target)
  const suffix = isNumeric ? target.replace(numericPart.toString(), '') : ''

  useEffect(() => {
    if (!isNumeric) return
    let start = 0
    const step = Math.ceil(numericPart / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= numericPart) {
        setCount(numericPart)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [])

  return <>{isNumeric ? `${count}${suffix}` : target}</>
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-noise" />
      <div className="container">
        <motion.div
          className="hero-inner"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Left column */}
          <div className="hero-content">
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="badge-dot" />
              Available for internships · 2024–2028 BTech CSE
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-name">
              Shivansh<br />
              <span className="hero-name-accent">Saxena</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-role">
              SDE Intern · Backend Developer · Full Stack Developer
            </motion.p>

            <motion.p variants={itemVariants} className="hero-bio">
              2nd-year CSE student (CGPA 8.79) building production-grade full-stack systems.
              Specialising in Node.js, React, and MongoDB — with 950+ DSA problems solved and
              open-source contributions to GSSoC 2026.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <ArrowDown size={15} />
              </a>
              <a href={resumePDF} download="Shivansh_Saxena_Resume.pdf" className="btn btn-outline">
                Download Resume
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-socials">
              <a href="https://github.com/shivansh-127" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/shivansh-saxena-5286ab311/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={18} />
              </a>
              <a href="mailto:shivanshsaxena127@gmail.com" className="social-link">
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            className="hero-right"
            variants={itemVariants}
          >
            <div className="hero-photo-wrapper">
              <div className="hero-photo-glow" />
              <img src={shivanshPhoto} alt="Shivansh Saxena" className="hero-photo" />
            </div>

            <div className="hero-stats">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                >
                  <span className="stat-value">
                    <AnimatedCounter target={stat.value} />
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="scroll-hint"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={16} />
      </motion.div>
    </section>
  )
}
