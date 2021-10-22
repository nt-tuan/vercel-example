import { getTrader, getTraders } from "./trader";
import { TraderStatus } from "models/trader";

var globalRef: any = global;
const mockFetch = (jsonResponse: any) => {
  globalRef.fetch = jest.fn(() =>
    Promise.resolve({
      json: async () => jsonResponse,
      ok: true,
    })
  );
};

test("getTraders should work", () => {
  const data = [
    {
      id: "1",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: TraderStatus.PASSED,
    },
    {
      id: "2",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: TraderStatus.PASSED,
    },
    {
      id: "3",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: TraderStatus.PASSED,
    },
    {
      id: "4",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: TraderStatus.PASSED,
    },
    {
      id: "5",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: TraderStatus.PASSED,
    },
    {
      id: "6",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: TraderStatus.PASSED,
    },
    {
      id: "7",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: TraderStatus.PASSED,
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
    status: TraderStatus.PASSED,
  };
  mockFetch(data);
  expect(getTrader("1")).resolves.toStrictEqual(data);
});
