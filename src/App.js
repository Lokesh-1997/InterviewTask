import { useState } from "react";
import VendorTable from "./VendorTable";
import ProductLists from "./ProductLists";
import './App.css'


function App() {



  return (
    <div className="container mt-5">
      <VendorTable />
      <ProductLists />
    </div >
  );
}

export default App;
