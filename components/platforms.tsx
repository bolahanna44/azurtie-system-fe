import { ArrowLeftRight } from "lucide-react";

const platforms = [
  {
    name: "Amazon",
    abbr: "AWS",
    description: "List, fulfill, and manage orders across Amazon global marketplaces.",
    regions: "US, UK, DE, JP, CA, AU, +12",
    color: "bg-accent/10 text-accent",
  },
  {
    name: "AliExpress",
    abbr: "AE",
    description: "Source millions of products with automated import and supplier scoring.",
    regions: "Global coverage, 200+ countries",
    color: "bg-red-500/10 text-red-400",
  },
  {
    name: "Temu",
    abbr: "TM",
    description: "Tap into Temu's fast-growing marketplace with seamless product integration.",
    regions: "US, UK, EU, AU, NZ, CA",
    color: "bg-orange-500/10 text-orange-400",
  },
  {
    name: "Alibaba",
    abbr: "AB",
    description: "Connect with wholesale suppliers for bulk sourcing and private labeling.",
    regions: "China-based, ships worldwide",
    color: "bg-amber-500/10 text-amber-400",
  },
];

export function Platforms() {
  return (
    <section id="platforms" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Integrations
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl text-balance">
            One Platform. Four Marketplaces.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Azurite connects directly to each marketplace API, enabling
            real-time data flow and automated operations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="relative flex flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-lg font-mono text-sm font-bold ${platform.color}`}
                >
                  {platform.abbr}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {platform.regions}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                {platform.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-primary">
                <ArrowLeftRight size={14} />
                <span>Bi-directional sync enabled</span>
              </div>
            </div>
          ))}
        </div>

        {/* Connection diagram */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            {platforms.map((platform, i) => (
              <div key={platform.name} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary font-mono text-xs font-bold text-secondary-foreground">
                  {platform.abbr}
                </div>
                {i < platforms.length - 1 && (
                  <div className="h-px w-8 bg-primary/50" />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            All marketplaces connected through the Azurite engine
          </p>
        </div>
      </div>
    </section>
  );
}
