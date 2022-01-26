import { InvalidFormatError, UnexpectedError, getAPIError } from "./apiError";
export class HttpAPI {
  basePath: string;
  constructor(basePath?: string) {
    this.basePath = basePath || "";
  }
  async get<T>(path: string, accessToken?: string) {
    const headers = getHeaders(accessToken);
    try {
      const response = await fetch(this.basePath + path, {
        method: "GET",
        headers,
      });
      if (!response.ok) {
        throw getAPIError();
      }
      return parseJSONResponse<T>(response);
    } catch {
      throw UnexpectedError;
    }
  }
}

const parseJSONResponse = async <T>(response: Response, error?: Error) => {
  try {
    const data = await response.json();
    return data as T;
  } catch {
    if (error) throw error;
    throw InvalidFormatError;
  }
};

const getHeaders = (accessToken?: string) => {
  const headers: { [key: string]: string } = {
    "Content-Type": "application/json",
  };
  if (accessToken) {
    headers.authorization = accessToken;
  }
  return headers;
};
