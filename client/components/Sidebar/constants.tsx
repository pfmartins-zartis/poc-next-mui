import { HomeMenu } from "./HomeMenu";

export const primarySideBarWidth = 80;
export const secondarySidebarWidth = 280;

export const MainMenu = [
  {
    label: "Home",
    icon: "home",
    panel: <HomeMenu />,
  },
  {
    label: "Global",
    icon: "language",
    panel: "GlobalPanel",
  },
  {
    label: "Studio",
    icon: "monitoring",
    panel: "StudioPanel",
  },
  {
    label: "Insights",
    icon: "incomplete_circle",
  },
];
