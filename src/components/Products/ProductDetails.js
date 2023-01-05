import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "../../data/Axios";
import { AddToCard } from "../../rtk/slices/card-slice";
import "./product.css";
const ProductDetails = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const params = useParams();
  console.log(params.ID);
  useEffect(() => {
    const getData = async () => {
      try {
        const respons = await axios.get(`products/${params.ID}`);
        setProduct(respons.data);
        console.log(respons);
      } catch (err) {
        console.log(err.message);
      }
      // fetch(` http://localhost:8000/products/${params.ID}`)
      //   .then((res) => res.json())
      //   .then((data) => console.log(data.data));
    };

    getData();
  }, []);
  console.log(product);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={product.image} className="image" alt="" />
        </div>
        <div className="col-6">
          {" "}
          <h3 className="title">{product.title}</h3>
          <p>
            <b>Categorie : </b>
            {product.category}
          </p>
          <p>
            <b>Description : </b>
            {product.description}
          </p>
          <span>
            <b>Price : </b>
            {product.price} $
          </span>
          <br />
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              dispatch(AddToCard(product));
            }}
          >
            Add To Card
          </button>
          <Link to={"/"} className="btn btn-primary">
            Products
          </Link>
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default ProductDetails;
