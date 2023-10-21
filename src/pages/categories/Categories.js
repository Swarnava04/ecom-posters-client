import React, { useEffect, useState } from "react";
import "./Categories.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";
import Product from "../../components/product/Product";
function Categories() {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("");
  const [products, setProducts] = useState([]);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const sortOptions = [
    {
      value: "Price- Low to High",
      sort: "price",
    },
    {
      value: "Newest First",
      sort: "createdAt",
    },
  ];
  const params = useParams();
  const [sortBy, setSortBy] = useState(sortOptions[0].sort);
  async function fetchData() {
    const url = params.categoryId
      ? `/products?populate=image&filters[category][key][$eq]=${params.categoryId}&sort=${sortBy}`
      : `/products?populate=image&sort=${sortBy}`;

    const response = await axiosClient.get(url);
    setProducts(response.data.data);
  }

  function updateChange(e) {
    navigate(`/category/${e.target.value}`);
  }

  function handleSortChange(e) {
    const sort = e.target.value;
    setSortBy(sort);
  }

  useEffect(() => {
    setCategoryId(params.categoryId);
    fetchData();
  }, [params, sortBy]);
  return (
    <div className="Categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Print and Artwork</h2>
            <p>
              {" "}
              India's largest collection of wall posters for your bedroom,
              living room, kids room, kitchen and posters & art prints at
              highest quality lowest price guaranteed.
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <p className="sort-by-text">Sort By</p>
              <select
                className="select-sort-by"
                name="sort-by"
                id="sort-by"
                onChange={handleSortChange}
              >
                {sortOptions.map((item) => (
                  <option key={item.sort} value={item.sort}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categories.map((item) => (
                <div key={item.id} className="filter-radio">
                  <input
                    name="category"
                    type="radio"
                    id={item.id}
                    value={item.attributes.key}
                    onChange={updateChange}
                    checked={item.attributes.key === categoryId}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="products-box">
            {products.map((eachProduct) => (
              <Product key={eachProduct.id} product={eachProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
