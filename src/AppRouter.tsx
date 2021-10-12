import { Backdrop, CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Loading = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

const loadable = (
  loader: () => Promise<{
    default: React.ComponentType<any>;
  }>
) => React.lazy(loader);

const routes = [
  {
    key: "trader",
    path: "/trader/:id",
    component: loadable(() => import("pages/Trader")),
    exact: true,
  },
  {
    key: "traders",
    path: ["/", "/trader"],
    component: loadable(() => import("pages/TraderList")),
    exact: true,
  },
];

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.key}
                component={route.component}
                path={route.path}
              />
            );
          })}
        </Switch>
      </Router>
    </Suspense>
  );
};
