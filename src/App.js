import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../src/pages/home/Home";
import Categories from "../src/pages/categories/Categories";
import ProductDetail from "../src/pages/productDetail/ProductDetail";
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import { useEffect } from "react";
import { fetchCategories } from "./redux/slice/categorySlice";
import Payments from "./components/payments/Payments";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //we only need to fetch the categories once only
    dispatch(fetchCategories());
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Categories />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/payments/:status" element={<Payments />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
