import "./App.css";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// import { useState } from "react";

function App1_grid() {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000, engine: "2500" },
    { make: "Ford", model: "Modea", price: 32000, engine: "3200" },
    { make: "Suzuki", model: "Alto", price: 72000, engine: "600" },
    { make: "Honda", model: "Civic", price: 72000, engine: "1600" },
    { make: "Kia", model: "Sportage", price: 72000, engine: "1600" },
    { make: "Newholand", model: "New", price: 72000, engine: "1600" },
    { make: "Toyota", model: "Celica", price: 35000, engine: "1600" },
    { make: "Ford", model: "Modea", price: 32000, engine: "1600" },
    { make: "Suzuki", model: "Alto", price: 72000, engine: "1600" },
    { make: "Honda", model: "Civic", price: 72000, engine: "1600" },
    { make: "Kia", model: "Sportage", price: 72000, engine: "1600" },
    { make: "Newholand", model: "New", price: 72000, engine: "1600" },
    { make: "Newholand", model: "New", price: 72000, engine: "1600" },
  ]);
  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "engine" },
  ]);
  return (
    <div className="ag-theme-alpine" style={{ height: 556, width: 850 }}>
      {/* <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact> */}
      {/* <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact> */}
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}

export default App1_grid;
