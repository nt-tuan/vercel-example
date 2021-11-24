import { Organization } from "models/organization";
import { Session } from "models/session";
import { api } from "./api";

export const getOrganizations: () => Promise<Organization[]> = async () => {
  return api.get<Organization[]>("/organizations");
};

export const getOrganizationHistory: (id: string) => Promise<Session[]> =
  async (id) => {
    return api.get<Session[]>(`/organizations/${id}`);
  };
