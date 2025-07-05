import { Navigation, Hero, About, Accomplishments, Contact } from './components';
import { useScrollToSection, useScrollAnimations } from './hooks';

function App() {
  const { scrollToSection } = useScrollToSection();
  useScrollAnimations();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Accomplishments />
      <Contact />
    </div>
  );
}

export default App;
