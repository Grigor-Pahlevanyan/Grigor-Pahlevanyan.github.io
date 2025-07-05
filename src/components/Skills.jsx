/**
 * Skill bar component
 */
const SkillBar = ({ skill, percentage, delay }) => (
  <div className={`bg-gray-800 p-4 rounded-xl border border-gray-700 fade-in-up delay-${delay}`}>
    <div className="flex justify-between items-center mb-2">
      <span className="text-white font-semibold">{skill}</span>
      <span className="text-blue-400 font-bold">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
        style={{width: `${percentage}%`}}
      ></div>
    </div>
  </div>
);

/**
 * Skills component
 */
const Skills = () => {
  const skills = [
    { skill: "Altium Designer", percentage: 90, delay: 400 },
    { skill: "Python", percentage: 95, delay: 500 },
    { skill: "C/C++", percentage: 95, delay: 600 },
    { skill: "MATLAB/Simulink", percentage: 85, delay: 700 },
    { skill: "Embedded Systems", percentage: 80, delay: 800 },
    { skill: "CAD Design (Inventor, Fusion 360)", percentage: 90, delay: 900 },
    { skill: "Machine Learning", percentage: 70, delay: 1000 },
    { skill: "Control Systems", percentage: 80, delay: 1100 },
    { skill: "Project Management", percentage: 90, delay: 1200 }
  ];

  return (
    <div className="fade-in-right delay-300">
      <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
      
      <div className="space-y-4">
        {skills.map((skillData, index) => (
          <SkillBar 
            key={index}
            skill={skillData.skill}
            percentage={skillData.percentage}
            delay={skillData.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
