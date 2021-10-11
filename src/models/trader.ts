import { KYCStatus } from "./kyc";

export interface Trader {
  marketplace: string;
  username: string;
  email: string;
  dateJoined: string;
  status: KYCStatus;
}

export interface TraderContact {
  companyName?: string;
  phoneNumber?: string;
  email?: string;
  country?: string;
  address?: string;
  emailVerified: boolean;
}
