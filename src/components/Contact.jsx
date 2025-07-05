/**
 * Contact info item component
 */
const ContactInfo = ({ icon, label, value, delay, bgColor }) => (
  <div className={`flex items-center space-x-4 p-4 bg-gray-700 rounded-xl fade-in-scale delay-${delay}`}>
    <div className={`p-3 rounded-full ${bgColor}`}>
      <span className="text-xl">{icon}</span>
    </div>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  </div>
);

/**
 * Contact section component
 */
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto fade-in-up delay-200">
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ContactInfo
                icon="📍"
                label="Location"
                value="Toronto, Ontario Canada"
                delay={300}
                bgColor="bg-blue-500"
              />
              <ContactInfo
                icon="✉️"
                label="Email"
                value="grigor.pahlevanyan@outlook.com"
                delay={400}
                bgColor="bg-green-500"
              />
              <ContactInfo
                icon="🎓"
                label="Education"
                value="McMaster University"
                delay={500}
                bgColor="bg-purple-500"
              />
              <ContactInfo
                icon="🌍"
                label="Languages"
                value="English, Armenian, Russian"
                delay={600}
                bgColor="bg-orange-500"
              />
            </div>

            <div className="text-center fade-in-up delay-500">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/Grigor-Pahlevanyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 fade-in-left delay-600"
                >
                  <span>📚</span>
                  <span>GitHub</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/grigorpahlevanyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 fade-in-right delay-700"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
