import React from "react";
import { getOrganizations } from "services/organization";
import { Organization } from "models/organization";
import { OrganizationTable } from "components/organization/OrganizationTable";
import { getLayout } from "layouts/AdminLayout";
const OrganizationPage = () => {
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

OrganizationPage.getLayout = getLayout;
export default OrganizationPage;
