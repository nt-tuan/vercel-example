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
import { VerificationHistory } from "models/verification";
import { ColorBadge } from "../ColorBadge/ColorBadge";

type GetSessionType = (id: string) => Promise<VerificationHistory[]>;
const VerificationHistoryRow = ({
  getSession,
  sessionID,
}: {
  getSession: GetSessionType;
  sessionID: string;
}) => {
  const [history, setHistory] = React.useState<VerificationHistory[]>();
  React.useEffect(() => {
    getSession(sessionID).then(setHistory);
  }, [getSession, sessionID]);
  return (
    <TableRow>
      <TableCell colSpan={6}>
        <Box>
          <Typography variant="h5" component="div" gutterBottom>
            Verification History
          </Typography>
          <VerificationTable data={history} />
        </Box>
      </TableCell>
    </TableRow>
  );
};

interface RowType {
  sessionID: string;
  type: string;
  requested: string;
  status: string;
}
const Row = ({
  row,
  getSession,
}: {
  row: RowType;
  getSession: GetSessionType;
}) => {
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
          <ColorBadge status={row.status} />
        </TableCell>
      </TableRow>
      {open && (
        <VerificationHistoryRow
          sessionID={row.sessionID}
          getSession={getSession}
        />
      )}
    </>
  );
};

interface Props {
  data?: RowType[];
  getSession: GetSessionType;
}
export const VerificationSessionTable = ({ data, getSession }: Props) => {
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
          {data &&
            data.map((row) => (
              <Row key={row.sessionID} row={row} getSession={getSession} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
