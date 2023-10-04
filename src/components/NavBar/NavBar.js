import CartWidget from "../CartWidget/CartWidjet";
import logoEcommerce from "./assets/Logo-weed.png";
import "./style.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    
    <img src={logoEcommerce} alt="Logo weed e-commerce"/>
    

    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    <h3>Weed commerce</h3>
                </Link>

                <div className="navbar-menu">
                    <div className="columns">
                        <div className="column">
                            <NavLink to={`/category/THC`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> THC</NavLink>
                        </div>
                        <div className="column">
                            <NavLink to={`/category/CBD`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>CBD</NavLink>
                        </div>
                        <div className="column">
                            <NavLink to={`/category/Consumibles`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Consumibles</NavLink>
                        </div>
                    </div>
                </div>
                <CartWidget />
            </div>


        </nav>

    )
}
export default NavBar