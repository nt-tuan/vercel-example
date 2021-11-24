import React from "react";
import { getLayout } from "layouts/AdminLayout";
import { getUserDocumentVerificationHistory } from "services/user";
import { UserVerificationContainer } from "components/user/UserVerificationContainer";

const Page = () => {
  return (
    <UserVerificationContainer
      getSessions={getUserDocumentVerificationHistory}
    />
  );
};

Page.getLayout = getLayout;
export default Page;
