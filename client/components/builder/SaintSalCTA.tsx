import { Button } from "@/components/ui/button";

interface SaintSalCTAProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
  backgroundColor?: string;
}

export const SaintSalCTA = ({
  title = "Try SaintSal™ Now",
  subtitle = "No Login Required",
  ctaText = "→ Launch Assistant",
  ctaUrl = "https://saintvisionai.com/console",
  backgroundColor = "#10161C",
}: SaintSalCTAProps) => {
  return (
    <section className="py-20 px-6" style={{ backgroundColor }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#FFD700",
            fontWeight: "700",
          }}
        >
          {title} —{" "}
          <span
            style={{
              color: "#FFFFFF",
              fontWeight: "300",
            }}
          >
            {subtitle}
          </span>
          .
        </h2>

        <div className="relative inline-block">
          <a href={ctaUrl}>
            <Button
              className="text-xl px-12 py-6 font-semibold relative"
              style={{
                background: "linear-gradient(135deg, #FFD700 0%, #FFB400 100%)",
                color: "#000",
                borderRadius: "20px",
                boxShadow:
                  "0 0 60px rgba(255,215,0,0.5), 0 30px 60px rgba(0,0,0,0.3)",
                transition: "all 0.4s ease",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-4px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 0 80px rgba(255,215,0,0.7), 0 40px 80px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 60px rgba(255,215,0,0.5), 0 30px 60px rgba(0,0,0,0.3)";
              }}
            >
              {ctaText}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
