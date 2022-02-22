import {
  AppBar,
  Box,
  Breadcrumbs,
  BreadcrumbsProps,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled, useTheme } from "@mui/material/styles";
import { SideMenu } from "./SideMenu";
import useMediaQuery from "@mui/material/useMediaQuery";
const drawerWidth = 240;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

interface Props {
  children: React.ReactNode;
}

export const AdminLayout = (props: Props) => {
  const [open, setOpen] = React.useState<boolean | null>(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const showMenu = React.useMemo(() => {
    if (open == null) {
      return matches;
    }
    return open;
  }, [matches, open]);
  const toggleDrawer = () => {
    setOpen((op) => !op);
  };
  return (
    <Box
      sx={{ display: "flex", backgroundColor: "#fafafa", minHeight: "100%" }}
    >
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Distichain
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={showMenu}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <SideMenu />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (currentTheme) =>
            currentTheme.palette.mode === "light"
              ? currentTheme.palette.grey[100]
              : currentTheme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            padding: {
              xs: "24px 8px",
              lg: "24px 32px",
            },
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

// eslint-disable-next-line react/display-name
AdminLayout.Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography component="div" variant="h4">
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
