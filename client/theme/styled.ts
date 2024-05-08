import { ITheme } from "@/client/theme/theme.types";
import { CreateMUIStyled, styled as muiStiled } from "@mui/material";

export const styled = muiStiled as CreateMUIStyled<ITheme>;
