import React from "react";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
  Button,
} from "@mui/material";
import { dateTimeColumnFormatter } from "helpers/table";
import { ColorBadge } from "../ColorBadge/ColorBadge";
import { VerificationHistory } from "models/verification";
interface Props {
  data?: VerificationHistory[];
}

export const VerificationTable = ({ data }: Props) => {
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
      field: "date",
      headerName: "Date",
      sortable: false,
      filterable: false,
      resizable: false,
      minWidth: 250,
      valueFormatter: dateTimeColumnFormatter,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      sortable: false,
      filterable: false,
      resizable: false,
      renderCell: (params: GridValueGetterParams) => (
        <ColorBadge status={params.value as string} />
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
  const closeModal = () => setMessage(undefined);
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
      <Dialog onClose={closeModal} open={message != null} fullWidth>
        <DialogTitle>KYC request and response </DialogTitle>
        <DialogContent>{message}</DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>
            <strong>Close</strong>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
