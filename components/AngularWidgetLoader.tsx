"use client";

import Script from "next/script";

export default function AngularWidgetLoader() {
  return (
    <>
      <Script
        type="module"
        src="/angular-widget.js"
        strategy="afterInteractive"
      />
      <div className="relative mt-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            Workflow Driver (Angular)
          </h3>
          <span className="chip text-xs text-brand-accent/80">
            Live Angular Component
          </span>
        </div>
        <p className="text-sm text-slate-300/80">
          Signals-based Angular widget that scores delivery health in real time.
          Built to slot into micro frontends alongside React surfaces.
        </p>
        <div className="rounded-2xl border border-white/5 bg-[#11172a] p-4">
          <angular-widget-root />
        </div>
      </div>
    </>
  );
}
