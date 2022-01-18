import React from "react";
import {
  TableRow,
  TableCell,
  IconButton,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  Paper,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { formatDateTime } from "helpers/datetime";
import { VerificationTable } from "./VerificationTable";
import { ColorBadge } from "../ColorBadge/ColorBadge";
import { Session, SessionHistory } from "models/session";

const VerificationHistoryRow = ({
  historySessions,
}: {
  historySessions: SessionHistory[];
}) => {
  return (
    <TableRow>
      <TableCell colSpan={6}>
        <Box>
          <Typography variant="h5" component="div" gutterBottom>
            Verification History
          </Typography>
          <VerificationTable data={historySessions} />
        </Box>
      </TableCell>
    </TableRow>
  );
};

const Row = ({ row }: { row: Session }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.sessionNumber}
        </TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell>{formatDateTime(row.requestedDate)}</TableCell>
        <TableCell>
          <ColorBadge status={row.status} />
        </TableCell>
      </TableRow>
      {open && row.historyList && (
        <VerificationHistoryRow historySessions={row.historyList} />
      )}
    </>
  );
};

interface Props {
  data?: Session[];
}
export const SessionTable = ({ data }: Props) => {
  if (data == null) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Session ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Requested</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => <Row key={row.id} row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
