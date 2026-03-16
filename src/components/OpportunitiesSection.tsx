import { Briefcase, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const roles = [
  { title: "Java Developer", icon: "☕" },
  { title: "Software Developer", icon: "💻" },
  { title: "Backend Developer", icon: "⚙️" },
  { title: "Frontend Developer", icon: "🚀" },
];

const OpportunitiesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-3 mb-3 justify-center">
            <Briefcase size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">06.</span> opportunities
            </p>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            Open to Work<span className="text-muted-foreground">.</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Actively looking for opportunities to contribute as a Java developer and software engineer where I can apply my programming skills, problem-solving abilities, and passion for technology.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {roles.map((role, i) => (
            <div
              key={role.title}
              className="group bg-card border border-border rounded-2xl p-5 text-center hover:border-muted-foreground/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="text-2xl mb-3 block">{role.icon}</span>
              <p className="text-sm font-medium text-foreground">{role.title}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:shadow-[0_0_30px_hsl(0_0%_100%/0.15)] transition-all duration-300"
          >
            Let's Connect
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
