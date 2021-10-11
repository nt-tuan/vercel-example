import React from "react";
import { Trader } from "../../models/trader";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { KYCStatusBadge } from "./KYCStatusBadge";
import { KYCStatus } from "models/kyc";
import { useHistory } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "marketplace", headerName: "Marketplace", width: 130 },
  { field: "username", headerName: "Username", minWidth: 130, flex: 1 },
  { field: "email", headerName: "Email", width: 130 },
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
    width: 130,
    renderCell: (params: GridValueGetterParams) =>
      params.value && (
        <KYCStatusBadge
          status={KYCStatus[params.value.toString() as keyof typeof KYCStatus]}
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
