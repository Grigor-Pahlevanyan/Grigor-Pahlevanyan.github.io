import heroImage from '../assets/hero.jpg';

/**
 * Hero section component
 */
const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Professional Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-1 float-animation pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img 
                    src={heroImage} 
                    alt="Grigor Pahlevanyan - Mechatronics Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 fade-in-right">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Grigor
                </span>
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Pahlevanyan
                </span>
              </h1>
              <p className="text-xl text-blue-300 font-medium">Mechatronics Engineer</p>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                As an individual, I always love inventing new ideas, designs, and technologies that do not already exist. 
                In addition, I am extremely passionate about robotics and working towards artificial intelligence.
              </p>
              <p>
                As a Mechatronics Engineering & CO-OP student at McMaster University, I have gained a vast amount of knowledge 
                in the areas of Electrical, Mechanical, and Computer Engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('accomplishments')}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
