import { MapPin } from "lucide-react";

const regions = [
  {
    name: "North America",
    countries: ["United States", "Canada", "Mexico"],
    stats: "800K+ orders/month",
  },
  {
    name: "Europe",
    countries: ["UK", "Germany", "France", "Spain", "Italy", "Netherlands"],
    stats: "600K+ orders/month",
  },
  {
    name: "Asia Pacific",
    countries: ["Japan", "Australia", "South Korea", "Singapore"],
    stats: "450K+ orders/month",
  },
  {
    name: "Middle East & Africa",
    countries: ["UAE", "Saudi Arabia", "South Africa", "Nigeria"],
    stats: "200K+ orders/month",
  },
  {
    name: "South America",
    countries: ["Brazil", "Argentina", "Chile", "Colombia"],
    stats: "150K+ orders/month",
  },
  {
    name: "Southeast Asia",
    countries: ["Thailand", "Vietnam", "Philippines", "Indonesia"],
    stats: "300K+ orders/month",
  },
];

export function GlobalReach() {
  return (
    <section id="global" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Global Reach
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl text-balance">
            Trade Across Every Major Market
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Azurite powers automated commerce in over 50 countries, handling
            local regulations, currencies, and logistics for each region.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <div
              key={region.name}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-card-foreground">
                  {region.name}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {region.countries.map((country) => (
                  <span
                    key={country}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {country}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-mono text-sm text-primary">
                {region.stats}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
