import React from "react";
import { AdminLayout } from "layouts/AdminLayout";
import { Box, Skeleton, Typography } from "@mui/material";
import { WrappedLink } from "components/common/WrappedLink/WrappedLink";
import { useRouter } from "next/router";
import { SessionTable } from "components/common/SessionTable/SessionTable";
import { UserContact } from "components/user/UserContact";
import { UserVerificationHistory } from "services/user";

export const UserVerificationContainer = ({
  getSessions,
  type,
}: {
  getSessions: (id: string) => Promise<UserVerificationHistory>;
  type: string;
}) => {
  const [userVerificationHistory, setUserVerificationHistory] =
    React.useState<UserVerificationHistory>();
  const router = useRouter();
  const { id } = router.query;

  const getUsername = () => {
    if (userVerificationHistory == null) return null;
    if (userVerificationHistory.username)
      return userVerificationHistory.username;
    return `${userVerificationHistory.firstName} ${userVerificationHistory.lastName}`;
  };
  const username = getUsername();

  React.useEffect(() => {
    if (typeof id !== "string") return;
    getSessions(id).then(setUserVerificationHistory);
  }, [id]);

  return (
    <>
      <AdminLayout.Header>
        {userVerificationHistory?.marketplaceName ?? (
          <Skeleton
            sx={{ display: "inline-block", width: 300 }}
            variant="text"
          />
        )}{" "}
        |{" "}
        {username ?? (
          <Skeleton
            sx={{ display: "inline-block", width: 300 }}
            variant="text"
          />
        )}
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
      {userVerificationHistory && (
        <UserContact user={userVerificationHistory} />
      )}
      <Box sx={{ marginTop: "24px" }}>
        <SessionTable data={userVerificationHistory?.sessionList} type={type} />
      </Box>
    </>
  );
};
