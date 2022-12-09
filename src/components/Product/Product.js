import data from "../../data";
import "../../scss/Products.scss";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pay } from "../../redux/action/payAction";
const Product = () => {
    const [quantity, setQuantity] = useState();
    const dispatch = useDispatch();
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
    const handleAddToCart = (prod) => {
        dispatch(pay(prod));

    }
    return (
        <div className="products">
            <div className="container">
                <div className="product-lists">
                    {data && data.length > 0 &&
                        data.map((prod, index) => {
                            return (
                                <Card key={`${prod.id}-product}`}>
                                    <div className="item" key={`${prod.id}-product}`}>
                                        <div className="img">
                                            <img src={prod.image} />
                                        </div>
                                        <h2 className="title">{prod.name}</h2>
                                        <span className="price">{prod.price}$</span>
                                        <div className="cart-quantity flex a-center j-center">
                                            <button className=" btn btn-dec" onClick={() => { handleDec(prod.id) }}>-</button>
                                            <input value={prod.quantity} className="input-quantity" type="number" />
                                            <button className="btn btn-inc" onClick={() => { handleInc(prod.id) }}  >+</button>
                                        </div>
                                        <button className="btn-add" onClick={() => { handleAddToCart(prod) }} >ADD TO CART</button>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Product;