import { WrappedLink } from "./WrappedLink";
import { render } from "@testing-library/react";
import React from "react";
test("WrappedLink should render", () => {
  const { getByText } = render(
    <WrappedLink href="/my-link">My Text</WrappedLink>
  );
  const element = getByText("My Text");
  expect(element.getAttribute("href")).toBe("/my-link");
});
