import { AdminLayout } from "./AdminLayout";
import { Link } from "@mui/material";
import { render } from "@testing-library/react";

test("AdminLayout should work", () => {
  const { container } = render(
    <AdminLayout>
      <AdminLayout.Header>My Header</AdminLayout.Header>
      <AdminLayout.Breadcrumbs>
        <Link href="/link1">Link 1</Link>
      </AdminLayout.Breadcrumbs>
      <AdminLayout.Content>Content</AdminLayout.Content>
    </AdminLayout>
  );
  expect(container).toMatchSnapshot();
});
