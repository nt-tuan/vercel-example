import React from "react";
import { VerificationSession } from "models/user";
import { UserStatusBadge } from "./UserStatusBadge";
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
import { UserVerifyingTable } from "../common/SessionTable/VerificationTable";
import { getUserVerificationHistory } from "services/user";
import { VerificationHistory } from "models/verification";
interface Props {
  data?: VerificationSession[];
}

const VerificationHistorySection = ({ sessionID }: { sessionID: string }) => {
  const [history, setHistory] = React.useState<VerificationHistory[]>();
  React.useEffect(() => {
    getUserVerificationHistory().then(setHistory);
  });
  return (
    <TableRow>
      <TableCell colSpan={6}>
        <Box>
          <Typography variant="h5" component="div" gutterBottom>
            Verification History
          </Typography>
          <UserVerifyingTable data={history} />
        </Box>
      </TableCell>
    </TableRow>
  );
};

const Row = ({ row }: { row: VerificationSession }) => {
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
          {row.sessionID}
        </TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell>{formatDateTime(row.requested)}</TableCell>
        <TableCell>
          <UserStatusBadge status={row.status} />
        </TableCell>
      </TableRow>
      {open && <VerificationHistorySection sessionID={row.sessionID} />}
    </>
  );
};

export const VerificationSessionTable = ({ data }: Props) => {
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
          {data && data.map((row) => <Row key={row.sessionID} row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
