import { APIError, InvalidFormatError, UnexpectedError } from "./apiError";
import { HttpAPI } from "./httpAPI";
const globalRef = global;

const mockFetch = (response?: unknown, reject?: APIError | string) => {
  globalRef.fetch = async () => {
    if (response) return response as Response;
    throw reject;
  };
};
describe("HttpAPI should work", () => {
  const testCases = [
    {
      accessToken: "eyASD",
      response: {
        ok: true,
        json: async () => ({ message: "Hello" }),
      },
      expect: { message: "Hello" },
    },
    {
      response: {
        ok: true,
        json: () => Promise.reject("Undefined message"),
      },
      expect: InvalidFormatError,
    },
    {
      response: {
        ok: false,
        json: async () => ({ message: "Hello" }),
      },
      expect: UnexpectedError,
    },
    {
      response: {
        ok: false,
        json: () => Promise.reject("Undefined message"),
      },
      expect: UnexpectedError,
    },
    {
      reject: "Network error",
      expect: UnexpectedError,
    },
  ];
  for (const testCase of testCases) {
    test(`when ${JSON.stringify(testCase)}`, async () => {
      mockFetch(testCase.response, testCase.reject);
      const api = new HttpAPI();
      try {
        const obj = await api.get("/", testCase.accessToken);
        expect(obj).toStrictEqual(testCase.expect);
      } catch (error) {
        expect(error).toStrictEqual(testCase.expect);
      }
    });
  }
});
