import { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  details?: {
    role?: string;
    duration?: string;
    highlights?: string[];
    challenge?: string;
  };
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      // Animate in
      requestAnimationFrame(() => {
        overlayRef.current?.classList.add('modal-visible');
      });
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleClose = () => {
    overlayRef.current?.classList.remove('modal-visible');
    setTimeout(onClose, 350);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  };

  if (!project) return null;

  const ExternalIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const GithubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2773 21.0497 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
    </svg>
  );

  const CloseIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="modal-container">
        {/* Header image */}
        <div className="modal-image-wrap">
          <img src={project.image} alt={project.title} className="modal-image" />
          <div className="modal-image-gradient" />
          <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
            <CloseIcon />
          </button>
          <div className="modal-image-title">
            <h2 className="modal-project-title">{project.title}</h2>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Meta row */}
          {project.details && (
            <div className="modal-meta-row">
              {project.details.role && (
                <div className="modal-meta-item">
                  <span className="modal-meta-label">Role</span>
                  <span className="modal-meta-value">{project.details.role}</span>
                </div>
              )}
              {project.details.duration && (
                <div className="modal-meta-item">
                  <span className="modal-meta-label">Duration</span>
                  <span className="modal-meta-value">{project.details.duration}</span>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="modal-section">
            <h3 className="modal-section-title">Overview</h3>
            <p className="modal-description">{project.description}</p>
          </div>

          {/* Challenge */}
          {project.details?.challenge && (
            <div className="modal-section">
              <h3 className="modal-section-title">Key Challenge</h3>
              <p className="modal-description">{project.details.challenge}</p>
            </div>
          )}

          {/* Highlights */}
          {project.details?.highlights && project.details.highlights.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">Key Features</h3>
              <ul className="modal-highlights">
                {project.details.highlights.map((h, i) => (
                  <li key={i} className="modal-highlight-item">
                    <span className="modal-highlight-icon"><CheckIcon /></span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div className="modal-section">
            <h3 className="modal-section-title">Tech Stack</h3>
            <div className="modal-tech-grid">
              {project.tech.map((t, i) => (
                <span className="modal-tech-badge" key={i}>{t}</span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="modal-cta-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-cta-btn modal-cta-primary"
            >
              <ExternalIcon />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-cta-btn modal-cta-secondary"
            >
              <GithubIcon />
              View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
