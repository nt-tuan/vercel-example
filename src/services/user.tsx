import { useApiURL } from "config/ConfigProvider";
import { HttpAPI } from "helpers/httpAPI";
import { Session } from "models/session";
import { User } from "models/user";

export interface UserVerificationHistory extends User {
  id: string;
  sessionNumber: string;
  type: string;
  requestedDate: string;
  status: string;
  sessionList: Session[];
}

export const useUsers = () => {
  const apiURL = useApiURL();
  const api = new HttpAPI(apiURL);
  const getUsersKYC: () => Promise<User[]> = async () => {
    return api.get<User[]>("/users/kyc");
  };
  const getUsersEmailVerification = () => {
    return api.get<User[]>("/users/email-verification");
  };
  const getUserDocumentVerification = () => {
    return api.get<User[]>("/users/document-verification");
  };
  const getUserKYCVerificationHistory = (id: string) =>
    api.get<UserVerificationHistory>(`/users/kyc/${id}`);
  const getUserEmailVerificationHistory = (id: string) =>
    api.get<UserVerificationHistory>(`/users/email-verification/${id}`);
  const getUserDocumentVerificationHistory = (id: string) =>
    api.get<UserVerificationHistory>(`/users/document-verification/${id}`);
  return {
    getUsersKYC,
    getUsersEmailVerification,
    getUserDocumentVerification,
    getUserKYCVerificationHistory,
    getUserEmailVerificationHistory,
    getUserDocumentVerificationHistory,
  };
};
