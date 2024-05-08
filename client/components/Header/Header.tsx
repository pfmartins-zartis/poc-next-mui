"use client";
import {
  AppBar,
  LogoMark,
  LogoMarkBg,
  LogoText,
  LogoWrapper,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/client/components/Header/Header.styles";

import {
  Avatar,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useMemo, useState } from "react";
import { Icon } from "../Icon/Icon";

export const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        <IconButton onClick={handleClick}>
          <Icon
            color="white"
            grade={200}
            opticalSize={20}
            filled={false}
            weight={700}
          >
            apps
          </Icon>
        </IconButton>
        <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
          <MenuList>
            <ListItem>
              <Typography color={"grey.300"}>CREATIVE ASSESSMENT</Typography>
            </ListItem>
            <MenuItem>
              <Icon
                weight={300}
                opticalSize={40}
                grade={-25}
                fontSize="medium"
                color="primary"
              >
                fact_check
              </Icon>
              Ace Live
            </MenuItem>
            <MenuItem>
              <Icon
                weight={300}
                opticalSize={40}
                grade={-25}
                fontSize="medium"
                color="primary"
              >
                globe
              </Icon>
              Ace Viva
            </MenuItem>
            <MenuItem>
              <Icon
                weight={300}
                opticalSize={40}
                grade={-25}
                fontSize="medium"
                color="primary"
              >
                history
              </Icon>
              Ace Short
            </MenuItem>
            <ListItem>
              <Typography color={"grey.300"}>MEASUREMENT</Typography>
            </ListItem>
            <MenuItem>
              <Icon
                weight={300}
                opticalSize={40}
                grade={-25}
                fontSize="medium"
                color="primary"
              >
                area_chart
              </Icon>
              Media Measurement
            </MenuItem>
            <MenuItem>
              <Icon
                weight={300}
                opticalSize={40}
                grade={-25}
                fontSize="medium"
                color="primary"
              >
                tv
              </Icon>
              Attention Analytics
            </MenuItem>
            <MenuItem>
              <Icon
                weight={300}
                opticalSize={40}
                grade={-25}
                fontSize="medium"
                color="primary"
              >
                deployed_code
              </Icon>
              Unified Measurement
            </MenuItem>
            <ListItem>
              <Typography color={"grey.300"}>
                ATTRIBUTION & PERFORMANCE
              </Typography>
            </ListItem>
            <MenuItem>
              <Icon
                weight={300}
                opticalSize={40}
                grade={-25}
                fontSize="medium"
                color="primary"
              >
                shopping_cart
              </Icon>
              TV Conversions
            </MenuItem>
          </MenuList>
        </Menu>
        <Logo />
        <Search>
          <SearchIconWrapper>
            <Icon color="common.white">search</Icon>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <div>
          <IconButton>
            <Icon color="white" weight={100} fontSize="large">
              star
            </Icon>
          </IconButton>
          <IconButton>
            <Icon color="white" weight={100} fontSize="medium">
              notifications
            </Icon>
          </IconButton>
          <IconButton>
            <Icon color="white" weight={100} fontSize="medium">
              info
            </Icon>
          </IconButton>
          <IconButton>
            <Avatar />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const Logo = () => (
  <LogoWrapper
    className="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 77 21"
  >
    <LogoText
      className="logo__text"
      d="M1 2.9c-.4-.3-.5-.7-.5-1.1 0-.4.1-.8.5-1.1.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.4.3.5.7.5 1.1 0 .4-.2.8-.5 1.1s-.7.5-1.1.5c-.4 0-.8-.1-1.1-.5zm2.4 14.6h-2.6v-12.1h2.6v12.1zm7.4-13.9c-.8 0-1.4.2-1.9.5s-.8.8-.8 1.5c0 .6.3 1.1.8 1.5.5.3 1.6.7 3.2 1.1 1.6.4 2.9.9 3.7 1.7.8.7 1.2 1.8 1.2 3.2s-.5 2.5-1.6 3.4c-1 .9-2.4 1.3-4.1 1.3-2.5 0-4.7-.9-6.6-2.6l1.7-2c1.6 1.4 3.3 2.1 5 2.1.9 0 1.6-.2 2.1-.6.5-.4.8-.9.8-1.5s-.2-1.1-.7-1.4c-.6-.5-1.4-.8-2.6-1.1-1.1-.2-2-.5-2.6-.7-.6-.3-1.2-.6-1.7-1-.9-.7-1.4-1.8-1.4-3.2 0-1.5.5-2.6 1.6-3.4 1.1-.8 2.4-1.2 4-1.2 1 0 2 .2 3 .5s1.9.8 2.6 1.4l-1.4 2c-.5-.4-1.1-.8-1.9-1-.8-.3-1.6-.5-2.4-.5zm14.2 1.6c1.6 0 3 .6 4.2 1.7 1.2 1.1 1.7 2.6 1.7 4.5s-.6 3.4-1.7 4.6c-1.1 1.2-2.5 1.8-4 1.8s-2.9-.7-4.1-2v5.3h-2.6v-15.7h2.6v2.1c1-1.6 2.3-2.3 3.9-2.3zm-3.9 6.2c0 1.2.3 2.1 1 2.8.7.7 1.5 1.1 2.6 1.1 1 0 1.9-.4 2.6-1.1.7-.7 1.1-1.7 1.1-2.8 0-1.2-.4-2.1-1.1-2.9-.7-.8-1.6-1.2-2.6-1.2s-1.9.4-2.6 1.2c-.7.8-1 1.8-1 2.9zm27.2-4v6.1c0 .6.2 1 .5 1.4.3.3.7.5 1.3.5.5 0 1.1-.3 1.6-.8l1 1.8c-.9.8-1.9 1.2-3 1.2s-2-.4-2.8-1.1c-.8-.8-1.2-1.8-1.2-3v-11.9h2.6v3.8h3.2v2h-3.2zm6.5 9.8c-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.2c.3-.3.7-.5 1.2-.5s.9.2 1.2.5c.3.3.5.7.5 1.2s-.2.9-.5 1.2c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5zm19.3-11.8l-3.7 9.2-3.7-9.2h-5v-3.8h-2.6v11.9c0 1.3.4 2.3 1.2 3 .8.8 1.7 1.1 2.8 1.1 1.1 0 2.1-.4 3-1.2l-1-1.8c-.5.5-1 .8-1.6.8-.5 0-1-.2-1.3-.5-.3-.3-.5-.8-.5-1.4v-6.1h3.2l4 10.1h2.9l4.9-12.1h-2.6z"
    />
    <LogoMarkBg
      className="logo__mark-bg"
      d="M38.3 5.3c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2z"
    />
    <LogoMark
      className="logo__mark"
      d="M38.3 5.3c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm-.8 9.4l-1.1.7c-.3.2-.6 0-.6-.4v-7c0-.3.3-.6.6-.4.1 0 .5.3 1.1.7v6.4zm2.4-1.5c-.6.4-1.2.7-1.7 1.1v-5.6c.5.3 1.2.7 1.7 1.1v3.4zm2.2-1.3l-1.5.9v-2.6l1.5.9c.3.2.3.6 0 .8z"
    />
  </LogoWrapper>
);
