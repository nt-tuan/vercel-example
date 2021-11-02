export enum OrganizationStatus {
  PASSED = "KYB Passed",
  FAILED = "KYB - Failed",
  PENDING = "KYB - Pending",
  IN_PROGRESS = "KYB - In Progress",
}

export interface Organization {
  id: string;
  marketplace: string;
  companyName: string;
  dateJoined: string;
  status: OrganizationStatus;
}

export interface OrganizationContact {
  marketplace: string;
  companyName: string;
}

export interface OrganizationVerificationSession {
  sessionID: string;
  type: string;
  requested: string;
  status: OrganizationStatus;
}
