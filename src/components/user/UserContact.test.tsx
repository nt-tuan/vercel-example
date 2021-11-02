import { render } from "@testing-library/react";
import { UserStatus } from "models/user";
import { UserContact } from "./UserContact";

test("TraderContact should work when no contact provided", () => {
  const { queryByText } = render(<UserContact />);
  expect(queryByText("Company Name")).not.toBeInTheDocument();
});

test("TraderContact should work", () => {
  const { queryByText } = render(
    <UserContact
      contact={{
        companyName: "My Company",
        emailVerified: false,
        marketplace: "My marketplace",
        username: "my username",
        dateJoined: "2021-11-22T03:19:42Z",
        status: UserStatus.FAILED,
        verifyingResult: [],
      }}
    />
  );
  expect(queryByText("My Company")).toBeInTheDocument();
});
