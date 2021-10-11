import {
  Card,
  CardContent,
  List,
  ListItem,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { TraderContact as Model } from "models/trader";
import { styled } from "@mui/system";
import { KYCStatusBadge } from "./KYCStatusBadge";
import { KYCStatus } from "models/kyc";

const Flex = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});
const FlexItem = styled("div")({
  flex: "1 1 0",
  padding: "16px 0 0 0",
});

const WrappedItem = ({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) => {
  return (
    <ListItem disablePadding>
      <Flex>
        <FlexItem>{label}</FlexItem>
        <FlexItem>{value}</FlexItem>
      </Flex>
    </ListItem>
  );
};

interface Props {
  contact?: Model;
  status?: KYCStatus;
}

export const TraderContact = ({ contact }: Props) => {
  if (contact == null)
    return <Skeleton variant="rectangular" width={500} height={300} />;
  return (
    <Card style={{ maxWidth: "500px" }}>
      <CardContent>
        <Typography fontWeight="bold">Contact Details</Typography>
        <List>
          <WrappedItem value={contact.companyName ?? ""} label="Company Name" />
          <WrappedItem value={contact.phoneNumber ?? ""} label="Phone Number" />
          <WrappedItem
            value={
              <div>
                <div>{contact.email}</div>
                {contact.emailVerified && (
                  <KYCStatusBadge
                    status={KYCStatus.EMAIL_VERIFIED}
                    size="small"
                  />
                )}
              </div>
            }
            label="Email Address"
          />
          <WrappedItem value={contact.country ?? ""} label="Country" />
          <WrappedItem value={contact.address ?? ""} label="Full Address" />
        </List>
      </CardContent>
    </Card>
  );
};
