import { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Grigor Pahlevanyan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Grigor
                </span>
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Pahlevanyan
                </span>
              </h1>
              <p className="text-xl text-blue-300 font-medium">Mechatronics Engineer</p>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                As an individual, I always love inventing new ideas, designs, and technologies that do not already exist. 
                In addition, I am extremely passionate about robotics and working towards artificial intelligence. 
                I find engineering extremely motivating because I can see the impact of my individual efforts and creative ideas on the satisfaction of customers.
              </p>
              <p>
                As a Mechatronics Engineering & CO-OP student at McMaster University, I have gained a vast amount of knowledge 
                in the areas of Electrical, Mechanical, and Computer Engineering. This experience has allowed me to further 
                deepen my understanding of the fundamental physical and mathematical concepts that form the basis for any engineering project.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
