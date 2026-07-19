import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PortfolioPage from './pages/PortfolioPage';

function MainPage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="work" className="relative">
        <div className="absolute top-8 right-6 md:right-12 lg:right-20 section-index opacity-100 z-0">
          01
        </div>
        <div className="relative z-10">
          <Portfolio />
        </div>
      </section>
      <section id="about" className="relative">
        <div className="absolute top-8 right-6 md:right-12 lg:right-20 section-index opacity-100 z-0">
          02
        </div>
        <div className="relative z-10">
          <About />
        </div>
      </section>
      <section id="contact" className="relative">
        <div className="absolute top-8 right-6 md:right-12 lg:right-20 section-index opacity-100 z-0">
          03
        </div>
        <div className="relative z-10">
          <Contact />
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
