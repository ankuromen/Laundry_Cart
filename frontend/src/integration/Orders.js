import React from 'react'
import "../App.css"
import statusabc from "./statusimg.png";

import { Drawer, Button } from 'rsuite';
const Orders = ({ orders }) => {
    const [openWithHeader, setOpenWithHeader] = React.useState(false);
    let [orderToBeDeleted, setOrderToBeDeleted] = React.useState(null);

    const handleCancelOrder = async () => {
        let token = localStorage.getItem("token")
        if (token) {
            let authtoken = JSON.parse(token)
            console.log("authtoken  ", authtoken)

            let options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `test ${authtoken}`
                },

            };

            fetch(`https://laundry-cart-api.vercel.app/api/orders/${orderToBeDeleted}`, options)
                .then(response => {
                    if (response.ok) {
                        alert("Order deleted Successfully");
                        setOrderToBeDeleted(null);
                    }
                })

                .catch(error => alert('error', error));
        }

    };

    const handleClickDel = (ids) => {
        setOrderToBeDeleted(ids);
        handleCancelOrder();
    }


    return (
        <>
            <table className='ShowOrder-table'>
                <thead className='Heading-ShowOrder-table'>
                    <tr>
                        <th>Order ID</th>
                        <th>Date & Time</th>
                        <th>Store Location</th>
                        <th>City</th>
                        <th>Store Phone</th>
                        <th>Total Items</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr className='ShowOrder-table-rows' key={index}>
                            <td>{order.orderId}</td>
                            <td>{new Date(order.clicktime).toLocaleString()}</td>
                            <td>JP Nagar</td>
                            <td>Bangalore</td>
                            <td>9999999999</td>
                            <td>{order.quantity}</td>
                            <td>Rs {order.total + 90}</td>
                            <td>Ready To Pickup</td>
                            <td> <button id="Cancel-order" onClick={() => handleClickDel(order.orderId)}>Cancel Order</button></td>
                            <td><img id='eye' onClick={() => setOpenWithHeader(true)} src='https://banner2.cleanpng.com/20180420/jaw/kisspng-eye-computer-icons-eye-pupil-5ad968a012bfe4.2922474615241975360768.jpg' alt='eye' ></img></td>

                            <Drawer open={openWithHeader} onClose={() => setOpenWithHeader((false))}>
                                <Drawer.Header>
                                    <Drawer.Title>Summary</Drawer.Title>
                                    <Drawer.Actions>
                                        <Button appearance="primary" onClick={() => handleClickDel(order.orderId)}>Cancel Order</Button>
                                    </Drawer.Actions>
                                </Drawer.Header>
                                <Drawer.Body>

                                    <div className='Store-details'>
                                        <span><b>Store:</b>J P Nagar <b>Phone:</b> 999999999 <b>City:</b> Bangalore </span>  </div>
                                    <div>
                                        <img src={statusabc} id="statusimg" alt='status' />
                                        <h4>Order Details:</h4>
                                        <table className='Display-Table'>
                                            <tr>
                                                <th>Item</th>
                                                <th></th>
                                                <th>Work</th>
                                                <th>Quantity</th>
                                                <th>Total Cost</th>
                                            </tr>
                                            {order.items.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td></td>
                                                    <td>
                                                        {Object.keys(item.checkboxes).map((checkbox, index) => (
                                                            item.checkboxes[checkbox] && (
                                                                <span key={index}>{checkbox},</span>
                                                            )
                                                        ))}
                                                    </td>

                                                    <td>{item.quantity}</td>
                                                    <th>{item.price}</th>
                                                </tr>
                                            )}


                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>Subtotal</td>
                                                <td>{order.total}</td>

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>Pickup Charges</td>
                                                <td>90</td>
                                            </tr>
                                            <tr>
                                                <td id='totalcolor'></td>
                                                <td id='totalcolor'></td>
                                                <td id='totalcolor'></td>
                                                <td id='totalcolor'>Total-Rs</td>
                                                <td id="totalcolor">{order.total + 90}</td>
                                            </tr>
                                        </table>

                                    </div>
                                </Drawer.Body>

                            </Drawer >
                        </tr>

                    ))}
                </tbody>
            </table>

            <div className='CopyR' id="Common-Foot"> 2021 © LAUNDRY</div>
        </>

    )
}

export default Orders
