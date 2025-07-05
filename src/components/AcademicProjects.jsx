import { CodeBracketIcon, CpuChipIcon, BeakerIcon } from '@heroicons/react/24/outline';

const AcademicProjects = () => {
  const projects = [
    {
      title: "Embedded Systems Control Unit",
      icon: CpuChipIcon,
      description: "Developed a comprehensive embedded control system using ARM Cortex-M microcontrollers with real-time operating system implementation.",
      technologies: ["C/C++", "ARM Cortex-M", "RTOS", "I2C/SPI"],
      highlights: [
        "Real-time sensor data processing",
        "Multi-threaded task scheduling",
        "Hardware abstraction layer design",
        "Power optimization techniques"
      ],
      category: "Embedded Systems"
    },
    {
      title: "Machine Learning Signal Processor",
      icon: BeakerIcon,
      description: "Implemented advanced signal processing algorithms with machine learning integration for pattern recognition and noise reduction.",
      technologies: ["Python", "TensorFlow", "MATLAB", "DSP"],
      highlights: [
        "Custom neural network architecture",
        "Real-time signal filtering",
        "Pattern recognition algorithms",
        "Performance optimization"
      ],
      category: "Machine Learning"
    },
    {
      title: "Autonomous Navigation System",
      icon: CodeBracketIcon,
      description: "Designed and programmed an autonomous navigation system with obstacle avoidance and path planning capabilities.",
      technologies: ["Python", "OpenCV", "ROS", "LiDAR"],
      highlights: [
        "Computer vision integration",
        "SLAM implementation",
        "Path planning algorithms",
        "Sensor fusion techniques"
      ],
      category: "Robotics"
    },
    {
      title: "Power Electronics Converter",
      icon: CpuChipIcon,
      description: "Built a high-efficiency DC-DC converter with advanced control algorithms for renewable energy applications.",
      technologies: ["Altium Designer", "SPICE", "C++", "Power Electronics"],
      highlights: [
        "High-frequency switching design",
        "Closed-loop control system",
        "Efficiency optimization",
        "EMI/EMC compliance"
      ],
      category: "Power Electronics"
    },
    {
      title: "IoT Environmental Monitor",
      icon: BeakerIcon,
      description: "Created a comprehensive IoT system for environmental monitoring with cloud integration and real-time data visualization.",
      technologies: ["Arduino", "Python", "AWS IoT", "React"],
      highlights: [
        "Multi-sensor integration",
        "Cloud data processing",
        "Real-time dashboard",
        "Mobile app connectivity"
      ],
      category: "IoT Systems"
    },
    {
      title: "Digital Communication Protocol",
      icon: CodeBracketIcon,
      description: "Implemented a custom digital communication protocol with error correction and security features for industrial applications.",
      technologies: ["C", "Assembly", "UART/CAN", "Cryptography"],
      highlights: [
        "Error correction algorithms",
        "Encryption implementation",
        "Protocol optimization",
        "Industrial-grade reliability"
      ],
      category: "Communications"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 mr-4">
          <project.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-sm text-blue-400 font-medium">{project.category}</span>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Key Highlights:</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="academic-projects" className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Academic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative engineering projects demonstrating technical expertise across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Additional Academic Information */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Research Interests</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                <div>
                  <h4 className="text-white font-semibold">Power Electronics & Energy Systems</h4>
                  <p className="text-gray-300 text-sm">Advanced converter topologies and renewable energy integration</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                <div>
                  <h4 className="text-white font-semibold">Autonomous Systems</h4>
                  <p className="text-gray-300 text-sm">Machine learning applications in robotics and control systems</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">•</span>
                <div>
                  <h4 className="text-white font-semibold">Embedded Intelligence</h4>
                  <p className="text-gray-300 text-sm">Edge computing and real-time embedded AI systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Academic Excellence</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3.8+</div>
                <div className="text-gray-300">GPA in Engineering</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Technical Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                <div className="text-gray-300">Research Papers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;
