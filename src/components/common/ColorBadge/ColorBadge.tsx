import React from "react";
import { Chip } from "@mui/material";

interface Props {
  status: string;
  size?: "small" | "medium";
}
const colorMap: {
  [key: string]: "error" | "warning" | "info" | "success" | "default";
} = {
  fail: "error",
  progress: "info",
  pending: "warning",
  success: "success",
  verified: "success",
  inactive: "default",
  pass: "success",
};
const keys = Object.keys(colorMap);
export const ColorBadge = ({ status, size = "small" }: Props) => {
  const color = React.useMemo(() => {
    for (const key of keys) {
      if (status.includes(key)) {
        return colorMap[key];
      }
    }
    return "default";
  }, [status]);
  if (!status) return <></>;
  return (
    <Chip color={color} label={status.toString() ?? "default"} size={size} />
  );
};
