import { User, UserStatus } from "models/user";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { UserStatusBadge } from "./UserStatusBadge";
import { useRouter } from "next/router";
import { dateColumnFormatter } from "helpers/table";
const columns: GridColDef[] = [
  {
    field: "marketplace",
    headerName: "Marketplace",
    minWidth: 250,
    sortable: false,
    filterable: false,
    resizable: false,
  },
  {
    field: "username",
    headerName: "Username",
    minWidth: 130,
    flex: 1,
    sortable: false,
    filterable: false,
    resizable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 130,
    sortable: false,
    filterable: false,
    resizable: false,
  },
  {
    field: "role",
    headerName: "Role",
    width: 130,
    sortable: false,
    filterable: false,
    resizable: false,
  },
  {
    field: "dateJoined",
    headerName: "Date Joined",
    sortable: false,
    filterable: false,
    resizable: false,
    minWidth: 200,
    valueFormatter: dateColumnFormatter,
  },
  {
    field: "status",
    headerName: "Status",
    width: 180,
    sortable: false,
    filterable: false,
    resizable: false,
    renderCell: (params: GridValueGetterParams) =>
      params.value && (
        <UserStatusBadge
          status={
            UserStatus[params.value.toString() as keyof typeof UserStatus]
          }
        />
      ),
  },
];

export const UserTable = ({ users }: { users?: User[] }) => {
  const router = useRouter();
  const handleRowClick = (params: GridRowParams) => {
    router.push("/user/" + params.row.id);
  };
  return (
    <DataGrid
      rows={users ?? []}
      columns={columns}
      loading={users == null}
      hideFooter
      disableColumnMenu
      autoHeight
      onRowClick={handleRowClick}
    />
  );
};
