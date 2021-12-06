import { render } from "@testing-library/react";
import { ColorBadge } from "./ColorBadge";

test("ColorBadge should render correctly", () => {
  const { getByText } = render(<ColorBadge status="IN_PROGRESS" />);
  expect(getByText("IN_PROGRESS")).toBeInTheDocument();
});
