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

const codingProfiles = [
  {
    name: "LeetCode",
    username: "sathvikrudam",
    link: "https://leetcode.com/sathvikrudam",
    logo: "https://cdn.simpleicons.org/leetcode",
  },
  {
    name: "CodeChef",
    username: "stvk_rdm",
    link: "https://www.codechef.com/users/stvk_rdm",
    logo: "https://cdn.simpleicons.org/codechef",
  },
  {
    name: "HackerRank",
    username: "sathvikrudam",
    link: "https://www.hackerrank.com/profile/sathvikrudam",
    logo: "https://cdn.simpleicons.org/hackerrank",
  },
  {
    name: "GeeksforGeeks",
    username: "stvk_rdm",
    link: "https://www.geeksforgeeks.org/user/stvk_rdm/",
    logo: "https://cdn.simpleicons.org/geeksforgeeks",
  },
  {
    name: "Codeforces",
    username: "sathvikrudam",
    link: "https://codeforces.com/profile/sathvikrudam",
    logo: "https://cdn.simpleicons.org/codeforces",
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      className="py-28 border-t border-border relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-muted/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">

        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl">

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, gi) => (
              <div
                key={group.title}
                className={`bg-card border border-border rounded-2xl overflow-hidden
                hover:border-muted-foreground/30
                hover:shadow-[0_0_20px_rgba(34,197,94,0.12)]
                transition-all duration-700
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(gi + 1) * 150}ms` }}
              >

                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/20">
                  <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground/50">
                    {group.icon}
                  </span>
                </div>

                <div className="p-6 space-y-5">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>

                        <span className="text-xs font-mono text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground/70 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${(gi + 1) * 150 + si * 120}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden relative">

              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/20">
                <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Coding Profiles
                </h3>
              </div>

              <div className="p-6 space-y-3">
                {codingProfiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-xl border border-border
                    hover:border-muted-foreground/30
                    hover:bg-muted/20
                    hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]
                    hover:-translate-y-0.5
                    transition-[transform,box-shadow,background-color,border-color] duration-500"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={profile.logo}
                        alt={profile.name}
                        className="w-5 h-5 opacity-80 group-hover:opacity-100 transition"
                      />

                      <span className="text-sm font-medium text-foreground">
                        {profile.name}
                      </span>
                    </div>

                    <span className="text-xs text-muted-foreground font-mono">
                      {profile.username}
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
