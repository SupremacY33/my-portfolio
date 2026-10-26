import type { ReactNode } from "react";
import type { ServiceIcon, SocialPlatform } from "@/types/portfolio";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function ServiceIconSvg({ name }: { name: ServiceIcon }) {
  switch (name) {
    case "web":
      return (
        <Svg>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18M8 21h8M12 18v3" />
        </Svg>
      );
    case "api":
      return (
        <Svg>
          <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />
        </Svg>
      );
    case "database":
      return (
        <Svg>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </Svg>
      );
    case "automation":
      return (
        <Svg>
          <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4M20 12a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4" />
        </Svg>
      );
  }
}

export function SocialIconSvg({ platform }: { platform: SocialPlatform }) {
  switch (platform) {
    case "github":
      return (
        <Svg>
          <path d="M9 19c-4 1.2-4-2-6-2.5M15 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 0 0-1.2-3.1 4.2 4.2 0 0 0-.1-3.1s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C7.000 2.500 6 2.800 6 2.800a4.200 4.200 0 0 0-.1 3.100A4.500 4.500 0 0 0 4.700 9c0 4.500 2.700 5.500 5.300 5.800a2.800 2.800 0 0 0-.8 2.200V21" />
        </Svg>
      );
    case "linkedin":
      return (
        <Svg>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        </Svg>
      );
    case "email":
      return (
        <Svg>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </Svg>
      );
    default:
      return null;
  }
}
