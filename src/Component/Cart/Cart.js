import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartHearder from "./CartHeader";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import CartDetailsForm from "./CartDetailsForm";
import PaymentMethod from "./PaymentMethod";
import { connect } from "react-redux";
import "./Cart.css";
import cartEmptyImage from "../../Assets/cartEmpty.jpg";
import ProductThumbnail from "../Product/ProductThumbnail";
import { emptyCart } from "../../Action";
import Footer from "../footer/Footer";

const Cart = (props) => {
  const [page, setPage] = useState(0);
  const [couponCode, setCouponCode] = useState(false);
  const [couponIsTouched, setCouponIsTouched] = useState(false);
  const [shippingFormInvalid, setShippingFormInvalid] = useState(true);
  let navigate = useNavigate();

  const cartUpdateComponent = [
    <CartItem items={props.state.item} />,
    <CartDetailsForm onFormSubmit={setShippingFormInvalid} />,
    <PaymentMethod />,
  ];

  const cartHeading = ["Cart items", "Shipping Details", "Payment Methods"];

  const nextPageHandler = () => {
    let index = page;
    setPage(index + 1);
  };

  const backPageHandler = () => {
    let index = page;
    setPage(index - 1);
  };

  const onCouponAppliedHandler = (event) => {
    setCouponIsTouched(true);
    if (event.target.value === "BOOTCAMP2021") {
      setCouponCode(true);
    } else {
      setCouponCode(false);
    }
    if (event.target.value === "") {
      setCouponIsTouched(false);
    }
  };

  const cancelButtonHandler = () => {
    navigate("/home");
  };

  const payNowButtonHandler = () => {
    props.emptyCart();
    navigate("/success");
  };

  return (
    <div className="cart_container">
      {props.state.item.length > 0 ? (
        <div>
          <CartHearder pageNumber={page} />
          <section class="shopping-cart">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 cartItem">
                  <h2>{cartHeading[page]}</h2>
                  {cartUpdateComponent[page]}
                  <div class="actions">
                    <button
                      class="btn btn-dark"
                      disabled={page === 1 && shippingFormInvalid}
                      onClick={
                        page === 2 ? payNowButtonHandler : nextPageHandler
                      }
                    >
                      {/* Next */ page === 2 ? "Pay Now" : "Next"}
                    </button>
                    <button
                      class="btn btn-outline-dark"
                      onClick={
                        page === 0 ? cancelButtonHandler : backPageHandler
                      }
                    >
                      {/* Cancel */ page === 0 ? "Cancel" : "Back"}
                    </button>
                  </div>
                </div>
                <div class="col-lg-4 CartSummary">
                  <h2>Summary</h2>
                  {page === 0 && (
                    <input
                      type="text"
                      name="coupon"
                      id="coupon"
                      placeholder="ENTER COUPON CODE"
                      onChange={onCouponAppliedHandler}
                    />
                  )}
                  {page > 0 && <ProductThumbnail items={props.state.item} />}
                  {!couponCode && couponIsTouched && (
                    <span className="coupon">Invalid Coupon</span>
                  )}
                  <CartSummary couponStatus={couponCode} />
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div class="cartEmpty">
          <img src={cartEmptyImage} />
        </div>
      )}
      <Footer />
    </div>
  );
};

function mapStateToProps(state) {
  console.log("state== from cart>", state);
  return { state };
}

const mapDispatchtoProps = {
  emptyCart,
};

// export default Cart;
export default connect(mapStateToProps, mapDispatchtoProps)(Cart);
