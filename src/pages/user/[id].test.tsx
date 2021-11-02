import { render, act } from "@testing-library/react";
import React from "react";
import Trader from "./[id].page";
import { UserStatus } from "models/user";
import * as traderService from "services/trader";
import * as mockRouter from "next/router";

jest.mock("services/trader");
jest.mock("next/router");
jest.mock("components/common/WrappedLink/WrappedLink", () => ({
  WrappedLink: () => <a />,
}));
const mockService = () => {
  jest.spyOn(traderService, "getTrader").mockImplementation(async () => ({
    id: "1",
    marketplace: "Hotel Supply B2B",
    username: "tuan",
    email: "tuan@tuan.tuan  ",
    dateJoined: "2021-10-11",
    status: UserStatus.PASSED,
    companyName: "AAA",
    phoneNumber: "12312451",
    country: "Vietnam",
    address: "232 Akd ale",
    emailVerified: true,
    verifyingResult: [
      {
        id: "1",
        date: "2021-10-22T05:19:42Z",
        type: "string",
        provider: "Raputel",
        status: UserStatus.PASSED,
        message:
          "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
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
