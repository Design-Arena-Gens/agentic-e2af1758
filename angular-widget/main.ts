import "zone.js";
import "reflect-metadata";
import {
  Component,
  NgModule,
  OnInit,
  Pipe,
  PipeTransform
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

type Metric = {
  label: string;
  value: number;
  unit: string;
};

const percent = (value: number) => Math.min(100, Math.max(0, value));

@Pipe({ name: "percentify" })
class PercentifyPipe implements PipeTransform {
  transform(value: number) {
    return `${percent(value)}%`;
  }
}

@Component({
  selector: "angular-widget-root",
  styles: [
    `
      :host {
        display: block;
        color: #e2e8f0;
        font-family: "Inter", system-ui, sans-serif;
        letter-spacing: 0.02em;
      }
      .wrapper {
        display: grid;
        gap: 1rem;
      }
      .score {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 1.25rem;
        background: linear-gradient(135deg, #18233f, #11182d);
        border: 1px solid rgba(138, 168, 255, 0.15);
        box-shadow: 0 18px 40px rgba(8, 12, 24, 0.35);
      }
      .score span.value {
        font-size: 3rem;
        font-weight: 700;
        color: #8aa8ff;
        line-height: 1;
      }
      .timerange {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.4em;
        color: rgba(138, 168, 255, 0.7);
      }
      ul.metrics {
        display: grid;
        gap: 0.75rem;
      }
      li.metric {
        list-style: none;
        background: rgba(60, 123, 250, 0.08);
        border-radius: 1rem;
        padding: 0.9rem;
        display: grid;
        gap: 0.5rem;
      }
      .metric-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.28em;
        color: rgba(226, 232, 240, 0.65);
      }
      .progress {
        position: relative;
        height: 0.5rem;
        border-radius: 999px;
        background: rgba(148, 163, 184, 0.25);
        overflow: hidden;
      }
      .progress > span {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: linear-gradient(90deg, #3c7bfa, #8aa8ff);
        transform-origin: left;
      }
      .delta {
        font-size: 0.75rem;
        color: rgba(148, 163, 184, 0.8);
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
      }
      .delta.positive {
        color: rgba(74, 222, 128, 0.9);
      }
      .delta.negative {
        color: rgba(248, 113, 113, 0.9);
      }
      .signals {
        display: flex;
        gap: 1.5rem;
        font-size: 0.75rem;
        color: rgba(148, 163, 184, 0.8);
        text-transform: uppercase;
        letter-spacing: 0.3em;
      }
      .signals strong {
        display: block;
        font-size: 1rem;
        letter-spacing: normal;
        color: #e2e8f0;
      }
    `
  ],
  template: `
    <div class="wrapper">
      <div class="score">
        <div>
          <p class="timerange">Last sprint</p>
          <span class="value">{{ deliveryScore }}</span>
        </div>
        <ul class="signals">
          <li>
            <span>React velocity</span>
            <strong>{{ reactVelocity | percentify }}</strong>
          </li>
          <li>
            <span>Angular coverage</span>
            <strong>{{ angularCoverage | percentify }}</strong>
          </li>
          <li>
            <span>Regression debt</span>
            <strong>{{ regressionDebt | percentify }}</strong>
          </li>
        </ul>
      </div>
      <ul class="metrics">
        <li class="metric" *ngFor="let metric of metrics">
          <div class="metric-header">
            <span>{{ metric.label }}</span>
            <span>{{ metric.value | percentify }}</span>
          </div>
          <div class="progress">
            <span [style.transform]="'scaleX(' + metric.value / 100 + ')'" />
          </div>
          <span class="delta" [ngClass]="metric.value >= 75 ? 'positive' : metric.value <= 50 ? 'negative' : ''">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                [attr.d]="metric.value >= 75 ? 'M2 8L6 4L10 8' : metric.value <= 50 ? 'M2 4L6 8L10 4' : 'M2 6H10'"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            {{ metric.unit }}
          </span>
        </li>
      </ul>
    </div>
  `
})
class AngularWidgetComponent implements OnInit {
  deliveryScore = 92;
  reactVelocity = 84;
  angularCoverage = 88;
  regressionDebt = 24;
  metrics: Metric[] = [
    { label: "Signal adoption", value: 90, unit: "+12% vs last sprint" },
    { label: "Storybook coverage", value: 86, unit: "+8 suites" },
    { label: "Accessibility pass", value: 95, unit: "WCAG AA" },
    { label: "CI stability", value: 82, unit: "-2 flaky specs" }
  ];

  ngOnInit() {
    const context = (window as typeof window & { angularWidgetData?: Partial<AngularWidgetComponent> }).angularWidgetData;
    if (!context) return;
    Object.assign(this, context);
  }
}

@NgModule({
  declarations: [AngularWidgetComponent, PercentifyPipe],
  imports: [BrowserModule],
  bootstrap: [AngularWidgetComponent]
})
class AngularWidgetModule {}

const bootstrap = () =>
  platformBrowserDynamic()
    .bootstrapModule(AngularWidgetModule)
    .catch((error) => console.error("Angular widget bootstrapping failed", error));

declare global {
  interface Window {
    __angularWidgetBootstrapped?: boolean;
  }
}

if (typeof window !== "undefined" && !window.__angularWidgetBootstrapped) {
  window.__angularWidgetBootstrapped = true;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
}
