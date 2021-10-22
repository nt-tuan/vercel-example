import { formatDateTime } from "./datetime";

test("formatDateTime should work", () => {
  expect(formatDateTime("2021-10-22T04:19:42Z")).toStrictEqual(
    "2021-10-22T04:19:42Z"
  );
});
