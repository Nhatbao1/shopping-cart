import data from "../../data";
import "../../scss/Products.scss";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pay } from "../../redux/action/payAction";
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from 'react-toastify';
const Product = () => {
    const count = useSelector(state => state.pay.carts);
    const [quantity, setQuantity] = useState();
    const [input, setInput] = useState();
    const dispatch = useDispatch();
    const [itemQuantity, setItemQuantity] = useState(0);
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
        toast.success('Add success', {
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
    const handleChangeQuantity = (event, id) => {
        const itemIndex = data.findIndex((prod) => prod.id === id)
        setQuantity(data[itemIndex].quantity = event.target.value)
    }
    return (
        <div className="products">
            <div className="container">
                <div className='header-cart'>
                    <div className="search ">
                        <input type="text" onChange={(event) => setInput(event.target.value)} />
                        <button><AiOutlineSearch /></button>
                    </div>
                </div>
                <div className="product-lists">
                    {input
                        ?
                        data.filter((prod) => prod.name.toLowerCase().includes(input)).map((prod) => (
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
                        ))
                        :
                        data.map((prod) => (
                            <Card key={`${prod.id}-product}`}>
                                <div className="item" key={`${prod.id}-product}`}>
                                    <div className="img">
                                        <img src={prod.image} />
                                    </div>
                                    <h2 className="title">{prod.name}</h2>
                                    <span className="price">{prod.price}$</span>
                                    <div className="cart-quantity flex a-center j-center">
                                        <button className=" btn btn-dec" onClick={() => { handleDec(prod.id) }}>-</button>
                                        <input value={prod.quantity} className="input-quantity" type="number" onChange={(event) => { handleChangeQuantity(event, prod.id) }} />
                                        <button className="btn btn-inc" onClick={() => { handleInc(prod.id) }}  >+</button>
                                    </div>
                                    <button className="btn-add" onClick={() => { handleAddToCart(prod) }} >ADD TO CART</button>
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Product;