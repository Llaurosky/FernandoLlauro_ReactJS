import CartWidget from "../CartWidget/CartWidjet"

const NavBar = () => {
    return (
        <nav>
            <h3>Mundo Verde - Ecommerce</h3>
            <div className="button is-primary">
                <button>Sativa</button>
                <button>Indica</button>
                <button>Rudarelis</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar