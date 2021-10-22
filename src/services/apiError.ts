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
const errors: { [key: string]: string } = {};
export const getAPIError = (name: string) => {
  if (name in errors) {
    return {
      name: name,
      message: errors[name],
    };
  }
  return UnexpectedError;
};
