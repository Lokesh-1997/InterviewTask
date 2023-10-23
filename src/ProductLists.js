import React, { useState } from 'react'
import data from "./data";
import Table from 'react-bootstrap/Table';
import Dtable from "./DiscountTable";

function ProductLists() {
    const [lists, setList] = useState([{
        "id": '',
        "name": '',
        "price": '',
        "vendor": '',
        "cart": '',
        "discountpercentage": '',
        "discountprice": '',
    }])
    const [total, setTotal] = useState(0);
    const Handleindex = (datas, idx) => {
        (data.map(() => {

            // Discount Price Rate Handling

            for (let i = 0; i < 5; i++) {
                let DataVendor = datas.vendor;
                let DataTag = datas.tags;
                let OriPrice = datas.price
                var DiscountedPrice;
                var DiscountRate;
                if (DataVendor === Dtable[i].Vendor) {
                    DiscountRate = (Dtable[i][DataTag]);

                    let DiscountAmt = (OriPrice * DiscountRate / 100).toFixed(2)

                    if (OriPrice - DiscountAmt) {
                        DiscountedPrice = OriPrice - DiscountAmt;

                    }
                    else {
                        DiscountedPrice = OriPrice;
                    }
                    let value = total + DiscountedPrice;
                    setTotal(value)
                }
            }
            //  ------------- End ------------------
            let UpdatedData = { ...datas, "discountpercentage": DiscountRate, "discountprice": DiscountedPrice, "cart": "Remove From Cart" };
            setList([...lists, UpdatedData]);
        }
        )
        )
    }
    const HandleDelete = (targetIndex) => {
        setList(lists.filter((data, idx) => {
            var val = data.discountprice;
            if (idx == targetIndex) {
                setTotal(total - val)
                console.log(val);
            }
            return idx !== targetIndex;
        }
        ))
    }
    return (
        <div>

            <div className="container mt-5">
                <div className="d-flex justify-content-center mt-1">
                    <h1 className="mt-2">
                        Product Table
                    </h1>
                </div>
            </div>


            <Table className="mt-5" striped bordered>
                <thead>
                    <tr  >
                        <th className="bg-black text-white">#</th>
                        <th className="bg-black text-white">Product Name </th>
                        <th className="bg-black text-white">Price</th>
                        <th className="bg-black text-white">Tags</th>
                        <th className="bg-black text-white">Vendor</th>
                        <th className="bg-black text-white">Cart</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        data.map((datas, idx) => {
                            return <tr>
                                <td >{datas.id}</td>
                                <td >{datas.name}</td>
                                <td >{datas.price}</td>
                                <td>{datas.tags}</td>
                                <td>{datas.vendor}</td>
                                <td className='button' onClick={() => Handleindex(datas, idx)}>{datas.cart}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table >
            <div className="d-flex justify-content-center mt-5">
                <h1 className="mt-5">
                    Shopping Cart
                </h1>
            </div>
            {/* Shopping cart */}
            <Table className="mt-5">
                <thead>
                    <tr>
                        <th className="bg-black text-white">#</th>
                        <th className="bg-black text-white">Product Name </th>
                        <th className="bg-black text-white">Org Price</th>
                        <th className="bg-black text-white">Discount Percentage %</th>
                        <th className="bg-black text-white">Discounted Price</th>
                        <th className="bg-black text-white">Vendor</th>
                        <th className="bg-black text-white">Remove Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lists.map((a, idx) => {
                            return <tr>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td>{a.discountpercentage}</td>
                                <td>{a.discountprice}</td>
                                <td>{a.vendor}</td>
                                <td className='buttons' onClick={() => HandleDelete(idx)}> {a.cart}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <div className="d-flex justify-content-center mt-1">
                <h1 className="mt-1">
                    Total Price = {total.toFixed(1)}
                </h1>
            </div>
        </div >
    )
}
export default ProductLists