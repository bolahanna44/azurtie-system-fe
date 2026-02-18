import {
  Zap,
  Globe,
  BarChart3,
  RefreshCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Product Sync",
    description:
      "Automatically import and sync product listings across AliExpress, Temu, Alibaba, and Amazon in real time.",
  },
  {
    icon: Globe,
    title: "Multi-Country Fulfillment",
    description:
      "Route orders to the optimal supplier based on destination country, shipping cost, and delivery speed.",
  },
  {
    icon: BarChart3,
    title: "Profit Analytics",
    description:
      "Track margins, revenue, and performance across every marketplace and region from a single dashboard.",
  },
  {
    icon: RefreshCcw,
    title: "Auto-Repricing",
    description:
      "Dynamic pricing engine adjusts your listings in real time to stay competitive while protecting margins.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Engine",
    description:
      "Built-in customs, tax, and trade regulation checks for every cross-border transaction automatically.",
  },
  {
    icon: Truck,
    title: "Smart Logistics",
    description:
      "Integrated shipping comparison, tracking, and automated customer notifications across all carriers.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl text-balance">
            Everything You Need to Automate Global Trade
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From product sourcing to last-mile delivery, Azurite handles every
            step of cross-border dropshipping.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
