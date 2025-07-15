interface SaintSalTestimonialProps {
  title?: string;
  testimonials?: Array<{
    quote: string;
    author: string;
    role: string;
    company?: string;
    avatar?: string;
  }>;
}

export const SaintSalTestimonial = ({
  title = "What Our Users Say",
  testimonials = [
    {
      quote:
        "SaintSal doesn't just talk about getting things done - it actually does them. This is the AI assistant I've been waiting for.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
    },
    {
      quote:
        "Finally, an AI that understands context and delivers results. SaintSal has transformed how our team works.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "StartupXYZ",
    },
    {
      quote:
        "The difference is night and day. Other AI assistants give suggestions - SaintSal gives solutions.",
      author: "Emily Johnson",
      role: "CEO",
      company: "InnovateLab",
    },
  ],
}: SaintSalTestimonialProps) => {
  return (
    <section
      className="py-20 px-6"
      style={{
        backgroundColor: "#0D1117",
        position: "relative",
      }}
    >
      {/* Subtle gold particles effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, rgba(255, 215, 0, 0.1), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255, 215, 0, 0.15), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255, 215, 0, 0.08), transparent)
          `,
          backgroundSize: "200px 100px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(24, 28, 32, 0.9)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 215, 0, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 48px rgba(255, 215, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)";
                e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(0, 0, 0, 0.3)";
                e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.1)";
              }}
            >
              <div className="mb-6">
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: "300",
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full mr-4 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFD700 0%, #FFB400 100%)",
                  }}
                >
                  <span
                    className="text-black font-bold text-lg"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#FFD700",
                      fontWeight: "600",
                    }}
                  >
                    {testimonial.author}
                  </h4>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: "300",
                    }}
                  >
                    {testimonial.role}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
