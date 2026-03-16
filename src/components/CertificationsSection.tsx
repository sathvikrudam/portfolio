import { Award, ArrowUpRight } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      name: "Agentforce Specialist",
      issuer: "Salesforce",
      link: "/certificates/salesforce.pdf",
    },
    {
      name: "MongoDB",
      issuer: "GeeksforGeeks",
      link: "/certificates/mongodb.pdf",
    },
        {
      name: "Java Internship",
      issuer: "Kodbud",
      link: "/certificates/javakodbud.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-28 border-t border-border relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3">
          <Award size={16} className="text-terminal-green" />

          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-terminal-green">05.</span> certifications
          </p>
        </div>

        {/* Section Title — SAME EFFECT AS ABOUT */}
        <h2 className="group inline-block font-display text-4xl md:text-6xl font-black mb-16 cursor-default transition-all duration-300">

          <span className="inline-block transition-all duration-500 group-hover:translate-x-1 group-hover:tracking-wide">
            Certifications
          </span>

          <span className="text-muted-foreground inline-block ml-1 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:text-terminal-green">
            .
          </span>

        </h2>

        {/* Certificates List */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">

          {certifications.map((cert, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden
              hover:border-muted-foreground/30
              hover:-translate-y-2
              hover:shadow-lg
              transition-all duration-700"
            >

              {/* Hover Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-muted-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Content */}
              <div className="relative flex items-center justify-between p-8">

                {/* Certificate Info */}
                <div className="flex flex-col gap-2">

                  <h3 className="font-display font-bold text-xl text-foreground transition-colors">
                    {cert.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mt-2"
                  >
                    View Certificate
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
