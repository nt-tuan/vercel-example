import { render } from "@testing-library/react";
import { TraderContact } from "./TraderContact";

test("TraderContact should work when no contact provided", () => {
  const { queryByText } = render(<TraderContact />);
  expect(queryByText("Company Name")).not.toBeInTheDocument();
});

test("TraderContact should work", () => {
  const { queryByText } = render(
    <TraderContact
      contact={{ companyName: "My Company", emailVerified: false }}
    />
  );
  expect(queryByText("My Company")).toBeInTheDocument();
});
