import { DataGrid as MUIDataGrid } from "@mui/x-data-grid";

export const DataGrid = (props: any) => {
  return <MUIDataGrid disableColumnMenu autoHeight {...props} />;
};
