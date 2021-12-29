import { Route } from "react-router-dom";
import Home from "./Home";

function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/checkout">
        Checkout Page
      </Route>
      <Route exact path="/cart">
        Cart Page
      </Route>
    </div>
  );
}
export default AllRoutes;
