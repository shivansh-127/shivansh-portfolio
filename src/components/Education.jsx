import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic background</h2>
        </motion.div>

        <motion.div
          className="edu-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -4 }}
        >
          <div className="edu-icon">
            <GraduationCap size={22} />
          </div>
          <div className="edu-body">
            <div className="edu-header">
              <div>
                <h3 className="edu-degree">B.Tech — Computer Science & Engineering</h3>
                <p className="edu-institution">GL Bajaj Institute of Technology and Management, Greater Noida</p>
              </div>
              <div className="edu-meta">
                <span className="edu-cgpa">8.79 / 10</span>
                <span className="edu-year">2024 – 2028</span>
              </div>
            </div>
            <div className="edu-tags">
              <span className="edu-tag">Data Structures & Algorithms</span>
              <span className="edu-tag">Object Oriented Programming</span>
              <span className="edu-tag">Database Management</span>
              <span className="edu-tag">Operating Systems</span>
              <span className="edu-tag">Computer Networks</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
