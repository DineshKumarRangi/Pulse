export type NavigationTab = "home" | "favorites";

export interface NavigationProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}
