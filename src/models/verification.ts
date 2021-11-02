export enum VerificationStatus {
  PASSED = "Passed",
  IN_PROGRESS = "In Progress",
  FAILED = "Failed",
}
export interface VerificationHistory {
  date?: string;
  type?: string;
  provider?: string;
  status?: VerificationStatus;
  message?: string;
}
