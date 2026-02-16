import { SectionHeader } from '@/components/ui/SectionHeader';

const skillCategories = [
  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
  { category: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
  { category: 'DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'] },
  { category: 'Design', skills: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Design Systems'] }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader align="center">&lt;/Skills&gt;</SectionHeader>

        <h3 className="text-4xl font-bold text-center text-white mb-16">Tech Stack</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="group">
              <h4 className="text-xl font-bold text-purple-400 mb-6 font-mono">{category.category}</h4>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-white hover:-translate-x-1 transition-all duration-300 cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
