import { render, fireEvent } from "@testing-library/react";
import { UserTable } from "./UserTable";
import { UserStatus } from "models/user";
import * as mockRouter from "next/router";
jest.mock("next/router");
const data = [
  {
    id: "666",
    marketplace: "Hotel Supply B2B",
    username: "my username",
    email: "firstname@company.com  ",
    dateJoined: "2021-10-11",
    status: UserStatus.PASSED,
    role: "Owner",
  },
];

test("TraderList should work", () => {
  const pushFn = jest.fn();
  const mockedFunction = mockRouter.useRouter as jest.Mock;
  mockedFunction.mockReturnValue({
    push: pushFn,
  });
  const { getByText } = render(<UserTable users={data} />);
  fireEvent.click(getByText("Hotel Supply B2B"));
  expect(pushFn).toBeCalledWith("/user/666");
});
