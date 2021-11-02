import { User, UserContact, VerificationSession } from "models/user";
import { VerificationHistory } from "models/verification";
import { HttpAPI } from "./httpAPI";

const userAPI = new HttpAPI("/core-services/dc-support");
export const getUsers: () => Promise<User[]> = async () => {
  return userAPI.get<User[]>("/traders.json");
};

export const getUserContact = async (id: string) => {
  return userAPI.get<UserContact>("/trader.json");
};

export const getUserVerificationSesions = async () => {
  return userAPI.get<VerificationSession[]>("/sessions.json");
};

export const getUserVerificationHistory = async () => {
  return userAPI.get<VerificationHistory[]>("/history.json");
};
