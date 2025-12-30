import React, { useState } from 'react'
import './styles/Portfolio.css'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  // Portfolio project
  const projects = [
    {
      id: 1,
      title: 'Brainrot Survivor',
      description: 'A 2D top-down survivor game featuring Italian Brainrot Animals as characters. Survive the chaos, embrace the brainrot.',
      image: '/images/brainrot survivor.png',
      tags: ['Rogue-lite', '2D', 'action', 'survivor'],
    },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Games</h2>
          <p className="section-subtitle">
            The chaos we created. The bugs we shipped. The fun we made.
          </p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card glass-effect glow-on-hover"
              onClick={() => openModal(project)}
            >
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />
                <div className="card-overlay">
                  <span className="overlay-text">View Details</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-effect" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              ×
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <div className="modal-body">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-tags">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio

