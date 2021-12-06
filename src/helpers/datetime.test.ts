import {formatDateTime, formatDate} from "./datetime";
import { format, utcToZonedTime } from "date-fns-tz";

jest.mock("date-fns-tz")
jest.unmock("./datetime")
test("formatDate should work", () => {
  formatDate("2021/01/02");
  expect(format).toBeCalledWith(undefined, "dd-MMM-yyyy", expect.anything());
  expect(utcToZonedTime).toBeCalled();
})

test("formatDateTime should work", () => {
  formatDateTime("2021/01/02");
  expect(format).toBeCalledWith(undefined, "dd-MMM-yyyy | HH:mm zzz", expect.anything());
  expect(utcToZonedTime).toBeCalled();
})