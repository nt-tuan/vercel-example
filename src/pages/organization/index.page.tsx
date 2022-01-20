import React from "react";
import { useOrganisations } from "services/organization";
import { Organization } from "models/organization";
import { OrganizationTable } from "components/organization/OrganizationTable";
import { getLayout } from "layouts/AdminLayout";
const OrganizationPages = () => {
  const { getOrganizations } = useOrganisations();
  const [data, setData] = React.useState<Organization[]>();
  React.useEffect(() => {
    let subscription = true;
    getOrganizations().then((resposne) => {
      if (!subscription) return;
      setData(resposne);
    });
    return () => {
      subscription = false;
    };
  }, []);
  return <OrganizationTable organizations={data} />;
};

OrganizationPages.getLayout = getLayout;
export default OrganizationPages;
