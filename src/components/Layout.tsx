import type { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background w-full text-textMain font-sans selection:bg-accent/20 selection:text-accent">
      <Sidebar />
      <main className="flex-1 w-full md:ml-[280px] mt-16 md:mt-0 relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 w-full h-full relative z-10 pb-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
