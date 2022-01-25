import { render, fireEvent } from "@testing-library/react";
import { VerificationTable } from "./VerificationTable";
import React from "react";

test("VerificationTable should render when empty", () => {
  const { getByText } = render(<VerificationTable />);
  expect(getByText("Provider")).toBeInTheDocument();
});

test("VerificationTable should render spin", () => {
  const { getByText, getAllByRole } = render(
    <VerificationTable
      data={[
        {
          id: "my-id",
          type: "my-type",
          createdDate: "my-created-date",
          status: "my-status",
          request: "my-request",
          result: "my-response",
          provider: "my-provider",
        },
      ]}
    />
  );
  expect(getByText("my-provider")).toBeInTheDocument();
  fireEvent.click(getAllByRole("button")[0]);
  expect(getByText("my-request")).toBeInTheDocument();
  expect(getByText("my-response")).toBeInTheDocument();
});
