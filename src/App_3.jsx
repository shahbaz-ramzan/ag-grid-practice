import React, { useEffect, useMemo, useState } from 'react'
// import '@ag-grid-community/styles/ag-grid.css';
// import '@ag-grid-community/styles/ag-theme-alpine.css';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModules } from "ag-grid-community"
// import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
// import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
// import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { AgGridReact } from 'ag-grid-react';

ModuleRegistry.registerModules([ClientSideRowModelModules, RangeSelectionModule, RichSelectModule])

function MyRenderer(params) {
    return (
        <span className='my-renderer'>
            <img src="https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif" className="my-spinner" />
            {params.value}
        </span>
    )
}
function App_3() {

    const columDefs = useMemo(() => [
        { field: "athlete" },
        { field: "age", cellRenderer: MyRenderer },
        { field: "country" },
        { field: "year" },
        { field: "date" },
        { field: "sport" },
        { field: "gold" },
        { field: "silver" },
        { field: "bronze" },
        { field: "total" }

    ], [])

    const defaultColDef = useMemo(() => ({
        resizable: true,
        sortable: true
    }), []);

    const [rowData, setRowData] = useState();

    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then(resp => resp.json())
            .then(data => setRowData(data));
    }, []);

    return (
        <div><h1>App_3</h1>
            <AgGridReact
                className="ag-theme-alpine"
                animateRows="true"
                columnDefs={columDefs}
                defaultColDef={defaultColDef}
                enableRangeSelection="true"
                rowData={rowData}
                rowSelection="multiple"
                suppressRowClickSelection="true"
            />
        </div>

    )
}

export default App_3