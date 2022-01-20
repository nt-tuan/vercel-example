import { useApiURL } from "config/ConfigProvider";
import { HttpAPI } from "helpers/httpAPI";
import { Organization } from "models/organization";
import { Session } from "models/session";

export const useOrganisations = () => {
  const apiURL = useApiURL();
  const api = new HttpAPI(apiURL);
  const getOrganizations: () => Promise<Organization[]> = async () => {
    return api.get<Organization[]>("/organizations");
  };
  const getOrganizationHistory: (id: string) => Promise<Session[]> = async (
    id
  ) => {
    return api.get<Session[]>(`/organizations/${id}`);
  };
  return { getOrganizations, getOrganizationHistory };
};
