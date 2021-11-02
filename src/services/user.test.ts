import { getTrader, getTraders } from "./trader";
import { UserStatus } from "models/user";
import * as mockedHttpAPI from "./httpAPI";
jest.mock("./httpAPI");
const mockFetch = (jsonResponse: unknown) => {
  jest
    .spyOn(mockedHttpAPI.HttpAPI.prototype, "get")
    .mockImplementation(() => Promise.resolve(jsonResponse));
};

test("getTraders should work", () => {
  const data = [
    {
      id: "1",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: UserStatus.PASSED,
    },
    {
      id: "2",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: UserStatus.PASSED,
    },
    {
      id: "3",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: UserStatus.PASSED,
    },
    {
      id: "4",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: UserStatus.PASSED,
    },
    {
      id: "5",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: UserStatus.PASSED,
    },
    {
      id: "6",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: UserStatus.PASSED,
    },
    {
      id: "7",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: UserStatus.PASSED,
    },
  ];
  mockFetch(data);
  expect(getTraders()).resolves.toStrictEqual(data);
});

test("getTrader should work", () => {
  const data = {
    id: "1",
    marketplace: "Hotel Supply B2B",
    username: "tuan",
    email: "tuan@tuan.tuan  ",
    dateJoined: "2021-10-11",
    status: UserStatus.PASSED,
  };
  mockFetch(data);
  expect(getTrader()).resolves.toStrictEqual(data);
});
