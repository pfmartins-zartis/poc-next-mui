"use client";
import { styled } from "@mui/material";

export const Main = styled("main")`
  background-color: ${({ theme }) => theme.palette.grey[100]};
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const LayoutWrapper = styled("div")`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(8)};
  flex-grow: 1;
`;
