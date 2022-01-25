import React from "react";
import { AdminLayout, getLayout } from "layouts/AdminLayout";
import { Box, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { SessionTable } from "components/common/SessionTable/SessionTable";
import { Organization } from "models/organization";
import {
  OrganizationVerificationHistory,
  useOrganisations,
} from "services/organization";
import { Session } from "models/session";

const OrganizationPage = () => {
  const { getOrganizations, getOrganizationHistory } = useOrganisations();
  // const [organizations, setOrganizations] = React.useState<Organization[]>();
  // const [sessions, setSessions] = React.useState<Session[]>();
  const router = useRouter();
  const { id } = router.query;
  // const organization = organizations?.find((item) => item.id === id);
  const [organizationVerification, setOrganiationVerification] =
    React.useState<OrganizationVerificationHistory>();

  React.useEffect(() => {
    if (typeof id !== "string") return;
    getOrganizationHistory(id).then(setOrganiationVerification);
  }, [id]);
  return (
    <>
      <AdminLayout.Header>
        {organizationVerification?.organizationName ?? (
          <Skeleton width={320} variant="text" />
        )}
      </AdminLayout.Header>
      <Box sx={{ marginTop: "24px" }}>
        <SessionTable data={organizationVerification?.sessionList} />
      </Box>
    </>
  );
};

OrganizationPage.getLayout = getLayout;
export default OrganizationPage;
