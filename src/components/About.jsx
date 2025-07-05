import WorkExperience from './WorkExperience';
import Skills from './Skills';

/**
 * About section component
 */
const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* Professional Introduction */}
        <div className="mb-16 fade-in-up delay-200">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              Experienced Electrical Engineer with a proven track record of leading cross-functional teams and 
              delivering complex technical projects. Currently working as an Electrical Designer at L3Harris, 
              with previous internship experience at Tesla and Thales Canada. Passionate about power electronics, 
              embedded systems, and pushing the boundaries of automotive technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-gray-800/50 rounded-xl p-6 border border-gray-700 fade-in-scale delay-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">40</div>
                <div className="text-gray-300 text-sm uppercase tracking-wide">Team Members Led</div>
              </div>
              
              <div className="text-center bg-gray-800/50 rounded-xl p-6 border border-gray-700 fade-in-scale delay-400">
                <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                <div className="text-gray-300 text-sm uppercase tracking-wide">Projects Managed</div>
              </div>
              
              <div className="text-center bg-gray-800/50 rounded-xl p-6 border border-gray-700 fade-in-scale delay-500">
                <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
                <div className="text-gray-300 text-sm uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <WorkExperience />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
