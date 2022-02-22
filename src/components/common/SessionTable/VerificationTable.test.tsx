import { render, fireEvent } from "@testing-library/react";
import { VerificationTable } from "./VerificationTable";
import React from "react";
import { useSessionTableContext } from "./SessionTable";

jest.mock("./SessionTable");

beforeEach(() => {
  (useSessionTableContext as jest.Mock).mockReturnValue({ type: "my-type" });
});

test("VerificationTable should render when empty", () => {
  const { getByText } = render(<VerificationTable />);
  expect(getByText("Provider")).toBeInTheDocument();
});

test("VerificationTable should render requests and responses", () => {
  const { getByText, getAllByRole, getAllByTestId } = render(
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
  fireEvent.click(getAllByTestId("ExpandMoreIcon")[0]);
  expect(getByText("my-response")).toBeInTheDocument();
});
