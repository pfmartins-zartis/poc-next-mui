export type MenuItem = ThumbnailSection | NavSection | LinkType | GroupType;

export type ThumbnailSection = {
  itemType: "section";
  sectionType: "thumbnail";
  src: string;
  label: string;
  path: string;
};

export type NavSection = {
  itemType: "section";
  sectionType: "nav";
  children: (LinkType | GroupType)[];
};

export type LinkType = {
  itemType: "link";
  label: string;
  path: string;
};

export type AccordionGroupType = GroupType & {
  groupType: "accordion";
};

export type ListGroupType = GroupType & {
  groupType: "list";
};

export type GroupType = {
  label: string;
  itemType: "group";
  groupType: "accordion" | "list";
  children: (LinkType | GroupType)[];
};

export type MenuContent = (ThumbnailSection | NavSection)[];

export const isGroupItem = (menuItem: MenuItem): menuItem is GroupType =>
  menuItem.itemType === "group";
export const isAccordionGroup = (
  menuItem: MenuItem,
): menuItem is AccordionGroupType =>
  isGroupItem(menuItem) && menuItem.groupType === "accordion";
export const isListGroup = (menuItem: MenuItem): menuItem is ListGroupType =>
  isGroupItem(menuItem) && menuItem.groupType === "list";
export const isLinkItem = (menuItem: MenuItem): menuItem is LinkType =>
  menuItem.itemType === "link";
export const isSection = (
  menuItem: MenuItem,
): menuItem is NavSection | ThumbnailSection => menuItem.itemType === "section";
export const isNavSection = (menuItem: MenuItem): menuItem is NavSection =>
  isSection(menuItem) && menuItem.sectionType === "nav";
export const isThumbnailSection = (
  menuItem: MenuItem,
): menuItem is ThumbnailSection =>
  isSection(menuItem) && menuItem.sectionType === "thumbnail";
