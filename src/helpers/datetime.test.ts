import { formatDateTime } from "./datetime";
import mockedDate from "date-fns-tz";
jest.unmock("./datetime");
jest.mock("date-fns-tz");
test("formatDateTime should work", () => {
  const actualDns = jest.requireActual("date-fns-tz");
  jest
    .spyOn(mockedDate, "format")
    .mockImplementation((date: string | number | Date, pattern: string) =>
      actualDns.format(date, pattern, { timeZone: "UTC" })
    );
  jest
    .spyOn(mockedDate, "utcToZonedTime")
    .mockImplementation(() => new Date("2021-10-22T04:19:42Z"));
  expect(formatDateTime("")).toStrictEqual("22-Oct-2021 | 11:19 UTC");
});
