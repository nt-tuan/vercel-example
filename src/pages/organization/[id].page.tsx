import React from "react";
import { AdminLayout, getLayout } from "layouts/AdminLayout";
import { Box, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { VerificationSessionTable } from "components/common/SessionTable/SessionTable";
import {
  OrganizationContact,
  OrganizationVerificationSession,
} from "models/organization";
import {
  getOrganizationContact,
  getOrganizationVerificationHistory,
  getOrganizationVerificationSessions,
} from "services/organization";

const OrganizationPage = () => {
  const [organization, setOrganization] = React.useState<OrganizationContact>();
  const [sessions, setSessions] =
    React.useState<OrganizationVerificationSession[]>();
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    if (typeof id !== "string") return;
    getOrganizationContact().then(setOrganization);
    getOrganizationVerificationSessions().then(setSessions);
  }, [id]);
  return (
    <>
      <AdminLayout.Header>
        {organization?.marketplace ?? <Skeleton variant="text" />} |{" "}
        {organization?.companyName ?? <Skeleton variant="text" />}
      </AdminLayout.Header>
      <Box sx={{ marginTop: "24px" }}>
        <VerificationSessionTable
          data={sessions}
          getSession={getOrganizationVerificationHistory}
        />
      </Box>
    </>
  );
};

OrganizationPage.getLayout = getLayout;
export default OrganizationPage;
