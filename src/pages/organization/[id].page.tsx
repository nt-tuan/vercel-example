import React from "react";
import { AdminLayout, getLayout } from "layouts/AdminLayout";
import { Box, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { SessionTable } from "components/common/SessionTable/SessionTable";
import { Organization } from "models/organization";
import { useOrganisations } from "services/organization";
import { Session } from "models/session";

const OrganizationPage = () => {
  const { getOrganizations, getOrganizationHistory } = useOrganisations();
  const [organizations, setOrganizations] = React.useState<Organization[]>();
  const [sessions, setSessions] = React.useState<Session[]>();
  const router = useRouter();
  const { id } = router.query;
  const organization = organizations?.find((item) => item.id === id);

  React.useEffect(() => {
    if (typeof id !== "string") return;
    getOrganizations().then(setOrganizations);
    getOrganizationHistory(id).then(setSessions);
  }, [id]);
  return (
    <>
      <AdminLayout.Header>
        {!organization?.organizationId && !organization?.organizationName ? (
          <Skeleton width={320} variant="text" />
        ) : (
          <>
            {organization?.organizationId} | {organization?.organizationName}
          </>
        )}
      </AdminLayout.Header>
      <Box sx={{ marginTop: "24px" }}>
        <SessionTable data={sessions} />
      </Box>
    </>
  );
};

OrganizationPage.getLayout = getLayout;
export default OrganizationPage;
