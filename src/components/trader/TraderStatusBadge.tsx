import { Chip } from "@mui/material";
import { TraderStatus, KYCStatusLabel } from "models/trader";

const statusColor: {
  [key in TraderStatus]: "error" | "warning" | "info" | "success" | "default";
} = {
  [TraderStatus.FAILED]: "error",
  [TraderStatus.IN_PROGRESS]: "warning",
  [TraderStatus.PENDING_EMAIL]: "info",
  [TraderStatus.PASSED]: "success",
  [TraderStatus.EMAIL_VERIFIED]: "success",
  [TraderStatus.INACTIVE]: "default",
};
export interface TraderStatusBadgeProps {
  status?: TraderStatus;
  size?: "small" | "medium";
}
export const TraderStatusBadge = ({ status, size }: TraderStatusBadgeProps) => {
  if (!status) return <></>;
  return (
    <Chip
      color={statusColor[status]}
      label={KYCStatusLabel[status] ?? "default"}
      size={size}
    />
  );
};
