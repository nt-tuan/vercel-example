import {
  AppBar,
  Box,
  Breadcrumbs,
  BreadcrumbsProps,
  Toolbar,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import React from "react";
interface Props {
  children: React.ReactNode;
}

export const AdminLayout = (props: Props) => {
  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100%" }}>
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
      <Box sx={{ marginTop: "24px", marginLeft: "20px", marginRight: "20px" }}>
        {props.children}
      </Box>
    </Box>
  );
};

// eslint-disable-next-line react/display-name
AdminLayout.Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="h4" component="h2">
      {children}
    </Typography>
  );
};

// eslint-disable-next-line react/display-name
AdminLayout.Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <Box sx={{ marginTop: "8px", marginBottom: "24px" }}>
      <Breadcrumbs {...props} />
    </Box>
  );
};

// eslint-disable-next-line react/display-name
AdminLayout.Content = ({ children }: { children: React.ReactNode }) => {
  return <Box sx={{ marginTop: "24px" }}>{children}</Box>;
};

export const getLayout = (page: NextPage) => <AdminLayout>{page}</AdminLayout>;
