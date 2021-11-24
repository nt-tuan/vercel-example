import React from "react";
import { ContactCard } from "components/common/ContactCard/ContactCard";
import { ColorBadge } from "components/common/ColorBadge/ColorBadge";
import { useRouter } from "next/router";

export const UserContact = () => {
  const router = useRouter();
  const {
    firstName,
    lastName,
    phone,
    email,
    status,
    organizationName,
    country,
  } = router.query;
  const tryString = (value: string | string[] | undefined) => {
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return value[0];
    return "";
  };
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
        value: (
          <div>
            <div>{email}</div>
            {status && <ColorBadge status={tryString(status)} size="small" />}
          </div>
        ),
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
