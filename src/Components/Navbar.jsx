import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        justifyContent: "center"
      }}
    >
      <Link to="/">Home Page</Link>
      <Link to="/checkout">Checkout Page</Link>

      <Link to="/cart">Cart Page</Link>
    </div>
  );
}
export default Navbar;
