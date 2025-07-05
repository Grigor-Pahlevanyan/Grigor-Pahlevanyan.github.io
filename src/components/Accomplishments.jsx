import ClubsAndTeams from './ClubsAndTeams';
import StandaloneProjects from './StandaloneProjects';

/**
 * Accomplishments section component
 */
const Accomplishments = () => {
  return (
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

        <ClubsAndTeams />
        <StandaloneProjects />
      </div>
    </section>
  );
};

export default Accomplishments;
