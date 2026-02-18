import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#platforms" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Status", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  A
                </span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Azurite
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Automating cross-border dropshipping between the world's largest
              marketplaces. Built for scale.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground">{title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {"2026 Azurite. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Twitter"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
