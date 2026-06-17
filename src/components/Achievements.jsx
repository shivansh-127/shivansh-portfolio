import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Users, Code, Zap } from 'lucide-react'
import './Achievements.css'

const achievements = [
  {
    icon: <Users size={20} />,
    title: 'GSSoC 2026 Open-Source Contributor',
    org: 'GirlScript Summer of Code',
    desc: 'Selected as contributor for GirlScript Summer of Code 2026 — contributing to production-grade open-source repositories.',
    color: '#7c5cfc',
    year: '2026',
  },
  {
    icon: <Trophy size={20} />,
    title: 'Top 45 / 360+ Teams',
    org: 'Smart India Hackathon 2025',
    desc: 'Ranked Top 45 out of 360+ teams for VERDIQUE, an ML-integrated agricultural full-stack platform.',
    color: '#f59e0b',
    year: '2025',
  },
  {
    icon: <Zap size={20} />,
    title: 'Hackground 2k25 Finalist',
    org: 'Hackground',
    desc: 'InclusivePay, an accessible fintech web app, recognised for accessibility engineering impact.',
    color: '#06b6d4',
    year: '2025',
  },
  {
    icon: <Code size={20} />,
    title: '950+ DSA Problems Solved',
    org: 'LeetCode · CodeChef · Codeforces',
    desc: 'Strong algorithmic problem-solving foundation across competitive programming platforms.',
    color: '#10b981',
    year: 'Ongoing',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-label">Achievements</p>
          <h2 className="section-title">Recognition & milestones</h2>
          <p className="section-desc">
            Proof of work — from hackathon wins and top-ranked hackathon placements
            to open-source contributions and thousands of algorithmic problems.
          </p>
        </motion.div>

        <div className="achievements-timeline">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className="achievement-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="achievement-line">
                <div className="achievement-icon" style={{ color: item.color, background: `${item.color}18`, border: `1px solid ${item.color}40` }}>
                  {item.icon}
                </div>
                {i < achievements.length - 1 && <div className="timeline-connector" />}
              </div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <div>
                    <h3 className="achievement-title">{item.title}</h3>
                    <p className="achievement-org">{item.org}</p>
                  </div>
                  <span className="achievement-year">{item.year}</span>
                </div>
                <p className="achievement-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
