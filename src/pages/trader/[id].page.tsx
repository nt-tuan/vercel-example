import React from "react";
import { TraderContact } from "components/trader/TraderContact";
import { TraderContact as Model } from "models/trader";
import { getTrader } from "services/trader";
import { TraderVerifyingTable } from "components/trader/TraderVerifyingTable";
import { AdminLayout, getLayout } from "layouts/AdminLayout";
import { Box, Skeleton, Typography } from "@mui/material";
import { WrappedLink } from "components/common/WrappedLink/WrappedLink";
import { useRouter } from "next/router";

const Page = () => {
  const [trader, setTrader] = React.useState<Model>();
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    if (typeof id !== "string") return;
    getTrader(id).then(setTrader);
  }, [id]);
  return (
    <>
      <AdminLayout.Header>
        {trader?.marketplace ?? <Skeleton variant="text" />} |{" "}
        {trader?.companyName ?? <Skeleton variant="text" />}
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
      <TraderContact contact={trader} />
      <Box sx={{ marginTop: "24px" }}>
        <TraderVerifyingTable data={trader?.verifyingResult} />
      </Box>
    </>
  );
};

Page.getLayout = getLayout;
export default Page;
