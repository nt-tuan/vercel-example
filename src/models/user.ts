export enum UserStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING_EMAIL = "PENDING_EMAIL",
  PENDING = "PENDING",
  PASSED = "PASSED",
  EMAIL_VERIFIED = "EMAIL_VERIFIED",
  INACTIVE = "INACTIVE",
}

export const UserStatusLabel = {
  [UserStatus.FAILED]: "KYC - Failed",
  [UserStatus.IN_PROGRESS]: "KYC - In Progress",
  [UserStatus.PENDING_EMAIL]: "Pending Email Ver",
  [UserStatus.PASSED]: "KYC Passed",
  [UserStatus.EMAIL_VERIFIED]: "Email Verified",
  [UserStatus.INACTIVE]: "Inactive",
  [UserStatus.PENDING]: "KYC - Pending",
};

export interface UserVerifyingResult {
  date?: string;
  type?: string;
  provider?: string;
  status?: UserStatus;
  message?: string;
}

export interface User {
  id: string;
  marketplace: string;
  username: string;
  email: string;
  role: string;
  dateJoined: string;
  status: UserStatus;
}

export interface UserContact {
  name?: string;
  marketplace: string;
  username: string;
  dateJoined: string;
  status: UserStatus;
  companyName?: string;
  phoneNumber?: string;
  email?: string;
  country?: string;
  address?: string;
  emailVerified: boolean;
}

export interface VerificationSession {
  sessionID: string;
  type: string;
  requested: string;
  status: UserStatus;
}
