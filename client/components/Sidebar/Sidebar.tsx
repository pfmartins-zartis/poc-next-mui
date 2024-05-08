"use client";
import { Icon } from "@/client/components/Icon/Icon";
import {
  Drawer,
  DrawerContainer,
  GridStyled,
  MainMenuTab,
  MenuItemTab,
  TabPanelWrapper,
  ToggleSidebar,
} from "@/client/components/Sidebar/Sidebar.styles";
import { Grid, Paper } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import { MainMenu } from "./constants";

export const Sidebar: FC = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const toggleOpen = () => setOpen(!open);
  const handleMenuSelected = (event: SyntheticEvent, selected: number) => {
    console.log(event, selected);
    setSelectedMenu(selected);
  };

  return (
    <DrawerContainer>
      <ToggleSidebar onClick={toggleOpen} color="primary" open={open}>
        <Icon
          color="primary"
          filled={true}
          grade={0}
          opticalSize={20}
          weight={700}
        >
          {open ? "chevron_left" : "chevron_right"}
        </Icon>
      </ToggleSidebar>
      <Drawer open={open} variant="permanent" onClose={() => setOpen(false)}>
        <GridStyled container height="100%">
          <Grid
            component={Paper}
            item
            xs={3}
            height={"100%"}
            variant="outlined"
            square
          >
            <MainMenuTab
              orientation="vertical"
              value={selectedMenu}
              onChange={handleMenuSelected}
            >
              {MainMenu.map(({ label, icon }, index) => (
                <MenuItemTab
                  label={label}
                  icon={
                    <Icon
                      color={index === selectedMenu ? "primary" : "text"}
                      filled={true}
                      grade={0}
                      opticalSize={20}
                      weight={700}
                    >
                      {icon}
                    </Icon>
                  }
                  key={`vertical-tab-${index}`}
                  id={`vertical-tab-${index}`}
                  aria-controls={`vertical-tabpanel-${index}`}
                />
              ))}
            </MainMenuTab>
          </Grid>
          <TabPanelWrapper item xs={9}>
            {MainMenu.map(({ panel }, index) => (
              <TabPanel value={selectedMenu} index={index} key={index}>
                {panel}
              </TabPanel>
            ))}
          </TabPanelWrapper>
        </GridStyled>
      </Drawer>
    </DrawerContainer>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
