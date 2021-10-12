import { render, fireEvent } from "@testing-library/react";
import { TraderList } from "./TraderList";
import { TraderStatus } from "models/trader";
import * as mockReactRouter from "react-router";
jest.mock("react-router");
const data = [
  {
    id: "666",
    marketplace: "Hotel Supply B2B",
    username: "my username",
    email: "firstname@company.com  ",
    dateJoined: "2021-10-11",
    status: TraderStatus.PASSED,
  },
];

test("TraderList should work", () => {
  const pushFn = jest.fn();
  const mockedFunction = mockReactRouter.useHistory as jest.Mock;
  mockedFunction.mockReturnValue({
    push: pushFn,
  });
  const { getByText } = render(<TraderList traders={data} />);
  fireEvent.click(getByText("Hotel Supply B2B"));
  expect(pushFn).toBeCalledWith({ pathname: "/trader/666" });
});
