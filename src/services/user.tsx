import { useApiURL } from "config/ConfigProvider";
import { HttpAPI } from "helpers/httpAPI";
import { Session } from "models/session";
import { User } from "models/user";

export const useUsers = () => {
  const apiURL = useApiURL();
  const api = new HttpAPI(apiURL);
  const getUsersKYC: () => Promise<User[]> = async () => {
    return api.get<User[]>("/users/kyc/all");
  };
  const getUsersEmailVerification = () => {
    return api.get<User[]>("/users/email-verification/all");
  };
  const getUserDocumentVerification = () => {
    return api.get<User[]>("/users/document-verification/all");
  };
  const getUserKYCVerificationHistory = (id: string) =>
    api.get<Session[]>(`/users/kyc/${id}`);
  const getUserEmailVerificationHistory = (id: string) =>
    api.get<Session[]>(`/users/email-verification/${id}`);
  const getUserDocumentVerificationHistory = (id: string) =>
    api.get<Session[]>(`/users/document-verification/${id}`);
  return {
    getUsersKYC,
    getUsersEmailVerification,
    getUserDocumentVerification,
    getUserKYCVerificationHistory,
    getUserEmailVerificationHistory,
    getUserDocumentVerificationHistory,
  };
};
