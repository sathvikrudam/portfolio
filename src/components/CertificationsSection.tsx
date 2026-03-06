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
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">

        <p className="text-sm font-mono text-muted-foreground mb-2">
          04. certifications
        </p>

        <h2 className="text-4xl font-bold mb-12">
          Certifications.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              className="border border-border rounded-xl p-6 hover:bg-muted hover:scale-[1.02] hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{cert.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {cert.issuer}
              </p>
              <span className="text-sm mt-2 inline-block">
                View Certificate →
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
