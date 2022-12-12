import data from "../../data";
import "../../scss/Products.scss";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pay } from "../../redux/action/payAction";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Product = () => {
    const nagivate = useNavigate();
    const [quantity, setQuantity] = useState();
    const dispatch = useDispatch();
    const [itemQuantity, setItemQuantity] = useState(0);
    let cloneData = [];
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
        if (cloneData.length < 0) {
            cloneData.push(prod);
        } else {
            const itemIndex = cloneData.findIndex((val, index) => val.id === prod.id)
            if (!itemIndex) {
                cloneData.push(prod);
            }
        }
        console.log(cloneData)
    }
    return (
        <div className="products">
            <div className="container">
                <div className='header-cart'>
                    <span className='cart-icon'>
                        <AiOutlineShoppingCart style={{ height: "2em", width: "2em" }} onClick={() => nagivate('/cart')} />
                        <span className='ball'>{itemQuantity}</span>
                    </span>
                </div>
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