import "../Cart/CartHeader.css";

const CartHearder = (props) => {
  return (
    <section class="section-shopping-head">
      <div class="container">
        <div class="row">
          <div class="col col-lg-4">
            <h3 class={props.pageNumber === 0 ? "active" : " "}>
              Shopping Cart
            </h3>
          </div>
          <div class="col col-lg-4">
            <h3 class={props.pageNumber === 1 ? "active" : " "}>
              Shopping Details
            </h3>
          </div>
          <div class="col col-lg-4">
            <h3 class={props.pageNumber === 2 ? "active" : " "}>
              Payment Options
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartHearder;
