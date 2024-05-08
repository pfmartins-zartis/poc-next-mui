"use client";

import { DrawerStyledProps } from "@/client/components/Sidebar/Sidebar.types";
import {
  primarySideBarWidth,
  secondarySidebarWidth,
} from "@/client/components/Sidebar/constants";
import { shouldNotForwardProps } from "@/client/theme/helpers/shouldNotForwarProps/shouldNotForwarProps";
import { styled } from "@/client/theme/styled";
import { ITheme } from "@/client/theme/theme.types";
import { SerializedStyles } from "@emotion/react";
import {
  Grid,
  IconButton,
  Drawer as MuiDrawer,
  Tab,
  Tabs,
  css,
  drawerClasses,
} from "@mui/material";

const openedMixin = (theme: ITheme): SerializedStyles => css`
  width: ${primarySideBarWidth + secondarySidebarWidth}px;
  transition: ${theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  })};

  overflow-x: hidden;
`;

const closedMixin = (theme: ITheme): SerializedStyles => css`
  transition: ${theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })};
  overflow-x: hidden;
  width: 0;
`;

const openClosetransitionMixin = ({
  theme,
  open,
}: DrawerStyledProps): SerializedStyles =>
  open ? openedMixin(theme) : closedMixin(theme);

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: shouldNotForwardProps(["open", "logo", "config"]),
})`
  flex-shrink: 0;
  height: calc(100vh - ${({ theme }) => theme.spacing(8)});
  white-space: nowrap;
  box-sizing: border-box;
  ${openClosetransitionMixin}
  & .${drawerClasses.paper} {
    ${openClosetransitionMixin}
    height: calc(100vh - ${({ theme }) => theme.spacing(8)});
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ToggleSidebar = styled(IconButton, {
  shouldForwardProp: shouldNotForwardProps(["open"]),
})<{ open: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing(4)};
  right: 0;
  transform: translateX(55%);
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  background-color: ${({ theme }) => theme.palette.common.white};
  border: ${({ theme }) => theme.palette.grey[300]} 1px solid;
  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const DrawerContainer = styled("div")`
  position: relative;
`;

export const TabPanelStyled = styled("div")`
  overflow-y: auto;
  height: 100%;
`;

export const GridStyled = styled(Grid)`
  height: 100%;
  overflow: hidden;
`;

export const TabPanelWrapper = styled(Grid)`
  height: 100%;
  overflow: auto;
`;

export const MainMenuTab = styled(Tabs)`
  background-color: ${({ theme }) => theme.palette.grey[100]};
`;

export const MenuItemTab = styled(Tab)`
  ${({ theme }) => theme.typography.caption}
`;
