import Link from "next/link";
import { ArrowLeft, Wind } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-navy-deep px-6">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[32rem] w-[32rem] rounded-full bg-sage/25 blur-[110px]" />
        <div className="absolute h-64 w-64 rounded-full bg-gold/20 blur-[90px]" />
      </div>

      <div className="relative text-center max-w-lg">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <Wind size={15} /> Lost Air Pocket
        </span>

        <h1 className="font-display text-8xl sm:text-9xl text-cream mt-6 leading-none">
          404
        </h1>

        <h2 className="font-display text-2xl sm:text-3xl text-cream mt-4">
          This page didn&rsquo;t make it into the{" "}
          <span className="italic text-sage-light">breathable</span> zone.
        </h2>

        <p className="mt-4 text-cream/60 leading-relaxed">
          The page you&rsquo;re looking for may have moved or no longer
          exists. Let&rsquo;s get you back to cleaner air.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-coral text-cream px-7 py-3.5 font-semibold text-[15px] hover:bg-gold hover:text-navy-deep transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
