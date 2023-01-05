import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClearCard, RemoveFromCard } from "../../rtk/slices/card-slice";

const Card = () => {
  const products = useSelector((state) => state.Card);
  const dispatch = useDispatch();
  const Total = products.reduce((acc, product) => {
    acc += product.price * product.Quantity;
    return acc;
  }, 0);
  return (
    <Container>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price} $</td>
              <td>{product.category}</td>
              <td>{product.Quantity}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(RemoveFromCard(product));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="text"
        name=""
        id=""
        value={`${Total.toFixed(2)} $`}
        readOnly
      />
      <button
        className="btn btn-danger clear"
        onClick={() => {
          dispatch(ClearCard());
        }}
      >
        Clear
      </button>
    </Container>
  );
};
export default Card;
