import { render } from "@testing-library/react";
import { AdminLayout } from "./AdminLayout";
jest.mock("./SideMenu", () => ({
  SideMenu: () => <div>side-menu</div>,
}));
test("AdminLayout should work", () => {
  const { getByText } = render(<AdminLayout>children</AdminLayout>);
  expect(getByText("children")).toBeInTheDocument();
});
