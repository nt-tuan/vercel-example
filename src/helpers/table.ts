import { GridValueFormatterParams } from "@mui/x-data-grid";
import { formatDateTime } from "helpers/datetime";
export const dateTimeColumnFormatter = (params: GridValueFormatterParams) => {
  if (params?.value && typeof params.value === "string") {
    return formatDateTime(params.value);
  }
  return "";
};
