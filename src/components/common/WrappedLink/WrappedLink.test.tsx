import { render } from "@testing-library/react";
import { WrappedLink } from "./WrappedLink";

test("WrappedLink should work", () => {
  const { getByRole } = render(<WrappedLink href="/my-href" />);
  expect(getByRole("link")).toHaveAttribute("href", "/my-href");
});
