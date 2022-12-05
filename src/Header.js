import "./scss/Header.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
    const [show, setShow] = useState(true);
    const [data, setData] = useState();
    const nameData = useSelector(state =>state)
    console.log(nameData)
    return (
        <header>
            <div className="container flex a-center j-between">
                <h2 className="logo"><a href="#">Veggy</a></h2>
                <div className="search flex">
                    <input type="text" />
                    <button><BiSearchAlt2 /></button>
                </div>
                <div className="cart flex">
                    <div className="cart-infor">
                        <div className="cart-text no-of-items flex j-end ">
                            <span className="text">No. of items</span>
                            <span className="text m-5">:</span>
                            <span className="num-items price">0</span>
                        </div>
                        <div className="cart-text sub-total flex j-end">
                            <span className="text">Sub Total </span>
                            <span className="text m-5">:</span>
                            <span className="total price">0</span>
                        </div>
                    </div>
                    <div className="cart-icon">
                        <i><AiOutlineShoppingCart onClick={() => setShow(!show)} /></i>
                        {show && show === true
                            ?
                            <div className="cart-dropdown">
                                {data && data.length > 0
                                    ?
                                    <>
                                        <div class="img">
                                            <p>Your cart is empty</p>
                                            <button class="btn-checkout disabled">PROCEED TO CHECKOUT</button>
                                        </div>
                                        <ul className="cart-item">
                                        </ul>
                                    </>
                                    :
                                    <>
                                        {/* <div class="img">
                                            <button class="btn-checkout disabled">PROCEED TO CHECKOUT</button>
                                        </div>
                                        <ul className="cart-item">
                                        </ul> */}
                                    </>
                                }
                                <div class="img">
                                    <p>Your cart is empty</p>
                                    <button class="btn-checkout disabled">PROCEED TO CHECKOUT</button>
                                </div>
                                <ul className="cart-item">
                                </ul>
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </header >
    )
}
export default Header;