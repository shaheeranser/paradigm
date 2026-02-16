interface SectionHeaderProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeader({ children, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className={`text-2xl md:text-3xl font-mono text-text-code inline-block border-b-2 border-purple-500 pb-2 ${align === 'center' ? 'mx-auto' : ''}`}>
        {children}
      </h2>
    </div>
  );
}
