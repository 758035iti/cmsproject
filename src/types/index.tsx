/* eslint-disable @typescript-eslint/no-explicit-any */
export type imagearrType1 = {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
};
// Super-super-submenu (lowest level, only name & path)
export type SuperSuperSubmenuItem = {
  name: string;
  path: string;
};

// Super-submenu (can have super-super-submenu inside it)
export type SuperSubmenuItem = {
  name: string;
  path: string;
  superSuperSubmenu?: SuperSuperSubmenuItem[]; // ✅ Correct here
};

// Submenu (can have super-submenu inside it)
export type SubmenuItem = {
  name: string;
  path: string;
  superSubmenu?: SuperSubmenuItem[]; // ✅ Correct here
};

// Main Navbar
export type navArrType = {
  id: number;
  title: string;
  url: string;
  submenu?: SubmenuItem[]; // ✅ Correct here
};

export type breadcrumbArrType = {
  id: number;
  img: {
    src: string;
  };
  title: string;
  content: string;
};

export type cardarrType1 = {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title?: string;
  content?: string;
  icon1: any;
  msg: string;
  icon2: any;
  msg1: string;
};
export type trustAreasTypes = {
  id: number;
  title: string;
};
export type trustAreasTypes1 = {
  id: number;
  title: string;
};
export type programsType = {
  id: number;
  title: string;
};
