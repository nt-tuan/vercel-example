import {
  AppBar,
  Box,
  Breadcrumbs,
  BreadcrumbsProps,
  Toolbar,
  Typography,
} from "@mui/material";
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

AdminLayout.Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="h4" component="h2">
      {children}
    </Typography>
  );
};

AdminLayout.Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <Box sx={{ marginTop: "8px", marginBottom: "24px" }}>
      <Breadcrumbs {...props} />
    </Box>
  );
};

AdminLayout.Content = ({ children }: { children: React.ReactNode }) => {
  return <Box sx={{ marginTop: "24px" }}>{children}</Box>;
};
