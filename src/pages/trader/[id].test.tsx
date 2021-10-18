import { render, act } from "@testing-library/react";
import React from "react";
import Trader from "./[id].page";
import { TraderStatus } from "models/trader";
import * as traderService from "services/trader";
import * as mockRouter from "next/router";

jest.mock("services/trader");
jest.mock("next/router");
jest.mock("components/common/WrappedLink/WrappedLink", () => ({
  WrappedLink: () => <a />,
}));
const mockService = () => {
  jest
    .spyOn(traderService, "getTraderContact")
    .mockImplementation(async () => ({
      companyName: "AAA",
      phoneNumber: "12312451",
      email: "email@asd.cos",
      country: "Vietnam",
      address: "232 Akd ale",
      emailVerified: true,
    }));
  jest
    .spyOn(traderService, "getTraderVerifyingResult")
    .mockImplementation(async () => [
      {
        id: "1",
        date: "2021-1-1-2",
        type: "string",
        provider: "Raputel",
        status: TraderStatus.PASSED,
        message: "My message",
      },
    ]);
  jest.spyOn(traderService, "getTrader").mockImplementation(async () => ({
    id: "1",
    marketplace: "Hotel Supply B2B",
    username: "tuan",
    email: "tuan@tuan.tuan  ",
    dateJoined: "2021-10-11",
    status: TraderStatus.PASSED,
  }));

  const mockUseParams = mockRouter.useRouter as jest.Mock;
  mockUseParams.mockImplementation(() => ({ query: { id: "1" } }));
};
test("Trader should render correctly", async () => {
  mockService();
  let containerElement;
  await act(async () => {
    const { container } = render(<Trader />);
    containerElement = container;
  });
  expect(containerElement).toMatchSnapshot();
});
