import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import SmartSeat from './components/SmartSeat';
import AcademicProjects from './components/AcademicProjects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Header />
      <About />
      <Portfolio />
      <SmartSeat />
      <AcademicProjects />
      <Contact />
    </div>
  );
}

export default App;
