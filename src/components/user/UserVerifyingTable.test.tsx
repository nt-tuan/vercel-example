import { fireEvent, render, waitFor } from "@testing-library/react";
import { UserStatus } from "models/user";
import { UserVerifyingTable } from "../common/SessionTable/VerificationTable";

const data = [
  {
    id: "1",
    date: "2021-1-1-2",
    type: "string",
    provider: "Raputel",
    status: UserStatus.PASSED,
    message: "My message",
  },
];
test("should work", async () => {
  const { getByText, getByTitle } = render(<UserVerifyingTable data={data} />);
  expect(getByText("Raputel")).toBeInTheDocument();
  await waitFor(() => getByTitle("View message"));
  fireEvent.click(getByTitle("View message"));
  expect(getByText("My message")).toBeInTheDocument();
});
