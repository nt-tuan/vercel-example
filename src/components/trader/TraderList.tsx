import { Trader, TraderStatus } from "models/trader";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { TraderStatusBadge } from "./TraderStatusBadge";
import { useHistory } from "react-router-dom";

const columns: GridColDef[] = [
  {
    field: "marketplace",
    headerName: "Marketplace",
    width: 130,
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
    field: "dateJoined",
    headerName: "Date Joined",
    sortable: false,
    filterable: false,
    resizable: false,
    width: 130,
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
        <TraderStatusBadge
          status={
            TraderStatus[params.value.toString() as keyof typeof TraderStatus]
          }
        />
      ),
  },
];

export const TraderList = ({ traders }: { traders?: Trader[] }) => {
  const history = useHistory();
  const handleRowClick = (params: GridRowParams) => {
    history.push({ pathname: "/trader/" + params.row.id });
  };
  return (
    <DataGrid
      rows={traders ?? []}
      columns={columns}
      loading={traders == null}
      hideFooter
      disableColumnMenu
      autoHeight
      onRowClick={handleRowClick}
    />
  );
};
