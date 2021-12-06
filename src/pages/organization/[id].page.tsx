import React from "react";
import { AdminLayout, getLayout } from "layouts/AdminLayout";
import { Box, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { SessionTable } from "components/common/SessionTable/SessionTable";
import { Organization } from "models/organization";
import {
  getOrganizations,
  getOrganizationHistory,
} from "services/organization";
import { Session } from "models/session";

const OrganizationPage = () => {
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
        {organization?.organizationId ?? <Skeleton variant="text" />} |{" "}
        {organization?.organizationName ?? <Skeleton variant="text" />}
      </AdminLayout.Header>
      <Box sx={{ marginTop: "24px" }}>
        <SessionTable data={sessions} />
      </Box>
    </>
  );
};

OrganizationPage.getLayout = getLayout;
export default OrganizationPage;
