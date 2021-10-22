import { dateTimeColumnFormatter } from "./table";
jest.mock("./datetime");
test("dateTimeColumnFormatter should work", () => {
  expect(
    dateTimeColumnFormatter({
      value: "2021-01-01",
      field: "myField",
      api: "my api",
    })
  ).toStrictEqual("2021-01-01");
});

test("dateTimeColumnFormatter should friendly render", () => {
  expect(
    dateTimeColumnFormatter({
      value: 123,
      field: "myField",
      api: "my api",
    })
  ).toStrictEqual("");
});
