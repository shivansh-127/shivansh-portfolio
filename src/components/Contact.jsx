import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react'
import './Contact.css'

const contacts = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'shivanshsaxena127@gmail.com',
    href: 'mailto:shivanshsaxena127@gmail.com',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91-7599526792',
    href: 'tel:+917599526792',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/shivansh-127',
    href: 'https://github.com/shivansh-127',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'Shivansh Saxena',
    href: 'https://www.linkedin.com/in/shivansh-saxena-5286ab311/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-glow" />

          <div className="contact-content">
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's build something together</h2>
            <p className="section-desc" style={{ marginBottom: '40px' }}>
              I'm actively looking for SDE / Backend / Full Stack internship roles at
              product-based companies and engineering-driven startups.
              If you have something interesting, let's talk.
            </p>

            <div className="contact-links">
              {contacts.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-link"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="contact-link-icon">{c.icon}</div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">{c.label}</span>
                    <span className="contact-link-value">{c.value}</span>
                  </div>
                  <ArrowUpRight size={15} className="contact-link-arrow" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
