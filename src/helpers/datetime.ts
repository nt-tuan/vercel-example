import { format, utcToZonedTime } from "date-fns-tz";

const tryFormat = (stringValue: string, pattern: string) => { 
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  try {
    return format(utcToZonedTime(new Date(stringValue), timeZone), pattern, {
      timeZone,
    });
  } catch (e) {
    return "";
  }
};

export const formatDateTime = (stringValue: string) => {
  return tryFormat(stringValue, "dd-MMM-yyyy | HH:mm zzz");
};

export const formatDate = (stringValue: string) => {
  return tryFormat(stringValue, "dd-MMM-yyyy");
};
