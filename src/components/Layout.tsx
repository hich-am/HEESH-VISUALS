import type { ReactNode } from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import NoiseOverlay from './NoiseOverlay';

import Preloader from './Preloader';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <div className={`min-h-screen bg-bg text-textMain font-body selection:bg-white/10 selection:text-white ${loaded ? '' : 'opacity-0'}`}>
        <NoiseOverlay />

        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
