export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="label-text mb-4">Coming Soon</p>
        <h1 className="text-4xl md:text-5xl font-sans font-medium text-textMain tracking-tight">Full Portfolio</h1>
        <p className="text-textMuted font-light mt-4">This page is under construction.</p>
        <a href="/" className="inline-block mt-8 px-8 py-3 rounded-full border border-borderLight text-textMuted text-sm hover:border-accent hover:text-accent transition-colors">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
