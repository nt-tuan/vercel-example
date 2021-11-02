import { Chip } from "@mui/material";
import { VerificationStatus } from "models/verification";

const statusColor: {
  [key in VerificationStatus]:
    | "error"
    | "warning"
    | "info"
    | "success"
    | "default";
} = {
  [VerificationStatus.PASSED]: "success",
  [VerificationStatus.IN_PROGRESS]: "info",
  [VerificationStatus.FAILED]: "error",
};
export interface UserStatusBadgeProps {
  status?: VerificationStatus;
  size?: "small" | "medium";
}
export const VerificationStatusBadge = ({
  status,
  size = "small",
}: UserStatusBadgeProps) => {
  if (!status) return <></>;
  return (
    <Chip
      color={statusColor[status]}
      label={status.toString() ?? "default"}
      size={size}
    />
  );
};
