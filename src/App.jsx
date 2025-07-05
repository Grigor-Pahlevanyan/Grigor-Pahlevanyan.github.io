import { useEffect, useRef } from 'react';
import heroImage from './assets/hero.jpg';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">
              Grigor <span className="text-blue-400">Pahlevanyan</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('accomplishments')}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Accomplishments
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
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

      {/* Simple About Section */}
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
            {/* Work Experience */}
            <div className="fade-in-left delay-300">
              <h3 className="text-2xl font-bold text-white mb-6">Work Experience</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 fade-in-up delay-400">
                  <p className="text-blue-400 text-sm font-medium mb-2">May 2025 - present</p>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Electrical Designer
                  </h4>
                  <p className="text-blue-300 mb-3">L3Harris</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Designing electrical systems and components</li>
                    <li>• Collaborating with cross-functional teams</li>
                    <li>• Ensuring compliance with industry standards</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 fade-in-up delay-500">
                  <p className="text-blue-400 text-sm font-medium mb-2">May 1, 2024 - August 30, 2024</p>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Power Electronics Technical Program Manager Intern
                  </h4>
                  <p className="text-blue-300 mb-3">Tesla</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Simultaneously managing four vehicle projects</li>
                    <li>• Ensuring on time delivery of projects</li>
                    <li>• Excellent productivity in fast pace environment</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 fade-in-up delay-600">
                  <p className="text-blue-400 text-sm font-medium mb-2">May 2, 2022 - August 17, 2023</p>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Component Engineering Intern (16 months)
                  </h4>
                  <p className="text-blue-300 mb-3">Thales Canada</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Conducted comparative analysis of components</li>
                    <li>• Performed component obsolescence analysis</li>
                    <li>• Generated Engineering Change Notices (ECNs)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="fade-in-right delay-300">
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 fade-in-up delay-400">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Altium Designer</span>
                    <span className="text-blue-400 font-bold">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 fade-in-up delay-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Python</span>
                    <span className="text-blue-400 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 fade-in-up delay-600">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">C/C++</span>
                    <span className="text-blue-400 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 fade-in-up delay-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Embedded Systems</span>
                    <span className="text-blue-400 font-bold">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Accomplishments Section */}
      <section id="accomplishments" className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Accomplishments</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing my involvement in teams, clubs, and innovative projects
            </p>
          </div>

          {/* Clubs and Teams */}
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
                <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-300 fade-in-scale delay-400">
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">Power Management System</h5>
                  <p className="text-gray-300 text-sm mb-3">Advanced power management with intelligent energy distribution</p>
                  <a 
                    href="https://www.behance.net/gallery/163620171/Power-Management-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View Project →
                  </a>
                </div>

                <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-300 fade-in-scale delay-500">
                  <div className="h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-4xl">🔋</span>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">Precharge Circuit</h5>
                  <p className="text-gray-300 text-sm mb-3">Safety-critical circuit for high-voltage system initialization</p>
                  <a 
                    href="https://www.behance.net/gallery/163721595/Precharge-Circuit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View Project →
                  </a>
                </div>

                <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-300 fade-in-scale delay-600">
                  <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-4xl">🏗️</span>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">Electrical Architecture</h5>
                  <p className="text-gray-300 text-sm mb-3">Complete high-voltage electrical system design</p>
                  <a 
                    href="https://www.behance.net/gallery/163723257/High-Voltage-Electrical-Architecture-%28Solar-Car%29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View Project →
                  </a>
                </div>
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
                <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-300 fade-in-scale delay-500">
                  <div className="h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-4xl">🔧</span>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">BMS Hardware Development</h5>
                  <p className="text-gray-300 text-sm mb-3">Designing and implementing battery management system hardware components</p>
                  <span className="text-gray-500 text-sm">In Development</span>
                </div>

                <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-300 fade-in-scale delay-600">
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-4xl">👥</span>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">Team Leadership</h5>
                  <p className="text-gray-300 text-sm mb-3">Leading cross-functional engineering teams in battery technology development</p>
                  <span className="text-gray-500 text-sm">Ongoing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Standalone Projects */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center fade-in-up delay-300">Standalone Projects</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Smart Safety Seat */}
              <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 fade-in-left delay-400">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-6xl">🛡️</span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3">Smart Safety Seat</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Experience the future of car safety with advanced LiDAR integration, machine learning algorithms, 
                  and real-time monitoring capabilities.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-300 text-sm rounded-full">LiDAR</span>
                  <span className="px-3 py-1 bg-pink-500 bg-opacity-20 text-pink-300 text-sm rounded-full">Machine Learning</span>
                  <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 text-sm rounded-full">Automotive Safety</span>
                </div>
                
                <a 
                  href="https://www.behance.net/gallery/165815539/Smart-Safety-Seat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  View Project
                  <span>→</span>
                </a>
              </div>

              {/* AI Meeting Assistant */}
              <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 fade-in-right delay-500">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-6xl">🤖</span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3">AI Meeting Assistant (AMA)</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Intelligent meeting assistant powered by AI that provides real-time transcription, 
                  summary generation, and action item extraction for enhanced productivity.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 text-sm rounded-full">Artificial Intelligence</span>
                  <span className="px-3 py-1 bg-cyan-500 bg-opacity-20 text-cyan-300 text-sm rounded-full">NLP</span>
                  <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-300 text-sm rounded-full">Real-time Processing</span>
                </div>
                
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Coming Soon
                  <span>🚀</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-xl fade-in-scale delay-300">
                  <div className="p-3 rounded-full bg-blue-500">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">Toronto, Ontario Canada</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-xl fade-in-scale delay-400">
                  <div className="p-3 rounded-full bg-green-500">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">grigor.pahlevanyan@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-xl fade-in-scale delay-500">
                  <div className="p-3 rounded-full bg-purple-500">
                    <span className="text-xl">🎓</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Education</p>
                    <p className="text-white font-semibold">McMaster University</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-xl fade-in-scale delay-600">
                  <div className="p-3 rounded-full bg-orange-500">
                    <span className="text-xl">🌍</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Languages</p>
                    <p className="text-white font-semibold">English, Armenian, Russian</p>
                  </div>
                </div>
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
    </div>
  )
}

export default App
