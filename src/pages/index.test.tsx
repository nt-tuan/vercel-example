import { act, render } from "@testing-library/react";
import * as traderService from "services/trader";
import { TraderStatus } from "models/trader";
import TraderList from "./index.page";
jest.mock("services/trader");
test("TraderList should render", async () => {
  traderService.getTraders = async () => [
    {
      id: "1",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: TraderStatus.PASSED,
    },
  ];
  let containerElement;
  await act(async () => {
    const { container } = render(<TraderList />);
    containerElement = container;
  });
  expect(containerElement).toMatchSnapshot();
});
