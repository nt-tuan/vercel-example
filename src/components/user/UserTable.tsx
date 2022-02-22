import React from "react";
import { User } from "models/user";
import { GridColDef, GridRowParams } from "@mui/x-data-grid";
import { dateColumnFormatter } from "helpers/table";
import { DataGrid } from "components/common/DataGrid/DataGrid";
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
    field: "email",
    headerName: "Email",
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
      onRowClick={handleRowClick}
    />
  );
};
