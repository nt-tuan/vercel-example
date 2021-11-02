import React from "react";
import { UserContact as Model, UserStatus } from "models/user";
import { UserStatusBadge } from "./UserStatusBadge";
import { ContactCard } from "components/common/ContactCard/ContactCard";

interface Props {
  contact?: Model;
  status?: UserStatus;
}

export const UserContact = ({ contact }: Props) => {
  const items = React.useMemo(() => {
    if (contact == null) return undefined;
    return [
      {
        label: "Name",
        value: contact?.name,
      },
      {
        label: "Phone Number",
        value: contact?.phoneNumber,
      },
      {
        label: "Email Address",
        value: (
          <div>
            <div>{contact.email}</div>
            {contact.emailVerified && (
              <UserStatusBadge
                status={UserStatus.EMAIL_VERIFIED}
                size="small"
              />
            )}
          </div>
        ),
      },
      {
        label: "Company Name",
        value: contact?.companyName,
      },
      {
        label: "Country",
        value: contact?.country,
      },
    ];
  }, [contact]);
  return <ContactCard title="Contact Details" items={items} />;
};
