"use client";

import { theme } from "@/client/theme/theme";
import { ITheme } from "@/client/theme/theme.types";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <MuiThemeProvider<ITheme> theme={theme as ITheme}>
    {children}
  </MuiThemeProvider>
);
