import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { SessionTable } from "./SessionTable";
import * as mockedDateTime from "helpers/datetime";
import * as mockedVerificationTable from "./VerificationTable";

test("SessionTable should work render spin", () => {
  const { getByRole } = render(<SessionTable type="my-type" />);
  expect(getByRole("progressbar")).toBeInTheDocument();
});

test("SessionTable should render data", () => {
  jest
    .spyOn(mockedDateTime, "formatDateTime")
    .mockReturnValue("formatted_date");
  jest
    .spyOn(mockedVerificationTable, "VerificationTable")
    .mockReturnValue(<div>my-verification-table</div>);
  const { getByText, getByRole } = render(
    <SessionTable
      type="my-type"
      data={[
        {
          id: "my-id",
          sessionNumber: "my-number",
          type: "my-type",
          requestedDate: "2021/01/02",
          status: "my-status",
          historyList: [
            {
              id: "my-history-id",
              type: "my-history-type",
              provider: "my-provider",
              createdDate: "2021/01/03",
              status: "my-history-status",
              request: "my-request",
              response: "my-response",
            },
          ],
        },
      ]}
    />
  );

  const expectLinesInDocument = (expectLines: string[]) => {
    for (const item of expectLines) {
      expect(getByText(item)).toBeInTheDocument();
    }
  };
  expectLinesInDocument(["my-number", "my-type", "formatted_date"]);

  fireEvent.click(getByRole("button"));
  expectLinesInDocument(["Verification History", "my-verification-table"]);
});
