import React from "react";
import { TraderVerifyingResult as Model, TraderStatus } from "models/trader";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { IconButton } from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { TraderStatusBadge } from "./TraderStatusBadge";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
interface Props {
  data?: Model[];
}

export const TraderVerifyingTable = ({ data }: Props) => {
  const [message, setMessage] = React.useState<string>();
  const handleRowClick = () => {};
  const viewMessage = (message?: string) => {
    setMessage(message);
  };
  const columns: GridColDef[] = [
    {
      field: "id",
      hide: true,
    },
    {
      field: "date",
      headerName: "Date",
    },
    {
      field: "type",
      headerName: "Type",
    },
    {
      field: "provider",
      headerName: " Provider",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params: GridValueGetterParams) => (
        <TraderStatusBadge status={params.value as TraderStatus} />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params: GridValueGetterParams) => {
        return (
          <IconButton
            title="View message"
            onClick={() => viewMessage(params.row.message)}
          >
            <VisibilityIcon />
          </IconButton>
        );
      },
    },
  ];
  return (
    <>
      <DataGrid
        rows={data ?? []}
        columns={columns}
        columnBuffer={columns.length}
        loading={data == null}
        hideFooter
        disableColumnMenu
        autoHeight
        onRowClick={handleRowClick}
      />
      <Dialog
        onClose={() => setMessage(undefined)}
        open={message != null}
        fullWidth
      >
        <DialogTitle>KYC request and response </DialogTitle>
        <DialogContent>{message}</DialogContent>
      </Dialog>
    </>
  );
};
