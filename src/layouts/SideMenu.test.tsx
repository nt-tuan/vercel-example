import { render } from "@testing-library/react";
import { SideMenu } from "./SideMenu";
jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/user",
  }),
}));
test("SideMenu should work", () => {
  const { getByText } = render(<SideMenu />);
  expect(getByText("Users")).toBeInTheDocument();
  expect(getByText("Organizations")).toBeInTheDocument();
});
