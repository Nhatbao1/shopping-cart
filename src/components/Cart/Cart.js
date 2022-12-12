import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import "../../scss/Cart.scss";
import { useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { useState } from 'react';
import img from "../../assets/image.png";
const Cart = () => {
    const data = useSelector(state => state.pay.carts);
    const [dataClone, setDataClone] = useState(data);
    const [quantity, setQuantity] = useState();
    let total = 0;
    const handlePay = () => {
        setDataClone("");
    }
    const handleClickBtnDelete = (prod) => {
        // console.log(prod);
        const dataDelete = dataClone.filter((val, index) => val.id !== prod.id)
        setDataClone(dataDelete);
        // redux cho cai delete ve rong 
    }
    const handleChangeInput = (event, prod) => {
        const index = dataClone.findIndex((val, index) => val.id === prod.id)
        console.log(+event.target.value)
        setQuantity(dataClone[index].quantity = +event.target.value);
    }
    return (
        <Container>
            {dataClone && dataClone.length > 0
                ?
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Quantity</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataClone && dataClone.length > 0 &&
                                dataClone.map((val, key) => {
                                    return (
                                        <tr>
                                            <td>{val.id}</td>
                                            <td>
                                                <input className="input-quantity" type="number"
                                                    value={+val.quantity}
                                                    onChange={(event) => { handleChangeInput(event, val) }}
                                                />

                                            </td>
                                            <td>{val.name}</td>
                                            <td>{val.quantity * val.price}$</td>
                                            <td className="button-table">
                                                <button className="btn btn-danger" onClick={() => { handleClickBtnDelete(val) }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td>Total Price:</td>
                                <td colSpan={5} >
                                    {
                                        dataClone && dataClone.length > 0 &&
                                        dataClone.map((val, index) => {
                                            total = total + (val.quantity * val.price);
                                        })
                                    }
                                    {total}$
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button onClick={() => handlePay()}>Pay All</Button>
                </>
                :
                <div className='img-cart'>
                    <img src={img} />
                </div>

            }
        </Container >
    );
}

export default Cart;