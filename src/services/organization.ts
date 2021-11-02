import {
  Organization,
  OrganizationVerificationSession,
} from "models/organization";
import { VerificationHistory } from "models/verification";
import { HttpAPI } from "./httpAPI";

const userAPI = new HttpAPI("/core-services/dc-support");
export const getOrganizations: () => Promise<Organization[]> = async () => {
  return userAPI.get<Organization[]>("/organizations.json");
};

export const getOrganizationContact = async () => {
  return {
    marketplace: "My marketplace",
    companyName: "my company",
  };
};

export const getOrganizationVerificationSessions = async () => {
  return userAPI.get<OrganizationVerificationSession[]>(
    "/organization_sessions.json"
  );
};

export const getOrganizationVerificationHistory = async () => {
  return userAPI.get<VerificationHistory[]>("/history.json");
};
