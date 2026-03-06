export default function CertificationsSection() {
  const certifications = [
    {
      name: "Java Programming",
      issuer: "Coursera",
      link: "/certificates/java.pdf",
    },
    {
      name: "Python Programming",
      issuer: "Coursera",
      link: "/certificates/python.pdf",
    },
    {
      name: "Google Cloud Fundamentals",
      issuer: "Google",
      link: "/certificates/cloud.pdf",
    },
  ];

  return (
    <section id="certifications" className="py-32">
      <div className="container mx-auto px-6">

        <p className="text-sm font-mono text-muted-foreground mb-2">
          05. certifications
        </p>

        <h2 className="text-5xl font-bold tracking-tight mb-16">
          Certifications.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              className="border border-border rounded-2xl p-8 hover:bg-muted hover:scale-[1.02] hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold tracking-tight">{cert.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {cert.issuer}
              </p>
              <span className="text-sm mt-4 inline-block font-medium">
                View Certificate →
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
