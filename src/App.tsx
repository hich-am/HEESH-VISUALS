import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import Contact from './pages/Contact';
import PortfolioPage from './pages/PortfolioPage';

function MainPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-y-6 md:gap-y-10">
        <section id="home"><Home /></section>
        
        {/* Main Content Area */}
        <div className="flex flex-col gap-y-6 md:gap-y-10">
          <div className="max-w-[1200px] mx-auto px-0 w-full flex flex-col gap-y-6 md:gap-y-10">
            <section id="about"><About /></section>
            <div className="w-full h-px bg-borderLight max-w-4xl mx-auto" />
            <section id="services"><Services /></section>
          </div>

          {/* Portfolio — Breaks out of the 1200px container */}
          <section id="portfolio" className="w-full">
            <div className="max-w-[1200px] mx-auto w-full h-px bg-borderLight mb-10" />
            <Portfolio />
            <div className="max-w-[1200px] mx-auto w-full h-px bg-borderLight mt-10" />
          </section>

          <div className="max-w-[1200px] mx-auto px-0 w-full flex flex-col gap-y-6 md:gap-y-10">
            <section id="process"><Process /></section>
            <div className="w-full h-px bg-borderLight max-w-4xl mx-auto" />
            <section id="contact"><Contact /></section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
