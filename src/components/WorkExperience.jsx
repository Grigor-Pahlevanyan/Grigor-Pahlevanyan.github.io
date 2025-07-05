/**
 * Work Experience component
 */
const WorkExperience = () => {
  return (
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
  );
};

export default WorkExperience;
