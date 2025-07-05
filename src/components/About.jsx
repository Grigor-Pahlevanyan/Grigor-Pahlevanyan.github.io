import { ChevronRightIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const About = () => {
  const workExperience = [
    {
      duration: "May 1, 2024 - August 30, 2024",
      title: "Power Electronics Technical Program Manager Intern",
      company: "Tesla",
      responsibilities: [
        "Simultaneously managing four vehicle projects",
        "Ensuring on time delivery of projects",
        "Communicating and inspiring confidence in multiple layers of management",
        "Excellent productivity in fast pace environment"
      ]
    },
    {
      duration: "May 2, 2022 - August 17, 2023",
      title: "Component Engineering Intern (16 months)",
      company: "Thales Canada",
      responsibilities: [
        "Conducted comparative analysis of components from various manufacturers to identify key advantages",
        "Performed thorough component obsolescence analysis to ensure continuity and reliability",
        "Generated and updated Engineering Change Notices (ECNs) to reflect design modifications",
        "Supported hardware design by researching and identifying alternative component solutions to mitigate obsolescence risks"
      ]
    }
  ];

  const extracurricular = [
    {
      duration: "September 2024 - present",
      title: "BMS Hardware Lead",
      company: "Battery Workforce Challenge",
      responsibilities: [
        "Creating hardware components to support BMS functionality",
        "Managing a team of 8 engineers and working with cross-functional teams"
      ]
    },
    {
      duration: "November 2021 - September 2024",
      title: "Electrical Engineering Manager",
      company: "McMaster Solar Car Project",
      responsibilities: [
        "Designed the high voltage electrical architecture of the solar car along with many other electrical boards",
        "Directly lead a team of 7 engineering leads, and indirectly lead 40 engineering members"
      ]
    }
  ];

  const skills = [
    { name: "Altium Designer", level: 90 },
    { name: "Python", level: 95 },
    { name: "NI Multisim", level: 85 },
    { name: "C/C++", level: 95 },
    { name: "Autodesk Inventor", level: 75 },
    { name: "Embedded Systems", level: 80 }
  ];

  const TimelineItem = ({ item, icon: Icon }) => (
    <div className="relative pl-8 pb-8 group">
      <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="ml-6 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
        <p className="text-blue-400 text-sm font-medium mb-2">{item.duration}</p>
        <h5 className="text-xl font-bold text-white mb-1">
          {item.title} <span className="text-blue-300">- {item.company}</span>
        </h5>
        <ul className="space-y-2 mt-4">
          {item.responsibilities.map((resp, index) => (
            <li key={index} className="flex items-start text-gray-300">
              <ChevronRightIcon className="w-4 h-4 mt-1 mr-2 text-blue-400 flex-shrink-0" />
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-12">
            {/* Work Experience */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center">
                <BriefcaseIcon className="w-8 h-8 mr-3 text-blue-400" />
                Work Experience
              </h4>
              <div className="space-y-6">
                {workExperience.map((exp, index) => (
                  <TimelineItem key={index} item={exp} icon={BriefcaseIcon} />
                ))}
              </div>
            </div>

            {/* Extracurricular */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center">
                <AcademicCapIcon className="w-8 h-8 mr-3 text-purple-400" />
                Extracurricular Experience
              </h4>
              <div className="space-y-6">
                {extracurricular.map((exp, index) => (
                  <TimelineItem key={index} item={exp} icon={AcademicCapIcon} />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center">
                <AcademicCapIcon className="w-8 h-8 mr-3 text-green-400" />
                Education
              </h4>
              <TimelineItem 
                item={{
                  duration: "2020 - present",
                  title: "Bachelor of Mechatronics Engineering",
                  company: "McMaster University",
                  responsibilities: [
                    "Focused on robotics, Mechatronics encompasses embedded systems, electronics, software, and mechanics"
                  ]
                }}
                icon={AcademicCapIcon}
              />
            </div>
          </div>

          {/* Skills Column */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-8">Skills</h4>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-lg font-semibold text-white">{skill.name}</h5>
                    <span className="text-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
