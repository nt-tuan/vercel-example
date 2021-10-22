import { formatDateTime } from "./datetime";
jest.unmock("./datetime");
test("formatDateTime should work", () => {
  jest.spyOn(Date.prototype, "toLocaleString").mockImplementation(() => {
    return "formatedValue";
  });
  expect(formatDateTime("2021-10-22T04:19:42Z")).toStrictEqual("formatedValue");
});
