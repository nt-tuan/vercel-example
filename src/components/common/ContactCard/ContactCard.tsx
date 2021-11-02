import {
  Card,
  List,
  ListItem,
  Skeleton,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import { Box, styled } from "@mui/system";

const Flex = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});
const FlexItem = styled("div")({
  flex: "1 1 0",
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
      <Box sx={{ width: "100%", padding: "10px 24px" }}>
        <Flex>
          <FlexItem>{label}</FlexItem>
          <FlexItem>{value}</FlexItem>
        </Flex>
      </Box>
    </ListItem>
  );
};

interface Props {
  items?: {
    value: React.ReactNode;
    label: React.ReactNode;
  }[];
  title: string;
}

export const ContactCard = ({ items, title }: Props) => {
  if (items == null)
    return <Skeleton variant="rectangular" width={500} height={300} />;
  return (
    <Card sx={{ maxWidth: "500px" }} variant="outlined">
      <List sx={{ paddingTop: 0 }}>
        <WrappedItem
          value=""
          label={<Typography fontWeight="bold">{title}</Typography>}
        />
        {items.map(({ value, label }) => (
          <>
            <Divider variant="fullWidth" component="li" />
            <WrappedItem value={value ?? ""} label={label} />
          </>
        ))}
      </List>
    </Card>
  );
};
