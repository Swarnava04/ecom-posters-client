import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import { axiosClient } from "../../utils/axiosClient";
import "./Home.scss";
import { useSelector } from "react-redux";
function Home() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const [topProducts, setTopProducts] = useState(null);
  async function fetchData() {
    const topProductsResponse = await axiosClient.get(
      "/products?filters[isTopPick][$eq]=true?&populate=image"
    );
    console.log("topProductsResponse :", topProductsResponse);
    setTopProducts(topProductsResponse?.data?.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
          <p className="subheading">
            Shop from the best, check out our Film and TV Posters
          </p>
        </div>
        <div className="content">
          {categories?.map((category) => {
            return <Category key={category.id} category={category} />;
          })}
        </div>
      </section>
      <section className="collection  container">
        <div className="info">
          <h2 className="heading">Our top picks</h2>
          <p className="subheading"> All new designs, same old details</p>
        </div>
        <div className="content">
          {topProducts?.map((topProduct) => {
            return <Product key={topProduct.id} product={topProduct} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
