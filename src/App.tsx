import React from "react";
import Container from "@mui/material/Container";
import { AdminLayout } from "layouts/AdminLayout";
import TraderListPage from "./pages/TraderList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TraderPage from "pages/Trader";

export default function App() {
  return (
    <AdminLayout>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Switch>
            <Route path="/trader/:id">
              <TraderPage />
            </Route>
            <Route path={["/", "/trader"]}>
              <TraderListPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </AdminLayout>
  );
}
