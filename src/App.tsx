import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <div className="flex flex-col gap-y-16 md:gap-y-32">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <div className="w-full h-px bg-borderLight max-w-4xl mx-auto" />
        <section id="services"><Services /></section>
        <div className="w-full h-px bg-borderLight max-w-4xl mx-auto" />
        <section id="portfolio"><Portfolio /></section>
        <div className="w-full h-px bg-borderLight max-w-4xl mx-auto" />
        <section id="process"><Process /></section>
        <div className="w-full h-px bg-borderLight max-w-4xl mx-auto" />
        <section id="contact"><Contact /></section>
      </div>
    </Layout>
  );
}

export default App;
