import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { Drawer, Button } from 'rsuite';





const CreateOrder = () => {
    let navigate = useNavigate();
    let [shirtQuantity, setshirtQuantity] = useState(0);
    let [tShirtQuantity, settShirtQuantity] = useState(0);
    let [trousersQuantity, settrousersQuantity] = useState(0);
    let [jeansQuantity, setjeansQuantity] = useState(0);
    let [boxerQuantity, setboxerQuantity] = useState(0);
    let [joggersQuantity, setjoggersQuantity] = useState(0);
    let [othersQuantity, setothersQuantity] = useState(0);

    //Reset Button
    let clearValues1 = () => {
        setshirtQuantity(0);
        setCheckboxes1({ wash: false, iron: false, towel: false, bleach: false });
    }
    let clearValues2 = () => {
        settShirtQuantity(0);
        setCheckboxes2({ wash: false, iron: false, towel: false, bleach: false });
    }
    let clearValues3 = () => {
        settrousersQuantity(0);
        setCheckboxes3({ wash: false, iron: false, towel: false, bleach: false });
    }
    let clearValues4 = () => {
        setjeansQuantity(0);
        setCheckboxes4({ wash: false, iron: false, towel: false, bleach: false });
    }
    let clearValues5 = () => {
        setboxerQuantity(0);
        setCheckboxes5({ wash: false, iron: false, towel: false, bleach: false });
    }
    let clearValues6 = () => {
        setjoggersQuantity(0);
        setCheckboxes6({ wash: false, iron: false, towel: false, bleach: false });
    }
    let clearValues7 = () => {
        setothersQuantity(0);
        setCheckboxes7({ wash: false, iron: false, towel: false, bleach: false });
    }
    //wash-Calculations

    let total=0;
    let [checkboxes1, setCheckboxes1] = useState({
        wash: false,
        iron: false,
        towel: false,
        bleach: false
    });
    let shirtPrice = 0;

    let handlecheckboxchange1 = (checkboxName) => {
        setCheckboxes1((prevCheckboxes1) => ({
            ...prevCheckboxes1,
            [checkboxName]: !prevCheckboxes1[checkboxName],
        }));
    };

    if (checkboxes1.wash === true) {
        shirtPrice += 10;
    }
    if (checkboxes1.iron === true) {
        shirtPrice += 10;
    }
    if (checkboxes1.towel === true) {
        shirtPrice += 20;
    }
    if (checkboxes1.bleach === true) {
        shirtPrice += 30;
    }
    total += shirtPrice * shirtQuantity;
    let sp = "";

    sp += shirtQuantity + " x " + shirtPrice + " = " + (shirtPrice *= shirtQuantity);



    //iron-Calculations

    let [checkboxes2, setCheckboxes2] = useState({
        wash: false,
        iron: false,
        towel: false,
        bleach: false
    });
    let tShirtprice = 0;
    let handlecheckboxchange2 = (checkboxName) => {
        setCheckboxes2((prevCheckboxes2) => ({
            ...prevCheckboxes2,
            [checkboxName]: !prevCheckboxes2[checkboxName],
        }));
    };

    if (checkboxes2.wash === true) {
        tShirtprice += 10;
    }
    if (checkboxes2.iron === true) {
        tShirtprice += 10;
    }
    if (checkboxes2.towel === true) {
        tShirtprice += 20;
    }
    if (checkboxes2.bleach === true) {
        tShirtprice += 30;
    }
    total += tShirtQuantity * tShirtprice;
    let tsp = "";
    tsp = tsp + tShirtQuantity + " x " + tShirtprice + " = " + (tShirtprice *= tShirtQuantity);







    //towel-Calculations

    let [checkboxes3, setCheckboxes3] = useState({
        wash: false,
        iron: false,
        towel: false,
        bleach: false
    });
    let trousersprice = 0;
    let handlecheckboxchange3 = (checkboxName) => {
        setCheckboxes3((prevCheckboxes3) => ({
            ...prevCheckboxes3,
            [checkboxName]: !prevCheckboxes3[checkboxName],
        }));
    };

    if (checkboxes3.wash === true) {
        trousersprice += 10;
    }
    if (checkboxes3.iron === true) {
        trousersprice += 10;
    }
    if (checkboxes3.towel === true) {
        trousersprice += 20;
    }
    if (checkboxes3.bleach === true) {
        trousersprice += 30;
    }
    total += trousersprice * trousersQuantity;
    let tp = "";
    tp += trousersQuantity + " x " + trousersprice + " = " + (trousersprice *= trousersQuantity);




    //bleach-Calculations

    let [checkboxes4, setCheckboxes4] = useState({
        wash: false,
        iron: false,
        towel: false,
        bleach: false
    });
    let jeansprice = 0;
    let handlecheckboxchange4 = (checkboxName) => {
        setCheckboxes4((prevCheckboxes4) => ({
            ...prevCheckboxes4,
            [checkboxName]: !prevCheckboxes4[checkboxName],
        }));
    };

    if (checkboxes4.wash === true) {
        jeansprice += 15;
    }
    if (checkboxes4.iron === true) {
        jeansprice += 15;
    }
    if (checkboxes4.towel === true) {
        jeansprice += 20;
    }
    if (checkboxes4.bleach === true) {
        jeansprice += 30;
    }
    total += jeansQuantity * jeansprice;
    let jp = "";
    jp += jeansQuantity + " x " + jeansprice + " = " + (jeansprice *= jeansQuantity);




    //checkbox5-Calculations

    let [checkboxes5, setCheckboxes5] = useState({
        wash: false,
        iron: false,
        towel: false,
        bleach: false
    });
    let boxerprice = 0;
    let handlecheckboxchange5 = (checkboxName) => {
        setCheckboxes5((prevCheckboxes5) => ({
            ...prevCheckboxes5,
            [checkboxName]: !prevCheckboxes5[checkboxName],
        }));
    };

    if (checkboxes5.wash === true) {
        boxerprice += 15;
    }
    if (checkboxes5.iron === true) {
        boxerprice += 15;
    }
    if (checkboxes5.towel === true) {
        boxerprice += 20;
    }
    if (checkboxes5.bleach === true) {
        boxerprice += 30;
    }
    total += boxerprice * boxerQuantity;
    let bp = "";
    bp += boxerQuantity + " x " + boxerprice + " = " + (boxerprice *= boxerQuantity);



    //checkbox6-Calculations

    let [checkboxes6, setCheckboxes6] = useState({
        wash: false,
        iron: false,
        towel: false,
        bleach: false
    });

    let joggersprice = 0;
    let handlecheckboxchange6 = (checkboxName) => {
        setCheckboxes6((prevCheckboxes6) => ({
            ...prevCheckboxes6,
            [checkboxName]: !prevCheckboxes6[checkboxName],
        }));
    };

    if (checkboxes6.wash === true) {
        joggersprice += 15;
    }
    if (checkboxes6.iron === true) {
        joggersprice += 15;
    }
    if (checkboxes6.towel === true) {
        joggersprice += 20;
    }
    if (checkboxes6.bleach === true) {
        joggersprice += 75;
    }
    total += joggersprice * joggersQuantity;
    let jop = "";
    jop += joggersQuantity + " x " + joggersprice + " = " + (joggersprice *= joggersQuantity);



    //checkbox7-Calculations

    let [checkboxes7, setCheckboxes7] = useState({
        wash: false,
        iron: false,
        towel: false,
        bleach: false
    });
    let othersprice = 0;
    let handlecheckboxchange7 = (checkboxName) => {
        setCheckboxes7((prevCheckboxes7) => ({
            ...prevCheckboxes7,
            [checkboxName]: !prevCheckboxes7[checkboxName],
        }));
    };
    if (checkboxes7.wash === true) {
        othersprice += 15;
    }
    if (checkboxes7.iron === true) {
        othersprice += 15;
    }
    if (checkboxes7.towel === true) {
        othersprice += 20;
    }
    if (checkboxes7.bleach === true) {
        othersprice += 75;
    }
    total += othersQuantity * othersprice;
    let op = "";
    op += othersQuantity + " x " + othersprice + " = " + (othersprice *= othersQuantity);
    console.log(total);

    //Toggle Drawer
    // let [summary, setSummary] = useState(false);
    // let calculateSummary = () => {
    //     setSummary(true);
    // };
    // let closeProceed = () => {
    //     setSummary(false);
    // }
    const [selectedOption, setSelectedOption] = useState('option1');
    let handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    //newp
    const filteredItems = [
        { name: 'Shirts', quantity: shirtQuantity, checkboxes: checkboxes1, price: sp, clearValues: clearValues1 },
        { name: 'T-Shirts', quantity: tShirtQuantity, checkboxes: checkboxes2, price: tShirtprice, clearValues: clearValues2 },
        { name: 'Trousers', quantity: trousersQuantity, checkboxes: checkboxes3, price: trousersprice, clearValues: clearValues3 },
        { name: 'Jeans', quantity: jeansQuantity, checkboxes: checkboxes4, price: jeansprice, clearValues: clearValues4 },
        { name: 'Boxers', quantity: boxerQuantity, checkboxes: checkboxes5, price: boxerprice, clearValues: clearValues5 },
        { name: 'Joggers', quantity: joggersQuantity, checkboxes: checkboxes6, price: joggersprice, clearValues: clearValues6 },
        { name: 'Others', quantity: othersQuantity, checkboxes: checkboxes7, price: othersprice, clearValues: clearValues7 },
    ].filter(item => item.quantity);

    //newp

    let orderIdCounter = 1000000;
    const generateUniqueId = () => {

        let orderId = orderIdCounter += 1;
        orderIdCounter += 1;
        if (orderIdCounter > 9999999) {
            orderIdCounter = 1000000;
        }

        return orderId;
    };


    let handleConfirmClick = async () => {
        let totalquantity = parseInt(tShirtQuantity) + parseInt(shirtQuantity) + parseInt(trousersQuantity) + parseInt(jeansQuantity) + parseInt(boxerQuantity) + parseInt(joggersQuantity) + parseInt(othersQuantity);

        const orderId = generateUniqueId();
        let time = new Date();
        let token = localStorage.getItem("token");

        if (token) {
            let authtoken = JSON.parse(token)
            console.log("authtoken  ", authtoken)

            // Decode the token to get user information
            const decodedToken = atob(authtoken.split('.')[1]);
            const userInfo = JSON.parse(decodedToken);

            // Extract the email from user information
            const userEmail = userInfo.email;
            console.log("User Email: ", userEmail);

            try {
                const response = await fetch("http://localhost:5055/api/create/order", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `test ${authtoken}`
                    },
                    body: JSON.stringify({
                        userEmail: userEmail,
                        orderId: orderId,
                        items: filteredItems,
                        quantity: totalquantity,
                        total: total,
                        clicktime: time,
                    })
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log(result);
                    alert("Order created successfully");

                } else {
                    console.error('Failed to create order');
                    alert("Failed to create order");
                }
            } catch (error) {
                console.error('Error creating order:', error);
                alert("Error creating order");
            }

            navigate("/getorders");
        }











    }
    // Drawer PROP
    const [openWithHeader, setOpenWithHeader] = React.useState(false);

    return (
        <>
            <p id="order-heading">Create Order</p>
            <table className='Order-table'>
                <forms>
                    <tr className='create-order-header'>
                        <th className='table-c1'>Product Types</th>
                        <th className='table-c2' >Quantity</th>
                        <th className='table-c3' >Wash Type</th>
                        <th className='table-c4' >Price</th>
                        <th className='table-c5' ></th>

                    </tr>

                    <tr className='items-tableRow'>
                        <td className='tabledata-order'><img className='productImage' src="https://png.pngtree.com/png-clipart/20220718/ourmid/pngtree-formal-mens-sky-blue-check-shirt-free-png-and-psd-png-image_6005529.png" alt="Shirts" /><p className='c1-text'>Shirts<br /><span className='c1-small-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span></p></td>
                        <td><input className='order-input' type="Number" placeholder='0' value={shirtQuantity} onChange={(e) => setshirtQuantity(e.target.value)}></input></td>
                        <td>
                            <input className='order-checkbox' type="checkbox" id="wash" name="wash" checked={checkboxes1.wash} onChange={() => handlecheckboxchange1('wash')} />wash
                            <input className='order-checkbox' type="checkbox" id="iron" name="iron" checked={checkboxes1.iron} onChange={() => handlecheckboxchange1('iron')} />iron
                            <input className='order-checkbox' type="checkbox" id="towel" name="towel" checked={checkboxes1.towel} onChange={() => handlecheckboxchange1('towel')} />towel
                            <input className='order-checkbox' type="checkbox" id="bleach" name="bleach" checked={checkboxes1.bleach} onChange={() => handlecheckboxchange1('bleach')} />bleach
                        </td>
                        <td>{sp}</td>
                        <td><button className='Reset-btn' onClick={clearValues1}>Reset</button></td>
                    </tr>
                    <tr className='items-tableRow'>
                        <td className='tabledata-order'><img className='productImage' src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=494" alt="T-Shirts" /><p className='c1-text'>T-Shirts<br /><span className='c1-small-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span></p></td>
                        <td><input className='order-input' type="Number" placeholder='0' value={tShirtQuantity} onChange={(e) => settShirtQuantity(e.target.value)}></input></td>
                        <td>
                            <input className='order-checkbox' type="checkbox" id="wash" name="wash" checked={checkboxes2.wash} onChange={() => handlecheckboxchange2('wash')} />wash
                            <input className='order-checkbox' type="checkbox" id="iron" name="iron" checked={checkboxes2.iron} onChange={() => handlecheckboxchange2('iron')} />iron
                            <input className='order-checkbox' type="checkbox" id="towel" name="towel" checked={checkboxes2.towel} onChange={() => handlecheckboxchange2('towel')} />towel
                            <input className='order-checkbox' type="checkbox" id="bleach" name="bleah" checked={checkboxes2.bleach} onChange={() => handlecheckboxchange2('bleach')} />bleach
                        </td>
                        <td>{tsp}</td>
                        <td><button className='Reset-btn' onClick={clearValues2}>Reset</button></td>
                    </tr>
                    <tr className='items-tableRow'>
                        <td className='tabledata-order'><img className='productImage' src="https://e7.pngegg.com/pngimages/573/83/png-clipart-trousers-formal-wear-suit-trouser-s-waistcoat-waist-thumbnail.png" alt="Trousers" /><p className='c1-text'>Trousers<br /><span className='c1-small-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span></p></td>
                        <td><input className='order-input' type="Number" placeholder='0' value={trousersQuantity} onChange={(e) => settrousersQuantity(e.target.value)}></input></td>
                        <td>
                            <input className='order-checkbox' type="checkbox" id="wash" name="wash" checked={checkboxes3.wash} onChange={() => handlecheckboxchange3('wash')} />wash
                            <input className='order-checkbox' type="checkbox" id="iron" name="iron" checked={checkboxes3.iron} onChange={() => handlecheckboxchange3('iron')} />iron
                            <input className='order-checkbox' type="checkbox" id="towel" name="towel" checked={checkboxes3.towel} onChange={() => handlecheckboxchange3('towel')} />towel
                            <input className='order-checkbox' type="checkbox" id="bleach" name="bleach" checked={checkboxes3.bleach} onChange={() => handlecheckboxchange3('bleach')} />bleach
                        </td>
                        <td>{tp}</td>
                        <td><button className='Reset-btn' onClick={clearValues3}>Reset</button></td>
                    </tr>
                    <tr className='items-tableRow'>
                        <td className='tabledata-order'><img className='productImage' src="https://w7.pngwing.com/pngs/63/280/png-transparent-jeans-denim-slim-fit-pants-bell-bottoms-jeans-blue-fashion-boy-thumbnail.png" alt="Jeans" /><p className='c1-text'>Jeans<br /><span className='c1-small-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span></p></td>
                        <td><input className='order-input' type="Number" placeholder='0' value={jeansQuantity} onChange={(e) => setjeansQuantity(e.target.value)}></input></td>
                        <td>
                            <input className='order-checkbox' type="checkbox" id="wash" name="wash" checked={checkboxes4.wash} onChange={() => handlecheckboxchange4('wash')} />wash
                            <input className='order-checkbox' type="checkbox" id="iron" name="iron" checked={checkboxes4.iron} onChange={() => handlecheckboxchange4('iron')} />iron
                            <input className='order-checkbox' type="checkbox" id="towel" name="towel" checked={checkboxes4.towel} onChange={() => handlecheckboxchange4('towel')} />towel
                            <input className='order-checkbox' type="checkbox" id="bleach" name="bleach" checked={checkboxes4.bleach} onChange={() => handlecheckboxchange4('bleach')} />bleach
                        </td>
                        <td>{jp}</td>
                        <td><button className='Reset-btn' onClick={clearValues4}>Reset</button></td>
                    </tr>
                    <tr className='items-tableRow'>
                        <td className='tabledata-order'><img className='productImage' src="https://www.refinery29.com/images/11001188.png" alt="Boxers" /><p className='c1-text'>Boxers<br /><span className='c1-small-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span></p></td>
                        <td><input className='order-input' type="Number" placeholder='0' value={boxerQuantity} onChange={(e) => setboxerQuantity(e.target.value)}></input></td>
                        <td>
                            <input className='order-checkbox' type="checkbox" id="wash" name="wash" checked={checkboxes5.wash} onChange={() => handlecheckboxchange5('wash')} />wash
                            <input className='order-checkbox' type="checkbox" id="iron" name="iron" checked={checkboxes5.iron} onChange={() => handlecheckboxchange5('iron')} />iron
                            <input className='order-checkbox' type="checkbox" id="towel" name="towel" checked={checkboxes5.towel} onChange={() => handlecheckboxchange5('towel')} />towel
                            <input className='order-checkbox' type="checkbox" id="bleach" name="towel" checked={checkboxes5.bleach} onChange={() => handlecheckboxchange5('bleach')} />bleach
                        </td>
                        <td>{bp}</td>
                        <td><button className='Reset-btn' onClick={clearValues5}>Reset</button></td>
                    </tr>
                    <tr className='items-tableRow'>
                        <td className='tabledata-order'><img className='productImage' src="https://e7.pngegg.com/pngimages/807/494/png-clipart-sweatpants-fashion-clothing-streetwear-zipper-zipper-fashion.png" alt="Joggers" /><p className='c1-text'>Joggers<br /><span className='c1-small-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span></p></td>
                        <td><input className='order-input' type="Number" placeholder='0' value={joggersQuantity} onChange={(e) => setjoggersQuantity(e.target.value)}></input></td>
                        <td>
                            <input className='order-checkbox' type="checkbox" id="wash" name="wash" checked={checkboxes6.wash} onChange={() => handlecheckboxchange6('wash')} />wash
                            <input className='order-checkbox' type="checkbox" id="iron" name="iron" checked={checkboxes6.iron} onChange={() => handlecheckboxchange6('iron')} />iron
                            <input className='order-checkbox' type="checkbox" id="towel" name="towel" checked={checkboxes6.towel} onChange={() => handlecheckboxchange6('towel')} />towel
                            <input className='order-checkbox' type="checkbox" id="bleach" name="bleach" checked={checkboxes6.bleach} onChange={() => handlecheckboxchange6('bleach')} />bleach
                        </td>
                        <td>{jop}</td>
                        <td><button className='Reset-btn' onClick={clearValues6}>Reset</button></td>
                    </tr>
                    <tr className='items-tableRow'>
                        <td className='tabledata-order'><img className='productImage' src="https://www.vhv.rs/dpng/f/421-4212958_folded-clothes-png-transparent-folded-clothes-png-png.png" alt="Others" /><p className='c1-text'>Others<br /><span className='c1-small-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span></p></td>
                        <td><input className='order-input' type="Number" placeholder='0' value={othersQuantity} onChange={(e) => setothersQuantity(e.target.value)}></input></td>
                        <td>
                            <input className='order-checkbox' type="checkbox" id="wash" name="wash" checked={checkboxes7.wash} onChange={() => handlecheckboxchange7('wash')} />wash
                            <input className='order-checkbox' type="checkbox" id="iron" name="iron" checked={checkboxes7.iron} onChange={() => handlecheckboxchange7('iron')} />iron
                            <input className='order-checkbox' type="checkbox" id="towel" name="towel" checked={checkboxes7.towel} onChange={() => handlecheckboxchange7('towel')} />towel
                            <input className='order-checkbox' type="checkbox" id="bleach" name="blech" checked={checkboxes7.bleach} onChange={() => handlecheckboxchange7('bleach')} />bleach
                        </td>
                        <td>{op}</td>
                        <td><button className='Reset-btn' onClick={clearValues7}>Reset</button></td>
                    </tr>
                </forms>
            </table>
            <button className='Proceed-btn' onClick={() => setOpenWithHeader(true)}>Proceed</button>

            <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
                <Drawer.Header className='Drawer.H'>
                    <Drawer.Title>Summary</Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={() => setOpenWithHeader(false)}>Cancel</Button>
                        <Button onClick={handleConfirmClick} appearance="primary">Confirm</Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <div className='Store-details'>
                        <section className='Select-Store'>
                            <select className='Input-Store' value={selectedOption} placeholder="Store Location" onChange={handleOptionChange}>
                                <option value="option1">Select Store </option>
                                <option value="option2">XYZ</option>
                                <option value="option2">ABC</option>
                                <option value="option3">MNO</option>
                            </select>
                        </section>
                        <section className='Select-Store'>
                            {selectedOption === 'option1' && <span><b>Store Address:</b><span><b>Phone:</b> </span> </span>}
                            {selectedOption === 'option2' && <span><b>Store Address:</b>Address XYZ<span> <b>  Phone</b>-9999999999</span> </span>}
                            {selectedOption === 'option3' && <span><b>Store Address:</b>Address ABC<span> <b>  Phone</b>-9999999999</span> </span>}
                            {selectedOption === 'option4' && <span><b>Store Address:</b>Address MNO<span> <b>  Phone</b>-9999999999</span> </span>}
                        </section>
                    </div>
                    <div>
                        <h4>Order Details:</h4>
                        <table className='Display-Table'>
                            <tr>
                                <th>Item</th>
                                <th></th>
                                <th>Work</th>
                                <th>Total Cost</th>
                            </tr>
                            {filteredItems.map((item, index) => (
                                <tr className='Display-Table-R' key={index}>
                                    <td>{item.name}</td>
                                    <td> {Object.keys(item.checkboxes).map((checkbox, index) => (
                                        item.checkboxes[checkbox] && (
                                            <span key={index}>{checkbox},</span>
                                        )
                                    ))}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Subtotal</td>
                                <td>{total}</td>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Pickup Charges</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td id='totalcolor'></td>
                                <td id='totalcolor'></td>
                                <td id='totalcolor' >Total-Rs</td>
                                <td id='totalcolor'>{total + 90}</td>
                            </tr>
                        </table>
                    </div>
                </Drawer.Body>

            </Drawer >


        </>
    )
}

export default CreateOrder