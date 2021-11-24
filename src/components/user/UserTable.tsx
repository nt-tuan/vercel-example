import React from "react";
import { User } from "models/user";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { dateColumnFormatter } from "helpers/table";
import { ColorBadge } from "components/common/ColorBadge/ColorBadge";
const getColumns: (type: string) => GridColDef[] = (type) => [
  {
    field: "marketplaceName",
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
    field: "userJoinedDate",
    headerName: "Date Joined",
    sortable: false,
    filterable: false,
    resizable: false,
    minWidth: 200,
    valueFormatter: dateColumnFormatter,
  },
  {
    field: "type",
    headerName: "Type",
    width: 180,
    sortable: false,
    filterable: false,
    resizable: false,
    renderCell: () => <span>{type}</span>,
  },
  {
    field: "status",
    headerName: "Status",
    width: 180,
    sortable: false,
    filterable: false,
    resizable: false,
    renderCell: (params: GridValueGetterParams) =>
      params.value && <ColorBadge status={params.value.toString()} />,
  },
];

export const UserTable = ({
  getUsers,
  onItemClick,
  type,
}: {
  getUsers: () => Promise<User[]>;
  onItemClick: (user: User) => void;
  type: string;
}) => {
  const [users, setUsers] = React.useState<User[]>();
  React.useEffect(() => {
    getUsers().then(setUsers);
  }, [getUsers]);
  const handleRowClick = (params: GridRowParams) => {
    onItemClick(params.row as User);
  };
  const columns = getColumns(type);
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
