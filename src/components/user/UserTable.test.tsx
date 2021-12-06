import { render, waitFor } from "@testing-library/react";
import { UserTable } from "./UserTable";
jest.mock("@mui/x-data-grid", () => ({
  DataGrid: ({
    rows,
  }: {
    rows: {
      id?: string;
      marketplaceName?: string;
    }[];
  }) => (
    <div>
      my-grid-{rows[0]?.id}-{rows[0]?.marketplaceName}
    </div>
  ),
}));
test("UserTable should work", async () => {
  const onItemClick = jest.fn();
  const { getByText } = render(
    <div>
      <UserTable
        onItemClick={onItemClick}
        type="my-type"
        getUsers={async () => [
          {
            id: "my-id",
            marketplaceName: "string",
            userId: "string",
            firstName: "string",
            lastName: "string",
            phone: "string",
            username: "string",
            email: "string",
            organizationName: "string",
            country: "string",
            role: "string",
            userJoinedDate: "string",
            status: "my-status",
          },
        ]}
      />
    </div>
  );
  await waitFor(() =>
    expect(getByText("my-grid-my-id-string")).toBeInTheDocument()
  );
});
