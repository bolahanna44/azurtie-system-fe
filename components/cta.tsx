import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-12 md:p-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/5" />

          <div className="relative text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-5xl text-balance">
              Ready to Automate Your
              <br />
              Global Trade?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Join thousands of sellers who have automated their cross-border
              dropshipping with Azurite. Start your free trial today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get Started Free
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-8 py-3.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
