import { Session } from "models/session";
import { User } from "models/user";
import { api } from "./api";

export const getUsersKYC: () => Promise<User[]> = async () => {
  return api.get<User[]>("/users/kyc/all");
};
export const getUsersEmailVerification = () => {
  return api.get<User[]>("/users/email-verification/all");
};
export const getUserDocumentVerification = () => {
  return api.get<User[]>("/users/document-verification/all");
};
export const getUserKYCVerificationHistory = (id: string) =>
  api.get<Session[]>(`/users/kyc/${id}`);
export const getUserEmailVerificationHistory = (id: string) =>
  api.get<Session[]>(`/users/email-verification/${id}`);
export const getUserDocumentVerificationHistory = (id: string) =>
  api.get<Session[]>(`/users/document-verification/${id}`);
