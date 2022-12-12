import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import "../../scss/Cart.scss";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { useState } from 'react';
import img from "../../assets/image.png";
import { all, deleteItem } from '../../redux/action/payAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const data = useSelector(state => state.pay.carts);
    const [dataClone, setDataClone] = useState(data);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const nagivate = useNavigate();
    let total = 0;
    const handlePay = () => {
        setDataClone("");
        dispatch(all());
        toast.success('Pay success', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const handleClickBtnDelete = (prod) => {
        const dataDelete = dataClone.filter((val, index) => val.id !== prod.id)
        setDataClone(dataDelete);
        dispatch(deleteItem(prod));
        toast.warn('Delete success', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const handleChangeInput = (event, prod) => {
        const index = dataClone.findIndex((val, index) => val.id === prod.id)
        setQuantity(dataClone[index].quantity = +event.target.value);
    }
    const handleDec = (id) => {
        const itemIndex = data.findIndex((val, key) => val.id === id)
        if (data[itemIndex].quantity === 0) {
            return;
        } else {
            setQuantity(data[itemIndex].quantity--)
        }
    }
    const handleInc = (id) => {
        const itemIndex = data.findIndex((prod) => prod.id === id)
        setQuantity(data[itemIndex].quantity++)
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
                                <th>Image</th>
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
                                        <tr key={val.id}>
                                            <td>{val.id}</td>
                                            <td>
                                                <div className='img-table'>
                                                    <img src={val.image} />
                                                </div>

                                            </td>
                                            <td>
                                                <button className=" btn btn-dec" onClick={() => { handleDec(val.id) }}>-</button>
                                                <input className="input-quantity" type="number"
                                                    value={+val.quantity}
                                                    onChange={(event) => { handleChangeInput(event, val) }}
                                                />
                                                <button className="btn btn-inc" onClick={() => { handleInc(val.id) }}  >+</button>


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
                    <div className='content-cart'>
                        <h3>Your Cart Is Empty, Please Go To Shopping !</h3>
                        <button onClick={()=>nagivate('/product')}>Shopping Now!</button>
                    </div>
                </div>

            }
        </Container >
    );
}

export default Cart;