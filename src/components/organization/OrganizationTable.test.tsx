import { render, fireEvent } from "@testing-library/react";
import { OrganizationTable } from "./OrganizationTable";
import * as mockedNextRouter from "next/router";
test("OrganizationTable should work without data", () => {
  const { getByText } = render(<OrganizationTable />);
  expect(getByText("Date Joined")).toBeInTheDocument();
});

test("OrganizationTable should work", () => {
  const historyPush = jest.fn();
  jest.spyOn(mockedNextRouter, "useRouter").mockReturnValue({
    push: historyPush,
  } as never);
  const { getByText } = render(
    <OrganizationTable
      organizations={[
        {
          id: "1",
          organizationId: "my-id",
          organizationName: "my-name",
          marketplaceName: "mp-name",
          companyName: "my-com",
          organizationJoinedDate: "",
          status: "my-status",
        },
      ]}
    />
  );
  expect(getByText("mp-name")).toBeInTheDocument();
  fireEvent.click(getByText("mp-name"));
  expect(historyPush).toBeCalled();
});
