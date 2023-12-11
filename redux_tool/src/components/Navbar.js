import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((store) => store.cart.amount);
  return (
    <nav>
      <div className="nav-center"></div>
      <h3>Shopping Cart</h3>
      <div className="nav-container">
        <CartIcon />
        <div className='amount-container'></div>
        <p className="total-amount">{amount}</p>
      </div>
    </nav>
  );
};

export default Navbar;
