import React from "react";
import { TraderContact } from "components/trader/TraderContact";
import { TraderContact as Model, Trader as TraderModel } from "models/trader";
import { KYCResult as KYCResultModel } from "models/kyc";
import { useParams } from "react-router";
import {
  getTraderContact,
  getTraderKYCResult,
  getTrader,
} from "services/traders";
import { KYCResult } from "components/trader/KYCResult";
import { styled } from "@mui/system";
import { AdminLayout } from "layouts/AdminLayout";
import { Skeleton, Typography } from "@mui/material";
import { WrappedLink } from "components/common/WrappedLink/WrappedLink";
interface PageParams {
  id: string;
}

const KYCTableSection = styled("div")({
  marginTop: 24,
});

const TraderPage = () => {
  const [contact, setContact] = React.useState<Model>();
  const [kycResult, setKYCResult] = React.useState<KYCResultModel[]>();
  const [trader, setTrader] = React.useState<TraderModel>();
  const { id } = useParams<PageParams>();
  React.useEffect(() => {
    getTrader(id).then(setTrader);
    getTraderContact(id).then(setContact);
    getTraderKYCResult(id).then(setKYCResult);
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
      <TraderContact contact={contact} />
      <KYCTableSection>
        <KYCResult data={kycResult} />
      </KYCTableSection>
    </>
  );
};

export default TraderPage;
