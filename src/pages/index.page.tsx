import React from "react";
import { UserTable } from "components/user/UserTable";
import { getUsers } from "services/user";
import { User } from "models/user";
import { AdminLayout, getLayout } from "layouts/AdminLayout";

const UsersPage = () => {
  const [users, setUsers] = React.useState<User[]>();
  React.useEffect(() => {
    let subscription = true;
    getUsers().then((resposne) => {
      if (!subscription) return;
      setUsers(resposne);
    });
    return () => {
      subscription = false;
    };
  }, []);
  return (
    <div>
      <AdminLayout.Header>Users</AdminLayout.Header>
      <AdminLayout.Content>
        <UserTable users={users} />
      </AdminLayout.Content>
    </div>
  );
};
UsersPage.getLayout = getLayout;

export default UsersPage;
