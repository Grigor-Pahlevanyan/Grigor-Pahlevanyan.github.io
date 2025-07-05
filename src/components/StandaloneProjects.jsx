/**
 * Standalone Projects component
 */
const StandaloneProjects = () => {
  return (
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
  );
};

export default StandaloneProjects;
