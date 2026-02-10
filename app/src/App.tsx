import './App.css';
import HeroSection from './sections/HeroSection';
import FinanceSection from './sections/FinanceSection';
import WorkloadSection from './sections/WorkloadSection';
import RecommendationsSection from './sections/RecommendationsSection';
import ForecastSection from './sections/ForecastSection';
import RoadmapSection from './sections/RoadmapSection';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-[hsl(220,25%,8%)]">
      <HeroSection />
      <FinanceSection />
      <WorkloadSection />
      <RecommendationsSection />
      <ForecastSection />
      <RoadmapSection />
      <FooterSection />
    </div>
  );
}

export default App;
