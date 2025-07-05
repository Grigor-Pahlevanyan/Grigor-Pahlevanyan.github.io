/**
 * Project card component
 */
const ProjectCard = ({ title, description, link, gradient, icon, delay }) => (
  <div className={`bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-300 fade-in-scale delay-${delay}`}>
    <div className={`h-32 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
      <span className="text-4xl">{icon}</span>
    </div>
    <h5 className="text-lg font-bold text-white mb-2">{title}</h5>
    <p className="text-gray-300 text-sm mb-3">{description}</p>
    {link ? (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 text-sm font-medium"
      >
        View Project →
      </a>
    ) : (
      <span className="text-gray-500 text-sm">In Development</span>
    )}
  </div>
);

/**
 * Clubs and Teams component
 */
const ClubsAndTeams = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-8 text-center fade-in-up delay-200">Clubs & Teams</h3>
      
      {/* McMaster Solar Car Project */}
      <div className="mb-12 bg-gray-800 bg-opacity-50 rounded-2xl p-8 border border-gray-700 fade-in-up delay-300">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4 float-animation">
            <span className="text-2xl">☀️</span>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white">McMaster Solar Car Project</h4>
            <p className="text-blue-300 font-medium">Electrical Engineering Manager</p>
            <p className="text-gray-400 text-sm">November 2021 - September 2024</p>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          Led the design and implementation of the complete high-voltage electrical system. 
          Directly managed a team of 7 engineering leads and indirectly led 40 engineering members.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            title="Power Management System"
            description="Advanced power management with intelligent energy distribution"
            link="https://www.behance.net/gallery/163620171/Power-Management-System"
            gradient="bg-gradient-to-br from-blue-500 to-purple-600"
            icon="⚡"
            delay={400}
          />
          <ProjectCard
            title="Precharge Circuit"
            description="Safety-critical circuit for high-voltage system initialization"
            link="https://www.behance.net/gallery/163721595/Precharge-Circuit"
            gradient="bg-gradient-to-br from-green-500 to-blue-600"
            icon="🔋"
            delay={500}
          />
          <ProjectCard
            title="Electrical Architecture"
            description="Complete high-voltage electrical system design"
            link="https://www.behance.net/gallery/163723257/High-Voltage-Electrical-Architecture-%28Solar-Car%29"
            gradient="bg-gradient-to-br from-purple-500 to-pink-600"
            icon="🏗️"
            delay={600}
          />
        </div>
      </div>

      {/* Battery Workforce Challenge */}
      <div className="mb-12 bg-gray-800 bg-opacity-50 rounded-2xl p-8 border border-gray-700 fade-in-up delay-400">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4 float-animation">
            <span className="text-2xl">🔋</span>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white">Battery Workforce Challenge</h4>
            <p className="text-green-300 font-medium">BMS Hardware Lead</p>
            <p className="text-gray-400 text-sm">September 2024 - January 2025</p>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          Created hardware components to support BMS functionality. Managed a team of 8 engineers 
          and worked with cross-functional teams to develop innovative battery management solutions.
          Successfully completed the challenge in January 2025.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="BMS Hardware Development"
            description="Designing and implementing battery management system hardware components"
            link={null}
            gradient="bg-gradient-to-br from-green-500 to-teal-600"
            icon="🔧"
            delay={500}
          />
          <ProjectCard
            title="Team Leadership"
            description="Leading cross-functional engineering teams in battery technology development"
            link={null}
            gradient="bg-gradient-to-br from-blue-500 to-purple-600"
            icon="👥"
            delay={600}
          />
        </div>
      </div>
    </div>
  );
};

export default ClubsAndTeams;
