import "./CartSummary.css";
import { connect } from "react-redux";

const CartSummary = (props) => {
  const totalAmount = props.item.reduce((prev, curr) => {
    console.log("total amount prev,curr===>", prev, curr);
    return (prev = prev + curr.quantity * curr.price);
  }, 0);
  console.log("total amount===>", totalAmount);
  const taxes = Math.round((totalAmount * 8) / 100);
  let totalBill = totalAmount + taxes;
  const discountAmount = Math.round(totalBill / 10);
  if (props.couponStatus) {
    totalBill = totalBill - discountAmount;
  }

  return (
    <div>
      <div class="row bill">
        <div class="col col-lg-8">
          <p>Subtotal</p>
          <p>Shipping</p>
          <p>Taxes</p>
          {props.couponStatus && <p>Coupon Discount</p>}
        </div>
        <div class="col col-lg-4 price">
          <p>{totalAmount}</p>
          <p>free</p>
          <p>{taxes}</p>
          {props.couponStatus && <p>-{discountAmount}</p>}
        </div>
      </div>
      <div class="row bill total">
        <div class="col col-lg-8">
          <p>Total</p>
        </div>
        <div class="col col-lg-4 price">
          <p>{totalBill}</p>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log("state from summary==>", state);
  return { item: state.item };
}
export default connect(mapStateToProps)(CartSummary);

// export default CartSummary;
