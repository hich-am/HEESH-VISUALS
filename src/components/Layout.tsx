import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background w-full text-textMain font-sans selection:bg-accent/20 selection:text-accent">
      <Sidebar />
      <main className="flex-1 w-full md:ml-[280px] mt-16 md:mt-0 relative flex flex-col">
        <div className="w-full relative z-10 pb-16 flex-1">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
