import { useEffect, useRef, useState } from 'react';
import AmargiImage from '../assets/AmargiCreative.png';
import ClinicMsImage from '../assets/ClinicMS_Image_2.jpg';
import EcommercePlatformImage from '../assets/EcommercePlatform.png';
import VesselOpsImage from '../assets/VesselOps.png';
import WaterfrontImage from '../assets/Waterfront.png';
import VoxReportAIImage from '../assets/VoxReport_AI.png';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const projects = [
    {
      title: 'VoxReport AI',
      description:
        'AI Audio Report Generator is a full-stack web application built with Laravel and Vue.js that transforms uploaded audio recordings into structured, AI-generated reports. Users can upload audio files, which are automatically transcribed using speech-to-text technology. The transcribed content is then processed by an AI model to generate well-formatted documents.',
      image: VoxReportAIImage,
      tech: ['Laravel', 'Vue JS', 'Inertia JS', 'PrimeVue', 'Tailwind CSS'],
      liveUrl: 'https://msc.waterfrontapp.com/login',
      githubUrl: 'https://github.com/MohammadMashaikh/VoxReport_AI',
      details: {
        role: 'Full-Stack Developer',
        duration: '3 months',
        highlights: [
          'Automated audio-to-report pipeline using AI transcription',
          'Real-time progress tracking during audio processing',
          'Structured report generation with custom AI prompts',
          'Secure file upload with format validation',
          'Exportable reports in multiple formats (PDF, DOCX)',
          'Role-based dashboard for managing reports',
        ],
        challenge:
          'Coordinating asynchronous AI processing with live UI feedback — solved using server-sent events and Laravel queues to stream progress updates without blocking the main thread.',
      },
    },
    {
      title: 'VesselOps',
      description:
        'Comprehensive vessel operations management system developed using Laravel and MySQL to streamline maritime operations for clients. The platform enables organizations to manage vessels, trips, crew members, equipment, consumables, catches, tasks, and inspection forms through a centralized web application.',
      image: VesselOpsImage,
      tech: ['Laravel', 'MySQL', 'Javascript', 'Cloud Firestore', 'WebSockets', 'Redis', 'Restfull API'],
      liveUrl: 'https://test.vessel-ops.com',
      githubUrl: 'https://github.com/MohammadMashaikh/FleetAxis',
      details: {
        role: 'Backend Lead Developer',
        duration: '11 months',
        highlights: [
          'Real-time vessel tracking via WebSockets and Cloud Firestore',
          'Complete trip lifecycle management with crew assignment',
          'Equipment & consumables inventory with threshold alerts',
          'Digital inspection forms with photo attachments',
          'Redis-powered caching for high-performance dashboards',
          'RESTful API consumed by mobile and web clients',
        ],
        challenge:
          'Syncing real-time vessel GPS data across thousands of concurrent connections — solved with a dedicated WebSocket microservice backed by Redis pub/sub and Firestore for persistence.',
      },
    },
    {
      title: 'Waterfront',
      description:
        'A Laravel-based maritime operations management system for managing vessels, personnel, news, jobs, live vessel data, catches, and inspection forms. Built secure REST APIs, role-based access control, and media management features to support web and mobile applications.',
      image: WaterfrontImage,
      tech: ['PHP', 'jQuery', 'WebSockets', 'Restfull API'],
      liveUrl: 'https://dashboard.waterfrontapp.com',
      githubUrl: 'https://github.com/MohammadMashaikh/waterfrontApp',
      details: {
        role: 'Full-Stack Developer',
        duration: '1.3 years',
        highlights: [
          'Role-based access control with granular permissions',
          'Live vessel tracking with AIS data integration',
          'Media management for vessel documentation',
          'Job board and news management CMS',
          'Catch reporting with export capabilities',
          'Secure REST API with Passport OAuth2 authentication',
        ],
        challenge:
          'Integrating live AIS vessel data streams with legacy PHP infrastructure — solved by building a bridge service that normalizes the external data feed and caches it for the dashboard.',
      },
    },
    {
      title: 'ClinicMs',
      description:
        'ClinicMs is a comprehensive clinic management system developed using Laravel to digitize and streamline daily healthcare operations. The platform enables clinics to efficiently manage patients, doctors, appointments, medical records, and billing — reducing paperwork and improving patient care.',
      image: ClinicMsImage,
      tech: ['Laravel', 'Alpine.js', 'Livewire', 'Tailwind'],
      liveUrl: 'https://clinicms-ac63.onrender.com',
      githubUrl: 'https://github.com/MohammadMashaikh/ClinicMs',
      details: {
        role: 'Full-Stack Developer',
        duration: '6 weeks',
        highlights: [
          'Patient registration with full medical history tracking',
          'Smart appointment scheduling with conflict detection',
          'Doctor dashboard with daily schedule overview',
          'Medical records and prescription management',
          'Invoice generation and payment tracking',
          'Real-time updates via Livewire without page refresh',
        ],
        challenge:
          'Designing a conflict-free appointment scheduler that handles doctor availability, break times, and overbooking prevention — implemented using a slot-reservation pattern with database-level locking.',
      },
    },
    {
      title: 'Amargi Creative',
      description:
        'Amargi Creative is an AI-powered customer communication platform built to help businesses manage conversations across multiple channels from a single dashboard. The platform integrates WhatsApp, Instagram, Messenger, CRM, ticketing, and AI agents, enabling businesses to automate customer interactions, manage support requests, and maintain complete customer conversation history.',
      image: AmargiImage,
      tech: ['React JS', 'Next JS', 'Tailwind CSS', 'WhatsApp API'],
      liveUrl: 'https://amargicreative.com',
      githubUrl: 'https://github.com/MohammadMashaikh/Amargi-Creative',
      details: {
        role: 'Frontend Developer',
        duration: '3 months',
        highlights: [
          'Unified inbox for WhatsApp, Instagram, and Messenger',
          'AI agent automation for common customer queries',
          'CRM integration with customer profile enrichment',
          'Ticketing system with priority-based queue management',
          'Full conversation history with search and filtering',
          'Real-time message delivery with read receipts',
        ],
        challenge:
          'Building a truly real-time multi-channel inbox with consistent UX across platforms with different API rate limits — solved with a unified event bus architecture and smart message queuing.',
      },
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution built with Laravel backend and Livewire frontend. Features real-time inventory management, multiple payment gateway integration, advanced admin dashboard, and a fully ready RESTful API for mobile app integration.',
      image: EcommercePlatformImage,
      tech: ['Laravel', 'Livewire', 'AlpineJS', 'MySQL', 'Redis'],
      liveUrl: 'https://e-commerce-app-production-3fe7.up.railway.app',
      githubUrl: 'https://github.com/MohammadMashaikh/E-Commerce-App',
      details: {
        role: 'Full-Stack Developer',
        duration: '2 months',
        highlights: [
          'Real-time inventory tracking with low-stock alerts',
          'Multi-gateway payment integration (Stripe, PayPal)',
          'Dynamic product catalog with advanced filtering',
          'Admin dashboard with sales analytics and charts',
          'Order management with status tracking emails',
          'Full REST API ready for mobile app consumption',
        ],
        challenge:
          'Preventing race conditions during checkout when multiple users buy the last item simultaneously — solved with Redis atomic locks and database-level optimistic locking on inventory rows.',
      },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const cards = projectsRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // SVG icons
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

  const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid" ref={projectsRef}>
            {projects.map((project, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-image-overlay">
                    <button
                      className="project-detail-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, ti) => (
                      <span className="tech-badge" key={ti}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Website">
                      <ExternalIcon />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                      <GithubIcon />
                    </a>
                    <button
                      className="project-link project-link-details"
                      title="View Details"
                      onClick={() => setSelectedProject(project)}
                    >
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
