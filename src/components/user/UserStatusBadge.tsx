import { Chip } from "@mui/material";

const statusColor: {
  [key: string]: "error" | "warning" | "info" | "success" | "default";
} = {
  FAILED: "error",
  IN_PROGRESS: "info",
  PENDING_EMAIL: "warning",
  PASSED: "success",
  EMAIL_VERIFIED: "success",
  PENDING: "warning",
  INACTIVE: "default",
};
export interface UserStatusBadgeProps {
  status?: string;
  size?: "small" | "medium";
}
export const UserStatusBadge = ({ status, size }: UserStatusBadgeProps) => {
  if (!status) return <></>;
  return <Chip color={statusColor[status]} label={status} size={size} />;
};
