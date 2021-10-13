import React from "react";
import { TraderContact } from "components/trader/TraderContact";
import { TraderContact as Model, Trader as TraderModel } from "models/trader";
import { TraderVerifyingResult } from "models/trader";
import { useParams } from "react-router";
import {
  getTraderContact,
  getTraderVerifyingResult,
  getTrader,
} from "services/trader";
import { TraderVerifyingTable } from "components/trader/TraderVerifyingTable";
import { AdminLayout } from "layouts/AdminLayout";
import { Box, Skeleton, Typography } from "@mui/material";
import { WrappedLink } from "components/common/WrappedLink/WrappedLink";
interface PageParams {
  id: string;
}

const Trader = () => {
  const [contact, setContact] = React.useState<Model>();
  const [kycResult, setKYCResult] = React.useState<TraderVerifyingResult[]>();
  const [trader, setTrader] = React.useState<TraderModel>();
  const { id } = useParams<PageParams>();
  React.useEffect(() => {
    getTrader(id).then(setTrader);
    getTraderContact(id).then(setContact);
    getTraderVerifyingResult(id).then(setKYCResult);
  }, [id]);
  return (
    <>
      <AdminLayout.Header>
        {trader?.marketplace ?? <Skeleton variant="text" />} |{" "}
        {contact?.companyName ?? <Skeleton variant="text" />}
      </AdminLayout.Header>
      <AdminLayout.Breadcrumbs aria-label="breadcrumb">
        <WrappedLink color="inherit" underline="hover" href="/">
          Trader
        </WrappedLink>
        <Typography fontWeight="light">Trader Details</Typography>
      </AdminLayout.Breadcrumbs>
      <AdminLayout.Content>
        <TraderContact contact={contact} />
        <Box sx={{ marginTop: "24px" }}>
          <TraderVerifyingTable data={kycResult} />
        </Box>
      </AdminLayout.Content>
    </>
  );
};

export default Trader;
