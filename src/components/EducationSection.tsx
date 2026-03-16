import { GraduationCap, Award, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Vardhaman College of Engineering",
    detail: "CGPA: 9.39",
    period: "2023 – 2027 (Expected)",
    status: "Semester 6 · Ongoing",
    highlight: true,
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "Sri Chaitanya Junior Kalasala",
    detail: "Score: 978 / 1000",
    period: "Completed",
    status: "97.8%",
    highlight: false,
  },
  {
    degree: "10th Grade (CBSE)",
    institution: "Delhi Public School",
    detail: "Score: 431 / 500",
    period: "Completed",
    status: "86.2%",
    highlight: false,
  },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-28 border-t border-border relative overflow-hidden">

      {/* background glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-muted/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">

        {/* SECTION HEADER */}

        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap size={16} className="text-terminal-green" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">02.</span> education
            </p>
          </div>

          {/* SAME HOVER EFFECT AS ABOUT */}

          <h2 className="group font-display text-4xl md:text-6xl font-black mb-16 cursor-default">

            <span className="inline-block transition-all duration-300 group-hover:tracking-wide group-hover:translate-x-1">
              Education
            </span>

            <span className="text-muted-foreground transition-colors duration-300 group-hover:text-terminal-green">
              .
            </span>

          </h2>
        </div>

        {/* EDUCATION CARDS */}

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">

          {education.map((item, i) => (

            <div
              key={i}
              className={`group relative bg-card border rounded-2xl p-6 transition-all duration-500 
              hover:border-muted-foreground/40 
              hover:-translate-y-2 
              hover:shadow-xl 
              hover:bg-muted/10
              ${
                item.highlight
                  ? "border-muted-foreground/20"
                  : "border-border"
              }
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >

              {/* CURRENT TAG */}

              {item.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary text-primary-foreground text-xs font-mono px-3 py-1 rounded-full">
                    Current
                  </span>
                </div>
              )}

              {/* STATUS */}

              <div className="flex items-center gap-2 mb-4">

                <Award
                  size={16}
                  className="text-terminal-green transition-transform duration-300 group-hover:scale-110"
                />

                <span className="font-mono text-lg font-black text-foreground">
                  {item.status}
                </span>

              </div>

              {/* DEGREE */}

              <h3 className="font-display font-bold text-foreground mb-1 transition-colors duration-300 group-hover:text-terminal-green">
                {item.degree}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {item.institution}
              </p>

              {/* PERIOD */}

              <div className="flex items-center gap-2 pt-3 border-t border-border">

                <Calendar size={12} className="text-muted-foreground" />

                <span className="text-xs font-mono text-muted-foreground">
                  {item.period}
                </span>

              </div>

              {/* SCORE */}

              <p className="text-sm font-mono text-foreground mt-2">
                {item.detail}
              </p>

              {/* GLOW BORDER EFFECT */}

              <div className="absolute inset-0 rounded-2xl border border-terminal-green/0 group-hover:border-terminal-green/20 transition-all duration-500 pointer-events-none" />

            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
