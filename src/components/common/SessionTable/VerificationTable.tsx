import React from "react";

import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
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
import { SessionHistory } from "models/session";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid } from "components/common/DataGrid/DataGrid";
import { useSessionTableContext } from "./SessionTable";
interface Props {
  data?: SessionHistory[];
}

export const VerificationTable = ({ data }: Props) => {
  const { type } = useSessionTableContext();
  const [message, setMessage] =
    React.useState<{ request: string; result: string }>();
  const viewMessage = (request: string, result: string) => {
    setMessage({ request, result });
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
      field: "createdDate",
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
            onClick={() => viewMessage(params.row.request, params.row.result)}
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
      />
      <Dialog onClose={closeModal} open={message != null} fullWidth>
        <DialogTitle>{type} request and response</DialogTitle>
        <DialogContent>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Request</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ wordBreak: "break-all" }}>
                {message?.request}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ wordBreak: "break-all" }}>Response</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{message?.result}</Typography>
            </AccordionDetails>
          </Accordion>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>
            <strong>Close</strong>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
