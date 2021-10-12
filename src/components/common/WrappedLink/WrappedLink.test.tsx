import { WrappedLink } from "./WrappedLink";
import { render } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
test("WrappedLink should render", () => {
  const { getByText } = render(
    <Router history={createMemoryHistory()}>
      <WrappedLink href="/my-link">My Text</WrappedLink>
    </Router>
  );
  const element = getByText("My Text");
  expect(element.getAttribute("href")).toBe("/my-link");
});
