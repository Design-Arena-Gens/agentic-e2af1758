import "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "angular-widget-root": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export {};
