import { ArrowTopRightOnSquareIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const SmartSeat = () => {
  const project = {
    title: "Smart Safety Seat",
    image: "/api/placeholder/600/400",
    description: "Experience the future of car safety with the Smart Safety Seat - where technology meets protection. This innovative project combines advanced sensors, machine learning, and real-time monitoring to enhance vehicle safety systems.",
    link: "https://www.behance.net/gallery/165815539/Smart-Safety-Seat",
    features: [
      "LiDAR-based occupancy detection",
      "Real-time safety monitoring",
      "Intelligent alert systems",
      "Advanced sensor integration",
      "Machine learning algorithms",
      "Automotive-grade reliability"
    ],
    technologies: ["LiDAR", "Machine Learning", "Embedded Systems", "Automotive Safety", "Sensor Fusion", "Real-time Processing"]
  };

  return (
    <section id="seat" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Smart Safety <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Seat</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of car safety with the Smart Safety Seat - where technology meets protection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              
              {/* Floating elements for visual appeal */}
              <div className="absolute top-4 right-4 bg-purple-500/20 backdrop-blur-sm rounded-full p-3 border border-purple-400/30">
                <ShieldCheckIcon className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-400/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <ShieldCheckIcon className="w-6 h-6 mr-2 text-purple-400" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50">
                    <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                View Full Project
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional project insights */}
        <div className="mt-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Project Impact</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-400">Advanced</div>
                <div className="text-gray-300">LiDAR Integration</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-pink-400">Real-time</div>
                <div className="text-gray-300">Safety Monitoring</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-400">Innovative</div>
                <div className="text-gray-300">Safety Solution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSeat;
