import {
  AppBar,
  Breadcrumbs,
  BreadcrumbsProps,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

interface Props {
  children: React.ReactNode;
}
const Content = styled("div")({
  marginTop: "24px",
});
const LayoutContainer = styled("div")({
  backgroundColor: "#FAFAFA",
});
export const AdminLayout = (props: Props) => {
  return (
    <LayoutContainer>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Distichain
          </Typography>
        </Toolbar>
      </AppBar>
      <Content>{props.children}</Content>
    </LayoutContainer>
  );
};

AdminLayout.Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="h5" component="h2">
      {children}
    </Typography>
  );
};

const BreadcrumbsContainer = styled("div")({
  marginTop: 8,
  marginBottom: 24,
});
AdminLayout.Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <BreadcrumbsContainer>
      <Breadcrumbs {...props} />
    </BreadcrumbsContainer>
  );
};
