import type { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-dark w-full text-white font-sans selection:bg-white/20">
      <Sidebar />
      <main className="flex-1 w-full md:ml-[300px] mt-16 md:mt-0 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 w-full h-full relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
