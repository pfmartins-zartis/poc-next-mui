"use client";

import { styled } from "@/client/theme/styled";
import {
  AppBarProps,
  InputBase,
  AppBar as MuiAppBar,
  alpha,
} from "@mui/material";
import { FC } from "react";

export const AppBar: FC<AppBarProps> = styled(MuiAppBar, {})`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  background-color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const Search = styled("div")`
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  flex-grow: 1;
  background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.15)};
  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.25)};
  }
  margin-left: 0;
  max-width: 800px;
  margin: auto;
  [${({ theme }) => theme.breakpoints.up("sm")}] {
    margin-left: ${({ theme }) => theme.spacing(1)};
    width: auto;
  }
`;

export const SearchIconWrapper = styled("div")`
  padding: ${({ theme }) => theme.spacing(0, 2)};
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit;
  width: 100%;
  & .MuiInputBase-input {
    padding: theme.spacing(1, 1, 1, 0);
    // vertical padding + font size from searchIcon
    padding-left: calc(1em + ${({ theme }) => theme.spacing(4)});
    transition: ${({ theme }) => theme.transitions.create("width")};
    ${({ theme }) => theme.breakpoints.up("sm")} {
      width: 12ch;
      &:focus {
        width: 20ch;
      }
    }
  }
`;

export const LogoWrapper = styled("svg")`
  height: 30px;
  margin-left: ${({ theme }) => theme.spacing(4)};
`;
export const LogoText = styled("path")`
  fill: ${({ theme }) => theme.palette.common.white};
`;
export const LogoMarkBg = styled("path")`
  fill: ${({ theme }) => theme.palette.primary.main};
`;
export const LogoMark = styled("path")`
  fill: ${({ theme }) => theme.palette.common.white};
`;
