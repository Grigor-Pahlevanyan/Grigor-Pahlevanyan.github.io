import { 
  MapPinIcon, 
  EnvelopeIcon, 
  AcademicCapIcon, 
  GlobeAltIcon,
  PaperAirplaneIcon,
  UserIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:pahlevag@mcmaster.ca?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      label: "Location",
      value: "Toronto, Ontario Canada",
      color: "text-blue-400"
    },
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "pahlevag@mcmaster.ca",
      color: "text-green-400",
      href: "mailto:pahlevag@mcmaster.ca"
    },
    {
      icon: AcademicCapIcon,
      label: "Education",
      value: "McMaster University",
      color: "text-purple-400"
    },
    {
      icon: GlobeAltIcon,
      label: "Languages",
      value: "English, Armenian, Russian",
      color: "text-orange-400"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Grigor-Pahlevanyan",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/grigorpahlevanyan/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:text-blue-400"
    },
    {
      name: "Behance",
      url: "https://www.behance.net/grigorpahlevanyan",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 7.5v9c0 .8.7 1.5 1.5 1.5H9c3.6 0 6-2.4 6-6s-2.4-6-6-6H1.5C.7 6 0 6.7 0 7.5zm3 1.5h6c1.8 0 3 1.2 3 3s-1.2 3-3 3H3V9zm12-3h6v1.5h-6V6zm0 12h6v1.5h-6V18zm0-6h6c1.8 0 3 1.2 3 3s-1.2 3-3 3h-3v-6z"/>
        </svg>
      ),
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and explore opportunities to collaborate on innovative engineering projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className={`p-3 rounded-full bg-gray-600/50 ${info.color} group-hover:bg-gray-600/70 transition-colors duration-300`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                          <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                        <div className={`p-3 rounded-full bg-gray-600/50 ${info.color}`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                          <p className="text-white font-semibold">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Connect With Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-4 p-4 bg-gray-700/30 text-gray-300 rounded-xl border border-gray-600/50 hover:border-blue-500/50 ${social.color} transition-all duration-300 hover:transform hover:scale-105`}
                  >
                    <div className="p-2 rounded-full bg-gray-600/50 group-hover:bg-gray-600/70 transition-colors duration-300">
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Availability */}
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl p-6 border border-blue-500/20">
              <h4 className="text-xl font-bold text-white mb-3">Professional Availability</h4>
              <p className="text-gray-300 mb-4">
                Currently seeking opportunities in:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Electrical Engineering Positions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  Power Electronics Projects
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">•</span>
                  Research Collaborations
                </li>
                <li className="flex items-center">
                  <span className="text-orange-400 mr-2">•</span>
                  Technical Consulting
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    <UserIcon className="w-5 h-5 inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    <EnvelopeIcon className="w-5 h-5 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  <ChatBubbleLeftIcon className="w-5 h-5 inline mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="What would you like to discuss?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, collaboration idea, or any questions you have..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
