import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">
            <span className="logo-bracket">&lt;</span>SS<span className="logo-bracket">/&gt;</span>
          </span>
          <p className="footer-copy">
            © {new Date().getFullYear()} Shivansh Saxena · Built with React + Vite
          </p>
          <div className="footer-links">
            <a href="https://github.com/shivansh-127" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/shivansh-saxena-5286ab311/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:shivanshsaxena127@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
