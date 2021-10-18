import React from "react";
import { TraderContact } from "components/trader/TraderContact";
import {
  TraderContact as Model,
  Trader as TraderModel,
  TraderVerifyingResult,
} from "models/trader";
import {
  getTraderContact,
  getTraderVerifyingResult,
  getTrader,
} from "services/trader";
import { TraderVerifyingTable } from "components/trader/TraderVerifyingTable";
import { AdminLayout, getLayout } from "layouts/AdminLayout";
import { Box, Skeleton, Typography } from "@mui/material";
import { WrappedLink } from "components/common/WrappedLink/WrappedLink";
import { useRouter } from "next/router";

const Page = () => {
  const [contact, setContact] = React.useState<Model>();
  const [kycResult, setKYCResult] = React.useState<TraderVerifyingResult[]>();
  const [trader, setTrader] = React.useState<TraderModel>();
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    if (typeof id !== "string") return;
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
        <WrappedLink
          color="inherit"
          underline="hover"
          href="/"
          fontWeight="bold"
        >
          Trader
        </WrappedLink>
        <Typography fontWeight="light">Trader Details</Typography>
      </AdminLayout.Breadcrumbs>
      <TraderContact contact={contact} />
      <Box sx={{ marginTop: "24px" }}>
        <TraderVerifyingTable data={kycResult} />
      </Box>
    </>
  );
};

Page.getLayout = getLayout;
export default Page;
