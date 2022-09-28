import "./Success.css";
import { useNavigate } from "react-router";

const Success = () => {
  let navigate = useNavigate();

  const continueShoppingHandler = () => {
    navigate("/home");
  };

  return (
    <div class="success">
      <div class="container">
        <div class="success-content">
          <h3>Your Order Is Successful</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum
            ab animi voluptatem voluptate sit excepturi voluptatibus eius
            veritatis quisquam.
          </p>
          <button
            class="btn btn-outline-light"
            onClick={continueShoppingHandler}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
