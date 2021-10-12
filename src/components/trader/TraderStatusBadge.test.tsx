import { render } from "@testing-library/react";
import { TraderStatusBadge } from "./TraderStatusBadge";
import { TraderStatus } from "models/trader";

const setup = (props: any) => {
  return render(<TraderStatusBadge {...props} />);
};

describe("TraderStatusBadge should work", () => {
  const testCases = [
    {
      status: TraderStatus.PASSED,
      expect: "KYC Passed",
    },
  ];

  for (const testCase of testCases) {
    test(`when ${JSON.stringify(testCase)}`, () => {
      const { expect: expectText, ...props } = testCase;
      const { getByText } = setup(props);
      expect(getByText(expectText)).toBeInTheDocument();
    });
  }
});
