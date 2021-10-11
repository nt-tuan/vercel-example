import { KYCStatus } from "models/kyc";
import { Trader } from "models/trader";
const data = [
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
];
export const getTraders: () => Promise<Trader[]> = async () => {
  return data;
};

export const getTrader = async (id: string) => {
  return data.find((item) => item.id === id);
};

export const getTraderContact = async (id: string) => {
  return {
    companyName: "AAA",
    phoneNumber: "12312451",
    email: "email@asd.cos",
    country: "Vietnam",
    address: "232 Akd ale",
    emailVerified: true,
  };
};

export const getTraderKYCResult = async (id: string) => {
  return [
    {
      id: "1",
      date: "2021-1-1-2",
      type: "string",
      provider: "Raputel",
      status: KYCStatus.PASSED,
      message: "My message",
    },
  ];
};
