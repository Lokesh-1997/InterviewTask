import React from 'react'
import data from "./data";
import Table from 'react-bootstrap/Table';
import Dtable from "./DiscountTable";

function VendorTable() {
    return (
        <div>
            <div className="d-flex justify-content-center mt-1">
                <h1 className="mt-2">
                    PIPERSEDGE TECHNOLOGY!
                </h1>
            </div>
            <Table className="mt-5" striped bordered >
                <thead  >
                    <tr>
                        <th className="bg-black text-white ">Vendor</th>
                        <th className="bg-black text-white ">Table A</th>
                        <th className="bg-black text-white ">Table B</th>
                        <th className="bg-black text-white ">Table C</th>
                        <th className="bg-black text-white ">Table D</th>
                    </tr>
                </thead>
                <tbody>
                    {Dtable.map((a) => {
                        return <tr>
                            <td>{a.Vendor}</td>
                            <td>{a['TRADE A']}</td>
                            <td>{a['TRADE B']}</td>
                            <td>{a["TRADE C"]}</td>
                            <td>{a["TRADE D"]}</td>
                        </tr>
                    }
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default VendorTable