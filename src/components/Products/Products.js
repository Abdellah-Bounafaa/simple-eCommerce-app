import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../data/Axios";
import { fetchProducts } from "../../rtk/slices/product-slice";
import Product from "./Product";
import "./product.css";
export default function Products() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const res = await Axios.get("/products");
    //     setProducts(res);
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // };
    // fetchProducts();
    // fetch("http://localhost:8000/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container products">
      {products.map((product) => (
        <div className="products" key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
