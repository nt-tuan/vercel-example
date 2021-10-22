export enum TraderStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING_EMAIL = "PENDING_EMAIL",
  PASSED = "PASSED",
  EMAIL_VERIFIED = "EMAIL_VERIFIED",
  INACTIVE = "INACTIVE",
}

export const KYCStatusLabel = {
  [TraderStatus.FAILED]: "KYC Failed",
  [TraderStatus.IN_PROGRESS]: "KYC - InProgress",
  [TraderStatus.PENDING_EMAIL]: "Pending Email Ver",
  [TraderStatus.PASSED]: "KYC Passed",
  [TraderStatus.EMAIL_VERIFIED]: "Email Verified",
  [TraderStatus.INACTIVE]: "Inactive",
};

export interface TraderVerifyingResult {
  date?: string;
  type?: string;
  provider?: string;
  status?: TraderStatus;
  message?: string;
}

export interface Trader {
  marketplace: string;
  username: string;
  email: string;
  dateJoined: string;
  status: TraderStatus;
}

export interface TraderContact {
  marketplace: string;
  username: string;
  dateJoined: string;
  status: TraderStatus;
  companyName?: string;
  phoneNumber?: string;
  email?: string;
  country?: string;
  address?: string;
  emailVerified: boolean;
  verifyingResult: TraderVerifyingResult[];
}
