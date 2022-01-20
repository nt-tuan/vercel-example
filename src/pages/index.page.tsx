import React from "react";
import { UserTable } from "components/user/UserTable";
import { useUsers } from "services/user";
import { User } from "models/user";
import { AdminLayout, getLayout } from "layouts/AdminLayout";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

const UsersPage = () => {
  const {
    getUsersKYC,
    getUsersEmailVerification,
    getUserDocumentVerification,
  } = useUsers();
  const filters = [
    {
      name: "KYC",
      detailPrefix: "/user/kyc",
      getUsers: getUsersKYC,
    },
    {
      name: "Email Verification",
      detailPrefix: "/user/email-verification",
      getUsers: getUsersEmailVerification,
    },
    {
      name: "Document Verification",
      detailPrefix: "/user/document-verification",
      getUsers: getUserDocumentVerification,
    },
  ];
  const [selected, setSelected] = React.useState<{
    name: string;
    detailPrefix: string;
    getUsers: () => Promise<User[]>;
  }>(filters[0]);
  const router = useRouter();
  const navigateTo = (prefix: string, user: User) => {
    const {
      marketplaceName,
      userId,
      firstName,
      lastName,
      phone,
      username,
      email,
      organizationName,
      country,
      role,
      userJoinedDate,
      status,
    } = user;
    const searchParams = new URLSearchParams({
      marketplaceName,
      userId,
      firstName,
      lastName,
      phone,
      username,
      email,
      organizationName,
      country,
      role,
      userJoinedDate,
      status,
    });
    router.push({
      pathname: prefix + "/" + user.id,
      search: searchParams.toString(),
    });
  };
  return (
    <div>
      <AdminLayout.Header>Users</AdminLayout.Header>
      <AdminLayout.Content>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ marginBottom: "20px", flexWrap: "wrap" }}
        >
          <span>Filtered by</span>
          {filters.map((item) => (
            <Box
              key={item.name}
              sx={{ paddingTop: "4px", paddingBottom: "4px" }}
            >
              <Chip
                label={item.name}
                color={item.name === selected?.name ? "primary" : undefined}
                onClick={() => setSelected(item)}
              />
            </Box>
          ))}
        </Stack>
        <UserTable
          onItemClick={(user) => navigateTo(selected.detailPrefix, user)}
          getUsers={selected.getUsers}
          type={selected.name}
        />
      </AdminLayout.Content>
    </div>
  );
};
UsersPage.getLayout = getLayout;

export default UsersPage;
