import { useEffect, useState } from 'react';

export function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(Number(scrollProgress.toFixed(2)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      <button
        className="w-3 h-3 rounded-full bg-white shadow-glow-purple hover:scale-125 transition-transform"
        style={{ boxShadow: `0 0 ${10 + progress / 10}px rgba(167,139,250,0.8)` }}
        aria-hidden
      />

      <button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 hover:scale-125 transition-all" aria-hidden />
      <button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 hover:scale-125 transition-all" aria-hidden />
      <button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 hover:scale-125 transition-all" aria-hidden />
    </div>
  );
}
