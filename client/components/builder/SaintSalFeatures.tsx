interface SaintSalFeaturesProps {
  title?: string;
  subtitle?: string;
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export const SaintSalFeatures = ({
  title = "Most AI assistants just chat.",
  subtitle = "SaintSal actually executes your requests",
  features = [
    {
      title: "No complex setup required",
      description:
        "Get started immediately without complicated configurations or learning curves.",
    },
    {
      title: "No manual workflows to learn",
      description:
        "SaintSal understands natural language and handles the technical complexity for you.",
    },
    {
      title: "Ask for something. Watch it happen",
      description:
        "From simple tasks to complex operations, SaintSal delivers real results.",
    },
  ],
}: SaintSalFeaturesProps) => {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#10161C" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-6xl font-bold mb-16"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#FFFFFF",
            lineHeight: "1.1",
            fontWeight: "800",
          }}
        >
          {title} <br />
          <span style={{ color: "#FFD700" }}>{subtitle}</span>.
        </h2>

        <div className="mb-16 space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(24, 28, 32, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 215, 0, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3
                className="text-xl md:text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#FFD700",
                  fontWeight: "700",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-lg"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
