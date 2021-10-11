import {
  getTrader,
  getTraderContact,
  getTraderKYCResult,
  getTraders,
} from "./traders";
import { KYCStatus } from "models/kyc";
test("getTraders should work", () => {
  expect(getTraders()).resolves.toStrictEqual([
    {
      id: "1",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: KYCStatus.PASSED,
    },
    {
      id: "2",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: KYCStatus.PASSED,
    },
    {
      id: "3",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: KYCStatus.PASSED,
    },
    {
      id: "4",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: KYCStatus.PASSED,
    },
    {
      id: "5",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: KYCStatus.PASSED,
    },
    {
      id: "6",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: KYCStatus.PASSED,
    },
    {
      id: "7",
      marketplace: "Hotel Supply B2B",
      username: "tuan",
      email: "tuan@tuan.tuan  ",
      dateJoined: "2021-10-11",
      status: KYCStatus.PASSED,
    },
  ]);
});

test("getTrader should work", () => {
  expect(getTrader("1")).resolves.toStrictEqual({
    id: "1",
    marketplace: "Hotel Supply B2B",
    username: "tuan",
    email: "tuan@tuan.tuan  ",
    dateJoined: "2021-10-11",
    status: KYCStatus.PASSED,
  });
});

test("getTraderContact should work", () => {
  expect(getTraderContact()).resolves.toStrictEqual({
    companyName: "AAA",
    phoneNumber: "12312451",
    email: "email@asd.cos",
    country: "Vietnam",
    address: "232 Akd ale",
    emailVerified: true,
  });
});

test("getTraderKYCResult should work", () => {
  expect(getTraderKYCResult()).resolves.toStrictEqual([
    {
      id: "1",
      date: "2021-1-1-2",
      type: "string",
      provider: "Raputel",
      status: KYCStatus.PASSED,
      message: "My message",
    },
  ]);
});
