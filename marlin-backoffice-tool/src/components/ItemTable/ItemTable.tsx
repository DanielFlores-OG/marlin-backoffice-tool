import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Item } from "../../utils/types";
import { ColDef, RowClickedEvent } from "ag-grid-community";
import { searchItemHistory } from "../../api/api";

interface DataTableProps {
  data: Item[];
}

const ItemTable: React.FC<DataTableProps> = ({ data }) => {
  const columnDefs: ColDef<Item>[] = [
    {
      headerName: "Fulfillment Item ID",
      field: "id",
      sortable: true,
      filter: true,
      minWidth: 320,
    },
    {
      headerName: "External Item ID (SOPI)",
      field: "externalItemId",
      sortable: true,
      filter: true,
      minWidth: 320,
    },
    {
      headerName: "External Order ID (SOID)",
      field: "externalOrderId",
      sortable: true,
      filter: true,
      minWidth: 320,
    },
    {
      headerName: "External Order Detail No",
      field: "externalOrderDetailNo",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Order Number",
      field: "orderNumber",
      sortable: true,
      filter: true,
    },
    { headerName: "State", field: "state", sortable: true, filter: true },
    {
      headerName: "Warehouse Tracking ID",
      field: "warehouseTrackingIds",
      sortable: true,
      filter: true,
      valueGetter: (params) => params.data?.warehouseTrackingIds.join(", "),
    },
  ];

  const gridOptions = {
    defaultColDef: {
      resizable: true,
      filter: true,
    },
    overlayNoRowsTemplate:
      '<div class="no-rows-message">No items were found</div>',
  };

  const onRowClicked = (event: RowClickedEvent) => {
    searchItemHistory(event.data.externalItemId);
  };

  return (
    <div className="table-container">
      <div className="ag-theme-alpine">
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={false}
          onRowClicked={onRowClicked}
        />
      </div>
    </div>
  );
};

export default ItemTable;
