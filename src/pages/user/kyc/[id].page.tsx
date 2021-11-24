import React from "react";
import { getLayout } from "layouts/AdminLayout";
import { getUserKYCVerificationHistory } from "services/user";
import { UserVerificationContainer } from "components/user/UserVerificationContainer";

const Page = () => {
  return (
    <UserVerificationContainer getSessions={getUserKYCVerificationHistory} />
  );
};

Page.getLayout = getLayout;
export default Page;
