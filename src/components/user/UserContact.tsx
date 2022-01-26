import React from "react";
import { ContactCard } from "components/common/ContactCard/ContactCard";
import { User } from "models/user";

export const UserContact = ({ user }: { user: User }) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    status,
    organizationName,
    country,
  } = user || {};
  const items = React.useMemo(() => {
    return [
      {
        label: "Name",
        value: `${firstName} ${lastName}`,
      },
      {
        label: "Phone Number",
        value: phone,
      },
      {
        label: "Email Address",
        value: email,
      },
      {
        label: "Company Name",
        value: organizationName,
      },
      {
        label: "Country",
        value: country,
      },
    ];
  }, [firstName, lastName, phone, email, status, organizationName, country]);
  return <ContactCard title="Contact Details" items={items} />;
};
