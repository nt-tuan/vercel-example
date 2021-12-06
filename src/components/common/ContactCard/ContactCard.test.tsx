import { render } from "@testing-library/react";
import React from "react";
import { ContactCard } from "./ContactCard";

test("ContactCard should work correcly", () => {
  const { getByText } = render(
    <ContactCard
      title="my-title"
      items={[
        {
          value: "item-1",
          label: "label-1",
        },
        {
          value: "item-2",
          label: "label-2",
        },
      ]}
    />
  );
  const expectLines = ["item-1", "item-2", "label-1", "label-2"];
  for (const item of expectLines) {
    expect(getByText(item)).toBeInTheDocument();
  }
});
