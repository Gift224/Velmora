
/*import './App.css';
import Allcom from './componet/AllComponet';

function App() {
  return (
    <div>
      <Allcom />
    </div>
  );
}*/

import Header from "./componet/Header"
import { Routes, Route } from "react-router-dom";
import AllComponet from "./componet/AllComponet";
import ProductDetail from "./componet/ProductDetail";
import Cart from "./componet/Cart";
import CategoryPage from "./componet/Phones&Tablet";
import Checkout from "./componet/CheckOut";
import ScrollToTop from "./componet/ScrollToTop";
import Footer from "./componet/Footer";
import Success from "./componet/Success";
import OrderDetails from "./componet/OrderDetails";
import Orders from "./componet/Orders";
import SearchResults from "./componet/SearchResults";
import SignUp from "./componet/SignUp";


function App() {
  return (
    <>
      <Header />
      <ScrollToTop />  {/* ✅ Add this here */}
      <Routes>
        <Route path="/" element={<AllComponet />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;