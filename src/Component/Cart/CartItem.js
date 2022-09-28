import "./CartItem.css";
import { Fragment } from "react";
import { connect } from "react-redux";
import { updateItemQuantity, removeItem } from "../../Action";

const CartItem = (props) => {
  const onQtyChangeHandler = (quantity, id) => {
    console.log("quantity==>", quantity);
    // if (quantity < 1) {
    //   props.removeItem(id);
    // }
    props.updateItemQuantity(quantity, id);
  };

  const onRemoveHandler = (id) => {
    props.removeItem(id);
  };

  return (
    <Fragment>
      {props.items.map((cartItem) => {
        return (
          <div class="row Product">
            <div class="col col-lg-2 image">
              <img src={cartItem.mainImage} alt="" />
            </div>
            <div class="col col-lg-7 summary">
              <h4>{cartItem.name}</h4>
              <p>{cartItem.description}</p>
              <p>{cartItem.price}</p>
            </div>
            <div class="col col-lg-2 quantity">
              <input
                type="number"
                min="1"
                step="1"
                id="quntity"
                defaultValue={cartItem.quantity}
                onChange={(event) => {
                  onQtyChangeHandler(event.target.value, cartItem.id);
                }}
              />
            </div>
            <div class="col col-lg-1">
              <button
                class="btn btn-outline-danger"
                onClick={() => {
                  onRemoveHandler(cartItem.id);
                }}
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

const mapDispatchtoProps = {
  updateItemQuantity,
  removeItem,
};
export default connect(null, mapDispatchtoProps)(CartItem);
