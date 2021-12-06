import { render } from "@testing-library/react";
import { UserVerificationContainer } from "./UserVerificationContainer";

jest.mock("components/common/SessionTable/SessionTable", () => ({
  SessionTable: () => <div>my-session-table</div>,
}));
jest.mock("components/common/WrappedLink/WrappedLink", () => ({
  WrappedLink: () => <div>my-link</div>,
}));
jest.mock("components/user/UserContact", () => ({
  UserContact: () => <div>my-link</div>,
}));
jest.mock("next/router", () => ({
  useRouter: () => ({
    query: {
      username: "my-username",
      marketplaceName: "my-mp",
    },
  }),
}));

test("UserVerificationContainer should work", () => {
  const { getByText } = render(<UserVerificationContainer />);
  expect(getByText("my-mp | my-username")).toBeInTheDocument();
});
