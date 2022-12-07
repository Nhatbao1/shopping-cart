const CartDropdown = (props) => {
    let { show } = props;
    console.log(show)
    return (
        (show && show === true
            ?
            <div class="img">
                {/* <img src="empty-cart.png"/> */}
                    <p>Yourt cart is empty</p>
                    <button class="btn-checkout disabled">PROCEED TO CHECKOUT</button>
            </div>
            :
            <div></div>
        )
    )
}
export default CartDropdown;