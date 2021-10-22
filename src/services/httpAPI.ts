import { InvalidFormatError, UnexpectedError, getAPIError } from "./apiError";
interface ServerError {
  code: string;
}
export class HttpAPI {
  basePath: string;
  constructor(basePath?: string) {
    this.basePath = basePath || "";
  }
  async get<T>(path: string, accessToken?: string) {
    const headers = getHeaders(accessToken);
    console.log(this.basePath);
    const response = await fetch(this.basePath + path, {
      method: "GET",
      headers,
    });
    if (!response.ok) {
      try {
        const errorData = await parseJSONResponse<ServerError>(
          response,
          UnexpectedError
        );
        throw getAPIError(errorData.code);
      } catch (error) {
        throw error;
      }
    }
    return parseJSONResponse<T>(response);
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
