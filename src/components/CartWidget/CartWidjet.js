import cart from './Assets/cart-outline.svg'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart" />
            0
        </div>
    )
}

export default CartWidget;