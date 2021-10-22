export interface APIError {
  name: string;
  message: string;
}

export const InvalidFormatError: APIError = {
  message: "Invalid Format",
  name: "InvalidFormatError",
};

export const UnexpectedError: APIError = {
  message: "Unexpected Error",
  name: "UnexpectedError",
};

export const getAPIError = (code: string) => {
  return UnexpectedError;
};
