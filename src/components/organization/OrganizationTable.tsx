import { Organization } from "models/organization";
import { GridColDef, GridRowParams } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import { dateColumnFormatter } from "helpers/table";
import { DataGrid } from "components/common/DataGrid/DataGrid";
const columns: GridColDef[] = [
  {
    field: "marketplaceName",
    headerName: "Marketplace",
    minWidth: 250,
    sortable: false,
    filterable: false,
    resizable: false,
  },
  {
    field: "organizationName",
    headerName: "Company Name",
    minWidth: 130,
    flex: 1,
    sortable: false,
    filterable: false,
    resizable: false,
  },
  {
    field: "organizationJoinedDate",
    headerName: "Date Joined",
    sortable: false,
    filterable: false,
    resizable: false,
    minWidth: 200,
    valueFormatter: dateColumnFormatter,
  },
];

export const OrganizationTable = ({
  organizations,
}: {
  organizations?: Organization[];
}) => {
  const router = useRouter();
  const handleRowClick = (params: GridRowParams) => {
    router.push("/organization/" + params.row.id);
  };
  return (
    <DataGrid
      rows={organizations ?? []}
      columns={columns}
      loading={organizations == null}
      onRowClick={handleRowClick}
    />
  );
};
