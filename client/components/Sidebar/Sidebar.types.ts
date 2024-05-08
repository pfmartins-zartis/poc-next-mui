import { ITheme } from "@/client/theme/theme.types";
import { DrawerProps } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export interface DrawerStyledProps extends DrawerProps {
  theme: ITheme;
}

export interface SidebarProps extends DrawerStyledProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}
