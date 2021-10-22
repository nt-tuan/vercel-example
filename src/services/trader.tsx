import { Trader, TraderContact } from "models/trader";
import { HttpAPI } from "./httpAPI";

const traderAPI = new HttpAPI("/core-services/dc-support");
export const getTraders: () => Promise<Trader[]> = async () => {
  return traderAPI.get<Trader[]>("/traders.json");
};

export const getTrader = async (id: string) => {
  return traderAPI.get<TraderContact>("/trader.json");
};
