import React from "react";
import { Chip } from "@mui/material";
import { UserStatus } from "models/user";
import { VerificationStatus } from "models/verification";
import { OrganizationStatus } from "models/organization";

interface Props {
  status: string;
  size?: "small" | "medium";
}
const colorMap: {
  [key: string]: "error" | "warning" | "info" | "success" | "default";
} = {
  [UserStatus.FAILED as string]: "error",
  [UserStatus.IN_PROGRESS as string]: "info",
  [UserStatus.PENDING_EMAIL as string]: "warning",
  [UserStatus.PASSED as string]: "success",
  [UserStatus.EMAIL_VERIFIED as string]: "success",
  [UserStatus.PENDING as string]: "warning",
  [UserStatus.INACTIVE as string]: "default",
  [VerificationStatus.PASSED as string]: "success",
  [VerificationStatus.IN_PROGRESS as string]: "info",
  [VerificationStatus.FAILED as string]: "error",
  [OrganizationStatus.PASSED as string]: "success",
  [OrganizationStatus.FAILED as string]: "error",
  [OrganizationStatus.PENDING as string]: "warning",
  [OrganizationStatus.IN_PROGRESS as string]: "info",
};
export const ColorBadge = ({ status, size = "small" }: Props) => {
  const color = React.useMemo(() => {
    const matchColor = colorMap[status];
    if (matchColor == null) return "default";
    return matchColor;
  }, [status]);
  if (!status) return <></>;
  return (
    <Chip color={color} label={status.toString() ?? "default"} size={size} />
  );
};
