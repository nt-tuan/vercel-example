import { DataGrid as MUIDataGrid, DataGridProps } from "@mui/x-data-grid";

export const DataGrid = (props: DataGridProps) => {
  return <MUIDataGrid disableColumnMenu autoHeight {...props} />;
};
