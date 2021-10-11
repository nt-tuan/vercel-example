import { Chip } from "@mui/material";
import { KYCStatus, KYCStatusLabel } from "../../models/kyc";

const statusColor: {
  [key in KYCStatus]: "error" | "warning" | "info" | "success" | "default";
} = {
  [KYCStatus.FAILED]: "error",
  [KYCStatus.IN_PROGRESS]: "warning",
  [KYCStatus.PENDING_EMAIL]: "info",
  [KYCStatus.PASSED]: "success",
  [KYCStatus.EMAIL_VERIFIED]: "success",
  [KYCStatus.INACTIVE]: "default",
};
interface Props {
  status?: KYCStatus;
  size?: "small" | "medium";
}
export const KYCStatusBadge = ({ status, size }: Props) => {
  if (!status) return <></>;
  return (
    <Chip
      color={statusColor[status]}
      label={KYCStatusLabel[status] ?? "default"}
      size={size}
    />
  );
};
