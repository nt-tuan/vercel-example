import React from "react";
import { getLayout } from "layouts/AdminLayout";
import { useUsers } from "services/user";
import { UserVerificationContainer } from "components/user/UserVerificationContainer";

const Page = () => {
  const { getUserEmailVerificationHistory } = useUsers();
  return (
    <UserVerificationContainer
      type="KYC"
      getSessions={getUserEmailVerificationHistory}
    />
  );
};

Page.getLayout = getLayout;
export default Page;
