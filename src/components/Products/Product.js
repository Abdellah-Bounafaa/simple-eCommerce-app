import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddToCard } from "../../rtk/slices/card-slice";
import "./product.css";

export default function Product(props) {
  const product = props.product;
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img src={product.image} className="card-img-top image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        {/* <p className="card-text">{product.description}</p> */}
        <Link to={`/${product.id}`} className="btn btn-primary m-2">
          Details
        </Link>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(AddToCard(product));
          }}
        >
          Add To Card
        </button>
      </div>
    </div>
  );
}
