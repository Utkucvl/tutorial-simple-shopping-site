import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashbord from "./Dashbord";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Routes>
        <Route path="/" element={<Dashbord></Dashbord>}></Route>
        <Route path="/product" element={<Dashbord></Dashbord>}></Route>
        <Route path="/cart" element={<CartDetail></CartDetail>}></Route>
        <Route
          path="/saveproduct/:productId"
          element={<AddOrUpdateProduct/>}
        ></Route>
         <Route
          path="/saveproduct"
          element={<AddOrUpdateProduct/>}
        ></Route>
        <Route  path ="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
