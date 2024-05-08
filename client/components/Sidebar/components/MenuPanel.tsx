import {
  Accordion,
  AccordionDetails,
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { isEmpty, snakeCase } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../../Icon/Icon";
import { AccordionNavSummary, Container } from "./MenuPanel.styles";
import {
  GroupType,
  LinkType,
  MenuContent,
  NavSection,
  ThumbnailSection,
  isAccordionGroup,
  isLinkItem,
  isListGroup,
  isNavSection,
  isThumbnailSection,
} from "./MenuPanel.types";

const Thumbnail = ({ src, label, path }: ThumbnailSection) => (
  <Grid container justifyContent="center" component={ListItem}>
    <Grid item component={Link} href={path} my={3}>
      <Avatar sx={{ height: 200, width: 200, mb: 2 }}>
        <Image src={src} layout="fill" alt="brandlogo" />
      </Avatar>
      <Typography component="h2" variant="subtitle1" textAlign="center">
        {label}
      </Typography>
      <Divider />
    </Grid>
  </Grid>
);

const NavigationSection = ({
  children,
  pathname,
}: NavSection & { pathname: string }) => (
  <Grid component={ListItem} item>
    <List>
      {children.map((child) => {
        if (isLinkItem(child))
          return (
            <LinkItem
              key={snakeCase(child.label)}
              {...child}
              pathname={pathname}
            />
          );
        if (isListGroup(child))
          return (
            <ListGroup
              key={snakeCase(child.label)}
              {...child}
              pathname={pathname}
            />
          );
        if (isAccordionGroup(child))
          return (
            <AccordionGroup
              key={snakeCase(child.label)}
              {...child}
              pathname={pathname}
            />
          );
      })}
    </List>
  </Grid>
);

const LinkItem = ({
  label,
  path,
  pathname,
}: LinkType & { pathname: string }) => (
  <ListItem>
    <MuiLink
      component={Link}
      href={path}
      color={pathname === path ? "primary" : "text"}
      underline="none"
    >
      {label}
    </MuiLink>
  </ListItem>
);

const ListGroup = ({
  children,
  label,
  pathname,
}: GroupType & { pathname: string }) => (
  <ListItem component={Grid} container direction="column">
    <Typography
      textTransform="capitalize"
      id={snakeCase(label)}
      fontWeight={300}
    >
      {label}
    </Typography>
    <List aria-labelledby={snakeCase(label)}>
      {children.map((child) => {
        if (isLinkItem(child))
          return (
            <LinkItem
              key={snakeCase(child.label)}
              {...child}
              pathname={pathname}
            />
          );
        if (isListGroup(child))
          return (
            <ListGroup
              key={snakeCase(child.label)}
              {...child}
              pathname={pathname}
            />
          );
        if (isAccordionGroup(child))
          return (
            <AccordionGroup
              key={snakeCase(child.label)}
              {...child}
              pathname={pathname}
            />
          );
      })}
    </List>
  </ListItem>
);

const AccordionGroup = ({
  children,
  label,
  pathname,
}: GroupType & { pathname: string }) => (
  <ListItem>
    <Accordion elevation={0} sx={{ width: "100%" }}>
      <AccordionNavSummary
        expandIcon={
          <Icon
            color="text"
            filled={true}
            grade={0}
            opticalSize={20}
            weight={200}
          >
            expand_more
          </Icon>
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {label}
      </AccordionNavSummary>
      <AccordionDetails>
        <List>
          {children.map((child) => {
            if (isLinkItem(child))
              return (
                <LinkItem
                  key={snakeCase(child.label)}
                  {...child}
                  pathname={pathname}
                />
              );
            if (isListGroup(child))
              return (
                <ListGroup
                  key={snakeCase(child.label)}
                  {...child}
                  pathname={pathname}
                />
              );
            if (isAccordionGroup(child))
              return (
                <AccordionGroup
                  key={snakeCase(child.label)}
                  {...child}
                  pathname={pathname}
                />
              );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  </ListItem>
);

export const MenuPanel = ({
  menu,
  pathname,
}: {
  menu: MenuContent;
  pathname: string;
}) => {
  if (isEmpty(menu)) {
    return <>loading...</>;
  }

  return (
    <Container>
      <Grid container justifyContent="stretch" columns={1} component={List}>
        {menu.map((section) => {
          if (isThumbnailSection(section))
            return <Thumbnail {...section} key={section.src} />;
          if (isNavSection(section))
            return (
              <NavigationSection
                {...section}
                key={crypto.randomUUID()}
                pathname={pathname}
              />
            );
        })}
      </Grid>
    </Container>
  );
};
