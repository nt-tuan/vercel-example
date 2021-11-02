import { Chip } from "@mui/material";
import { UserStatus, UserStatusLabel } from "models/user";

const statusColor: {
  [key in UserStatus]: "error" | "warning" | "info" | "success" | "default";
} = {
  [UserStatus.FAILED]: "error",
  [UserStatus.IN_PROGRESS]: "info",
  [UserStatus.PENDING_EMAIL]: "warning",
  [UserStatus.PASSED]: "success",
  [UserStatus.EMAIL_VERIFIED]: "success",
  [UserStatus.PENDING]: "warning",
  [UserStatus.INACTIVE]: "default",
};
export interface UserStatusBadgeProps {
  status?: UserStatus;
  size?: "small" | "medium";
}
export const UserStatusBadge = ({ status, size }: UserStatusBadgeProps) => {
  if (!status) return <></>;
  return (
    <Chip
      color={statusColor[status]}
      label={UserStatusLabel[status] ?? "default"}
      size={size}
    />
  );
};
