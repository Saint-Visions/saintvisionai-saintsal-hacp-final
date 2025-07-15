interface SaintSalStatsProps {
  title?: string;
  stats?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
}

export const SaintSalStats = ({
  title = "SaintSal™ in Numbers",
  stats = [
    {
      value: "99.7%",
      label: "Task Completion Rate",
      description: "AI that actually gets things done",
    },
    {
      value: "< 2s",
      label: "Average Response Time",
      description: "Lightning-fast execution",
    },
    {
      value: "24/7",
      label: "Always Available",
      description: "Your AI companion never sleeps",
    },
    {
      value: "Enterprise",
      label: "Security Standard",
      description: "Bank-level data protection",
    },
  ],
}: SaintSalStatsProps) => {
  return (
    <section
      className="py-20 px-6"
      style={{
        backgroundColor: "#10161C",
        backgroundImage:
          "linear-gradient(rgba(45, 93, 47, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 93, 47, 0.02) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#FFD700",
            lineHeight: "1.1",
            fontWeight: "800",
          }}
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl"
              style={{
                background: "rgba(24, 28, 32, 0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 215, 0, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 48px rgba(255, 215, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(0, 0, 0, 0.3)";
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#FFD700",
                  fontWeight: "900",
                  textShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
                }}
              >
                {stat.value}
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#FFFFFF",
                  fontWeight: "600",
                }}
              >
                {stat.label}
              </h3>
              {stat.description && (
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: "300",
                  }}
                >
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
