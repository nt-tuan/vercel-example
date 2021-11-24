import { HttpAPI } from "./httpAPI";
export const api = new HttpAPI(process.env.NEXT_PUBLIC_API_ENDPOINT);
