export enum KYCStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING_EMAIL = "PENDING_EMAIL",
  PASSED = "PASSED",
  EMAIL_VERIFIED = "EMAIL_VERIFIED",
  INACTIVE = "INACTIVE",
}

export const KYCStatusLabel = {
  [KYCStatus.FAILED]: "KYC Failed",
  [KYCStatus.IN_PROGRESS]: "KYC - InProgress",
  [KYCStatus.PENDING_EMAIL]: "Pending Email Ver",
  [KYCStatus.PASSED]: "KYC Passed",
  [KYCStatus.EMAIL_VERIFIED]: "Email Verified",
  [KYCStatus.INACTIVE]: "Inactive",
};

export interface KYCResult {
  date?: string;
  type?: string;
  provider?: string;
  status?: KYCStatus;
  message?: string;
}
