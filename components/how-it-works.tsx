const steps = [
  {
    number: "01",
    title: "Connect Your Stores",
    description:
      "Link your Amazon, AliExpress, Temu, and Alibaba accounts in minutes. Azurite securely connects via official APIs.",
  },
  {
    number: "02",
    title: "Configure Automation Rules",
    description:
      "Set your pricing strategy, fulfillment preferences, shipping rules, and target countries. Our engine adapts in real time.",
  },
  {
    number: "03",
    title: "Import & List Products",
    description:
      "Browse millions of products, import with one click, and auto-publish optimized listings across all marketplaces.",
  },
  {
    number: "04",
    title: "Scale Automatically",
    description:
      "Orders are routed, fulfilled, and tracked without manual intervention. Watch your global business grow on autopilot.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl text-balance">
            From Setup to Scale in 4 Steps
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-border lg:block" />
              )}
              <div className="relative">
                <span className="font-mono text-4xl font-bold text-primary/20">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
