import React from "react";
import { getLayout } from "layouts/AdminLayout";
import { getUserEmailVerificationHistory } from "services/user";
import { UserVerificationContainer } from "components/user/UserVerificationContainer";

const Page = () => {
  return (
    <UserVerificationContainer getSessions={getUserEmailVerificationHistory} />
  );
};

Page.getLayout = getLayout;
export default Page;
