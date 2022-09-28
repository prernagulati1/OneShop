import { addItem } from "../../Action";
import { connect } from "react-redux";

const AddToCartButton = (props) => {
  const addToCartHandler = (item) => {
    console.log("item===>", item);
    item = { ...item, quantity: 1 };
    props.addItem(item);
  };
  return (
    <button
      className={props.class}
      onClick={() => {
        addToCartHandler(props.item);
      }}
    >
      ADD TO CART
    </button>
  );
};

const mapDispatchtoProps = {
  addItem,
};
export default connect(null, mapDispatchtoProps)(AddToCartButton);

// export default AddToCartButton;
