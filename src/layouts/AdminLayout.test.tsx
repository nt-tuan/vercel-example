import { render, fireEvent } from "@testing-library/react";
import { AdminLayout } from "./AdminLayout";

jest.mock("./SideMenu", () => ({
  SideMenu: () => <div>side-menu</div>,
}));

test("AdminLayout should work", () => {
  const { getByText, getByTestId } = render(
    <AdminLayout>children</AdminLayout>
  );
  fireEvent.click(getByTestId("ChevronLeftIcon"));
  expect(getByText("children")).toBeInTheDocument();
});
