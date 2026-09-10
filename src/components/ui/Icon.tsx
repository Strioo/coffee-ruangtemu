import type { SVGProps } from "react";

export type IconName =
  | "arrow-right"
  | "calendar"
  | "chair"
  | "clock"
  | "close"
  | "coffee"
  | "coffee-maker"
  | "desk"
  | "favorite"
  | "forest"
  | "hash"
  | "info"
  | "laptop"
  | "location"
  | "menu"
  | "park"
  | "restaurant"
  | "restaurant-menu"
  | "snowflake"
  | "sparkles"
  | "star"
  | "table"
  | "users"
  | "volume-off"
  | "water-bottle"
  | "wine";

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  name: IconName;
  size?: number;
};

function IconPaths({ name }: { name: IconName }) {
  switch (name) {
    case "arrow-right":
      return <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>;
    case "calendar":
      return <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>;
    case "chair":
      return <><path d="M6 12V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" /><path d="M4 12h16v5H4zM6 17v3M18 17v3" /></>;
    case "clock":
      return <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>;
    case "close":
      return <path d="M6 6l12 12M18 6 6 18" />;
    case "coffee":
      return <><path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" /><path d="M17 10h1a3 3 0 0 1 0 6h-2M7 4v2M11 3v3M15 4v2" /></>;
    case "coffee-maker":
      return <><path d="M6 3h12v18H6zM6 8h12M9 12h6v6H9z" /><circle cx="9" cy="5.5" r=".5" fill="currentColor" stroke="none" /><path d="M14 5.5h2" /></>;
    case "desk":
      return <><path d="M3 10h18v4H3zM5 14v7M19 14v7M9 14v3h6v-3" /></>;
    case "favorite":
      return <path d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8z" />;
    case "forest":
      return <><path d="m12 3-4 6h2l-4 6h5v6M12 3l4 6h-2l4 6h-5v6" /></>;
    case "hash":
      return <><path d="M5 9h14M4 15h14M9 4 7 20M17 4l-2 16" /></>;
    case "info":
      return <><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><circle cx="12" cy="8" r=".7" fill="currentColor" stroke="none" /></>;
    case "laptop":
      return <><rect x="4" y="4" width="16" height="12" rx="1" /><path d="M2 19h20M8 19h8" /></>;
    case "location":
      return <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="2.5" /></>;
    case "menu":
      return <path d="M4 7h16M4 12h16M4 17h16" />;
    case "park":
      return <><path d="m12 3-5 7h3l-5 7h14l-5-7h3zM12 17v4" /></>;
    case "restaurant":
      return <><path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M16 3v18M16 3c3 1 4 4 4 7h-4" /></>;
    case "restaurant-menu":
      return <><path d="M4 6h16M4 12h10M4 18h12" /><path d="m18 15 2 2-2 2" /></>;
    case "snowflake":
      return <><path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11" /><path d="m9 4 3 2 3-2M9 20l3-2 3 2" /></>;
    case "sparkles":
      return <><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></>;
    case "star":
      return <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z" />;
    case "table":
      return <><path d="M3 7h18v5H3zM6 12v9M18 12v9M9 12v4h6v-4" /></>;
    case "users":
      return <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1" /></>;
    case "volume-off":
      return <><path d="M11 5 6 9H3v6h3l5 4zM16 9l5 6M21 9l-5 6" /></>;
    case "water-bottle":
      return <><path d="M9 3h6v4l2 3v10H7V10l2-3zM9 7h6M7 13h10" /></>;
    case "wine":
      return <><path d="M6 3h12l-1 7a5 5 0 0 1-10 0zM12 15v6M8 21h8" /></>;
  }
}

export function Icon({ className, name, size = 24, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={["icon", className].filter(Boolean).join(" ")}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      <IconPaths name={name} />
    </svg>
  );
}
