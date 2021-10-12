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
interface Props {
  status?: TraderStatus;
  size?: "small" | "medium";
}
export const TraderStatusBadge = ({ status, size }: Props) => {
  if (!status) return <></>;
  return (
    <Chip
      color={statusColor[status]}
      label={KYCStatusLabel[status] ?? "default"}
      size={size}
    />
  );
};
