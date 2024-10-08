import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ItemHistory } from "../../utils/types";
import { ColDef } from "ag-grid-community";
import { useData } from "../../hooks/useData";

interface ItemHistoryTableProps {
  itemHistory: ItemHistory[];
}

const ItemHistoryTable: React.FC<ItemHistoryTableProps> = ({ itemHistory }) => {
  const error = useData((state) => state.historyError);
  const loading = useData((state) => state.historyLoading);

  const tableMessage = `<div class="no-rows-message">${
    error || "No history was found"
  }</div> `;

  const columnDefs: ColDef<ItemHistory>[] = [
    {
      headerName: "Event ID",
      field: "id",
      sortable: true,
      filter: true,
      minWidth: 200,
    },
    {
      headerName: "External Item ID",
      field: "externalItemId",
      sortable: true,
      filter: true,
      minWidth: 320,
    },
    {
      headerName: "Created At",
      field: "createdAt",
      sortable: true,
      filter: true,
      valueFormatter: (params) => new Date(params.value).toLocaleString(),
      minWidth: 200,
    },
    {
      headerName: "Event",
      field: "event",
      sortable: true,
      filter: true,
    },
  ];

  const gridOptions = {
    defaultColDef: {
      resizable: true,
      filter: true,
    },
  };

  return (
    <div
      className="table-container"
      style={{ maxWidth: 1200, margin: "30px auto 0", minHeight: 200 }}
    >
      <div className="ag-theme-alpine">
        <AgGridReact
          rowData={itemHistory}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={false}
          loading={loading}
          overlayNoRowsTemplate={tableMessage}
        />
      </div>
    </div>
  );
};

export default ItemHistoryTable;
