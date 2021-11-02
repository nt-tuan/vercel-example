import React from "react";
import { UserContact } from "components/user/UserContact";
import { UserContact as Model, VerificationSession } from "models/user";
import {
  getUserContact,
  getUserVerificationHistory,
  getUserVerificationSesions,
} from "services/user";
import { AdminLayout, getLayout } from "layouts/AdminLayout";
import { Box, Skeleton, Typography } from "@mui/material";
import { WrappedLink } from "components/common/WrappedLink/WrappedLink";
import { useRouter } from "next/router";
import { VerificationSessionTable } from "components/common/SessionTable/SessionTable";

const Page = () => {
  const [trader, setTrader] = React.useState<Model>();
  const [sessions, setSessions] = React.useState<VerificationSession[]>();
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    if (typeof id !== "string") return;
    getUserContact(id).then(setTrader);
    getUserVerificationSesions().then(setSessions);
  }, [id]);
  return (
    <>
      <AdminLayout.Header>
        {trader?.marketplace ?? <Skeleton variant="text" />} |{" "}
        {trader?.username ?? <Skeleton variant="text" />}
      </AdminLayout.Header>
      <AdminLayout.Breadcrumbs aria-label="breadcrumb">
        <WrappedLink
          color="inherit"
          underline="hover"
          href="/"
          fontWeight="bold"
        >
          Users
        </WrappedLink>
        <Typography fontWeight="light">User Details</Typography>
      </AdminLayout.Breadcrumbs>
      <UserContact contact={trader} />
      <Box sx={{ marginTop: "24px" }}>
        <VerificationSessionTable
          data={sessions}
          getSession={getUserVerificationHistory}
        />
      </Box>
    </>
  );
};

Page.getLayout = getLayout;
export default Page;
