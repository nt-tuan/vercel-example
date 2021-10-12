import { fireEvent, render, waitFor } from "@testing-library/react";
import { TraderStatus } from "models/trader";
import { TraderVerifyingTable } from "./TraderVerifyingTable";

const data = [
  {
    id: "1",
    date: "2021-1-1-2",
    type: "string",
    provider: "Raputel",
    status: TraderStatus.PASSED,
    message: "My message",
  },
];
test("TraderVerifyingTable should work", async () => {
  const { getByText, getByTitle } = render(
    <TraderVerifyingTable data={data} />
  );
  expect(getByText("Raputel")).toBeInTheDocument();
  await waitFor(() => getByTitle("View message"));
  fireEvent.click(getByTitle("View message"));
  expect(getByText("My message")).toBeInTheDocument();
});
