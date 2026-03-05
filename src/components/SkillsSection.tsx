import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Layers } from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: "{ }",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 70 },
      { name: "C", level: 65 },
    ],
  },
  {
    title: "Core CS",
    icon: "⟨⟩",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Object Oriented Programming", level: 85 },
      { name: "DBMS", level: 70 },
    ],
  },
  {
    title: "Web Development",
    icon: "</>",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "$ _",
    skills: [
      { name: "Git", level: 75 },
      { name: "GitHub", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-28 border-t border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-muted/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-3">
            <Layers size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">03.</span> skills
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-16">
            Tech Stack<span className="text-muted-foreground">.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className={`bg-card border border-border rounded-2xl overflow-hidden hover:border-muted-foreground/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(gi + 2) * 150}ms` }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/20">
                <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {group.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground/50">{group.icon}</span>
              </div>

              <div className="p-6 space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-foreground/70 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${(gi + 2) * 150 + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
