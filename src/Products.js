import { useState } from "react";
import "./scss/Products.scss";
import { useDispatch } from "react-redux";
import { pay } from "./redux/action/payAction";
const Products = (props) => {
    const { list } = props;
    let itemCart = [];
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState();
    const handleAddToCart = (prod) => {
        const itemIndx = itemCart.findIndex((value) => value.id === prod.id)
        if (itemIndx === -1) {
            itemCart.push({ ...prod })
        }
        else {
            itemCart[itemIndx].quantity += prod.quantity
        }
       dispatch(pay(prod))
    }
    const handleDec = (id) => {
        const itemIndex = list.findIndex((prod) => prod.id === id)
        if (list[itemIndex].quantity ===0) {
            return;
        } else {
            setQuantity(list[itemIndex].quantity--)
        }
    }
    const handleInc = (id) => {
        const itemIndex = list.findIndex((prod) => prod.id === id)
        setQuantity(list[itemIndex].quantity++)

    }
    return (
        <div className="products">
            <div className="container">
                <div className="product-lists">
                    <div className="row">
                        {list && list.length > 0 &&
                            list.map((prod, index) => {
                                return (
                                    <div className="col">
                                        <div className="item" data-id={prod.id}>
                                            <div className="img">
                                                <img src={prod.image} />
                                            </div>
                                            <h2 className="title">{prod.name}</h2>
                                            <span className="price">{prod.price}$</span>
                                            <div className="cart-quantity flex a-center j-center">
                                                <button className=" btn btn-dec" onClick={() => { handleDec(prod.id) }}>-</button>
                                                <input value={prod.quantity} className="input-quantity" type="number" />
                                                <button className="btn btn-inc"onClick={()=>{handleInc(prod.id)}}  >+</button>
                                            </div>
                                            <button className="btn-add" onClick={() => { handleAddToCart(prod) }} >ADD TO CART</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Products;