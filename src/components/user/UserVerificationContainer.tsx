import React from "react";
import { AdminLayout } from "layouts/AdminLayout";
import { Box, Skeleton, Typography } from "@mui/material";
import { WrappedLink } from "components/common/WrappedLink/WrappedLink";
import { useRouter } from "next/router";
import { VerificationSessionTable } from "components/common/SessionTable/SessionTable";
import { Session } from "models/session";
import { UserContact } from "components/user/UserContact";

export const UserVerificationContainer = ({
  getSessions,
}: {
  getSessions: (id: string) => Promise<Session[]>;
}) => {
  const [sessions, setSessions] = React.useState<Session[]>();
  const router = useRouter();
  const { id, username, marketplaceName } = router.query;

  React.useEffect(() => {
    if (typeof id !== "string") return;
    getSessions(id).then(setSessions);
  }, [id]);

  return (
    <>
      <AdminLayout.Header>
        {marketplaceName ?? <Skeleton variant="text" />} |{" "}
        {username ?? <Skeleton variant="text" />}
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
      <UserContact />
      <Box sx={{ marginTop: "24px" }}>
        <VerificationSessionTable data={sessions} />
      </Box>
    </>
  );
};
