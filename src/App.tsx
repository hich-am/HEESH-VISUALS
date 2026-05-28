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
      <section id="work">
        <Portfolio />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
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
