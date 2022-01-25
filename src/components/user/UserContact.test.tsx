import { render } from "@testing-library/react";
import { UserContact } from "./UserContact";
import * as mockedRouter from "next/router";

test("UserContact should work", () => {
  jest.spyOn(mockedRouter, "useRouter").mockReturnValue({
    query: {
      firstName: "my-first-name",
      lastName: "my-last-name",
      phone: "my-phone",
      status: "my-status",
      organizationName: "my-org-name",
      country: "my-country",
    },
  } as never);
  const { getByText } = render(
    <UserContact
      user={{
        id: "my-id",
        firstName: "my-first-name",
        lastName: "my-last-name",
        phone: "my-phone",
        status: "my-status",
        organizationName: "my-org-name",
        country: "my-country",
        marketplaceName: "string",
        userId: "string",
        username: "",
        email: "string",
        role: "string",
        userJoinedDate: "string",
      }}
    />
  );
  const expectLines = [
    "my-first-name my-last-name",
    "my-phone",
    "my-status",
    "my-org-name",
    "my-country",
  ];
  for (const item of expectLines) {
    expect(getByText(item)).toBeInTheDocument();
  }
});
