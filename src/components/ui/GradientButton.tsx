import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export function GradientButton({ children, icon, href, onClick }: GradientButtonProps) {
  const base = `inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white bg-gradient-button hover:shadow-glow-purple hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`;

  const content = (
    <>
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <span className="relative flex items-center gap-2">{children}{icon && <span className="ml-2">{icon}</span>}</span>
    </>
  );

  if (href) return <a href={href} className={base}>{content}</a>;
  return <button onClick={onClick} className={base}>{content}</button>;
}
