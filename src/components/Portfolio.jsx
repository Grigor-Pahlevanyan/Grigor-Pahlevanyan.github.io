import { ExternalLinkIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
  const solarCarProjects = [
    {
      title: "Power Management System",
      image: "/api/placeholder/400/300",
      description: "Advanced power management system for solar vehicle applications with intelligent energy distribution and monitoring capabilities.",
      link: "https://www.behance.net/gallery/163620171/Power-Management-System",
      technologies: ["Altium Designer", "Power Electronics", "Embedded Systems"]
    },
    {
      title: "Precharge Circuit",
      image: "/api/placeholder/400/300", 
      description: "Safety-critical precharge circuit design ensuring safe high-voltage system initialization and protection.",
      link: "https://www.behance.net/gallery/163721595/Precharge-Circuit",
      technologies: ["Circuit Design", "Safety Systems", "High Voltage"]
    },
    {
      title: "Electrical Architecture",
      image: "/api/placeholder/400/300",
      description: "Complete high-voltage electrical architecture design for solar racing vehicle with optimized efficiency and safety.",
      link: "https://www.behance.net/gallery/163723257/High-Voltage-Electrical-Architecture-%28Solar-Car%29",
      technologies: ["System Architecture", "High Voltage", "Automotive"]
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white"
          >
            View Project
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Solar Car <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Project</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering Tomorrow's Mobility with Solar Energy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solarCarProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Project Leadership</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              As Electrical Engineering Manager for the McMaster Solar Car Project, I led the design and implementation 
              of the complete high-voltage electrical system. This involved coordinating with cross-functional teams, 
              managing technical requirements, and ensuring safety compliance throughout the development process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
