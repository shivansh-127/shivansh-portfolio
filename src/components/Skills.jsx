import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    color: '#7c5cfc',
    skills: ['Java', 'JavaScript (ES6+)', 'SQL', 'Python'],
  },
  {
    category: 'Frontend',
    color: '#06b6d4',
    skills: ['React.js', 'HTML5', 'CSS3', 'EJS', 'Responsive UI Design'],
  },
  {
    category: 'Backend',
    color: '#3b82f6',
    skills: ['Node.js', 'Express.js', 'Flask', 'RESTful API Development', 'Server-Side Rendering'],
  },
  {
    category: 'Databases',
    color: '#8b5cf6',
    skills: ['MongoDB Atlas', 'Mongoose ODM', 'MySQL'],
  },
  {
    category: 'Deployment / Cloud',
    color: '#10b981',
    skills: ['Render', 'Vercel', 'Cloudinary', 'Git', 'GitHub'],
  },
  {
    category: 'Core Concepts',
    color: '#f59e0b',
    skills: ['MVC Architecture', 'CRUD Operations', 'Authentication & Authorization', 'Session Management', 'OOP', 'DSA', 'Database Design', 'API Integration'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">Everything I build with</h2>
          <p className="section-desc">
            A focused stack optimised for building fast, scalable full-stack applications
            — from database design to cloud deployment.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              className="skill-group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="skill-group-header">
                <span className="skill-category-dot" style={{ background: group.color }} />
                <span className="skill-category-name">{group.category}</span>
              </div>
              <div className="skill-pills">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    className="skill-pill"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 + j * 0.04 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
