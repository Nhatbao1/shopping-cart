import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import "../../scss/Cart.scss";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { useState } from 'react';
import img from "../../assets/image.png";
import { all, deleteItem } from '../../redux/action/payAction';
import { toast } from 'react-toastify';
const Cart = () => {
    const data = useSelector(state => state.pay.carts);
    const [dataClone, setDataClone] = useState(data);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
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
    console.log(data)
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