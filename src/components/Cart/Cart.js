import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import "../../scss/Cart.scss";
import { useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import _ from "lodash";
import { useState } from 'react';
import ModalViewProduct from './ModalViewProduct';
const Cart = () => {
    const data = useSelector(state => state.pay.carts);
    console.log(data)
    const [showModalViewProduct, setShowModalProduct] = useState(false);
    const [dataModalViewProduct, setDataModalViewProduct] = useState();
    const [dataClone, setDataClone] = useState(data);
    console.log(dataClone)
    const handleClickBtnView = (val) => {
        setShowModalProduct(true);
        setDataModalViewProduct(val);
    }
    const handleClickBtnUpdate = () => {

    }
    const handleClickBtnDelete = (prod) => {
        // console.log(prod);
        const dataDelete = dataClone.filter((val, index) => val.id !== prod.id)
        setDataClone(dataDelete);
        // redux cho cai delete ve rong 
    }
    return (
        <Container>
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
                                    <td>{val.quantity}</td>
                                    <td>{val.name}</td>
                                    <td>{val.quantity * val.price}$</td>
                                    <td className="button-table">
                                        <button className="btn btn-info" onClick={() => { handleClickBtnView(val) }} >View</button>
                                        <button className="btn btn-danger" onClick={() => { handleClickBtnDelete(val) }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td>Total Price:</td>
                        <td colSpan={5}>Larry the Bird</td>
                    </tr>
                </tbody>
            </Table>
            <Button>Pay All</Button>
        </Container>
    );
}

export default Cart;