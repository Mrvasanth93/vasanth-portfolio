import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'SRK TECH GROUP',
      client: 'Karthi - Owner',
      description: 'SRK TECH GROUP in Thanjavur provides professional electrical wiring, plumbing, CCTV installation, AC service, inverter repair, RO service, washing machine repair, and solar panel installation with a focus on quality, safety, and timely service.',
      features: ['Clean and modern UI', 'Fully responsive design', 'Organized service categories', 'About section explaining the company', 'Location & Contact Info'],
      image: 'https://mrvasanth93.github.io/srktech/assets/1%20(1)-CezwiXwc.jpg',
      liveLink: 'https://mrvasanth93.github.io/srktech/',
      category: 'Service Business Website',
      duration: '4 days',
      technologies: ['React', 'CSS', 'WhatsApp API']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Real websites I've built for real clients</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="client-info">
                  <i className="fas fa-user"></i> {project.client}
                </p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
                  <span className="duration">
                    <i className="fas fa-clock"></i> {project.duration}
                  </span>
                  <span className="tech-count">
                    <i className="fas fa-code"></i> {project.technologies.length} Technologies
                  </span>
                </div>

                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <ul className="features-list">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>✅ {feature}</li>
                  ))}
                </ul>

                <div className="project-buttons">
                  <a href={project.liveLink} className="btn-small btn-primary" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Preview
                  </a>
                  <a href="https://wa.me/919345488130?text=Hello!%20Are%20you%20looking%20for%20a%20website%3F%20I%20can%20help%20you%20build%20a%20professional%20one.%20Please%20share%20your%20requirements." className="btn-small btn-outline" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i> Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>Want a website like these for your business?</p>
          <a href="https://wa.me/919345488130?text=Hello!%20Are%20you%20looking%20for%20a%20website%3F%20I%20can%20help%20you%20build%20a%20professional%20one.%20Please%20share%20your%20requirements." className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;