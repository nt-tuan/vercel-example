import { Organization } from "models/organization";
import {
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { ColorBadge } from "components/common/ColorBadge/ColorBadge";
import { useRouter } from "next/router";
import { dateColumnFormatter } from "helpers/table";
import { DataGrid } from "components/common/DataGrid/DataGrid";
const columns: GridColDef[] = [
  {
    field: "organizationId",
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
  {
    field: "status",
    headerName: "Status",
    width: 180,
    sortable: false,
    filterable: false,
    resizable: false,
    renderCell: (params: GridValueGetterParams) =>
      params.value && (
        <ColorBadge status={params.value as string} size="medium" />
      ),
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
