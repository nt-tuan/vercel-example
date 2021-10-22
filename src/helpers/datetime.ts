export const formatDateTime = (stringValue: string) => {
  try {
    return new Date(stringValue).toLocaleString();
  } catch {
    return "";
  }
};
