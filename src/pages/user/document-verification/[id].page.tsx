import React from "react";
import { getLayout } from "layouts/AdminLayout";
import { useUsers } from "services/user";
import { UserVerificationContainer } from "components/user/UserVerificationContainer";

const Page = () => {
  const { getUserDocumentVerificationHistory } = useUsers();
  return (
    <UserVerificationContainer
      getSessions={getUserDocumentVerificationHistory}
    />
  );
};

Page.getLayout = getLayout;
export default Page;
