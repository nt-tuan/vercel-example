import React from "react";
import { TraderVerifyingResult as Model, TraderStatus } from "models/trader";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { TraderStatusBadge } from "./TraderStatusBadge";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { dateTimeColumnFormatter } from "helpers/table";
interface Props {
  data?: Model[];
}

export const TraderVerifyingTable = ({ data }: Props) => {
  const [message, setMessage] = React.useState<string>();
  const viewMessage = (actionMessage?: string) => {
    setMessage(actionMessage);
  };
  const columns: GridColDef[] = [
    {
      field: "id",
      hide: true,
    },
    {
      field: "date",
      headerName: "Date",
      sortable: false,
      filterable: false,
      resizable: false,
      minWidth: 200,
      valueFormatter: dateTimeColumnFormatter,
    },
    {
      field: "type",
      headerName: "Type",
      sortable: false,
      filterable: false,
      resizable: false,
    },
    {
      field: "provider",
      headerName: " Provider",
      minWidth: 130,
      flex: 1,
      sortable: false,
      filterable: false,
      resizable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      sortable: false,
      filterable: false,
      resizable: false,
      renderCell: (params: GridValueGetterParams) => (
        <TraderStatusBadge status={params.value as TraderStatus} />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      filterable: false,
      resizable: false,
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
