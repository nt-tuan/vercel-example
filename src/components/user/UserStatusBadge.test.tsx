import { render } from "@testing-library/react";
import { UserStatusBadge, UserStatusBadgeProps } from "./UserStatusBadge";
import { UserStatus } from "models/user";

const setup = (props: UserStatusBadgeProps) => {
  return render(<UserStatusBadge {...props} />);
};

describe("should work", () => {
  const testCases = [
    {
      status: UserStatus.PASSED,
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
