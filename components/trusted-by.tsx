const testimonials = [
  {
    quote:
      "Azurite reduced our order processing time by 85%. We went from managing three VAs to fully automated operations.",
    author: "Sarah Chen",
    role: "CEO, GlobeTrade Co.",
    stat: "85% faster",
    statLabel: "order processing",
  },
  {
    quote:
      "We scaled from 2 countries to 18 in just three months using Azurite's multi-market automation. The compliance engine alone saved us thousands.",
    author: "Marcus Weber",
    role: "Founder, EuroShip Direct",
    stat: "9x expansion",
    statLabel: "in 3 months",
  },
  {
    quote:
      "The repricing engine and profit analytics give us a competitive edge we never had before. Our margins improved by 22% in the first quarter.",
    author: "Aisha Patel",
    role: "COO, SwiftDrop Global",
    stat: "+22% margins",
    statLabel: "first quarter",
  },
];

export function TrustedBy() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Trusted by Sellers Worldwide
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl text-balance">
            Real Results from Real Businesses
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col rounded-lg border border-border bg-card p-8"
            >
              <div className="mb-6">
                <p className="text-2xl font-bold text-primary">
                  {testimonial.stat}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.statLabel}
                </p>
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-card-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
