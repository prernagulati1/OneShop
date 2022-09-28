import "./PaymentMethod.css";
import PayPalImg from "../../Assets/paypal.jpg";

const PaymentMethod = () => {
  return (
    <form action="#">
      <div class="row credit-card">
        <input
          type="radio"
          class="col col-lg-1"
          name="paymentMethod"
          id="credit-card"
        />
        <div class="col col-lg-11">
          <label for="credit-card" className="Cart-type">
            Credit Card
          </label>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            dignissimos expedita laboriosam ratione a fugit?
          </p>
        </div>
        <div class="row">
          <input
            type="text"
            name="card"
            id="card"
            class="col-lg-6 col-md-6"
            placeholder="0000 0000 0000 0000"
          />
          <input
            type="text"
            name="year"
            class="col-lg-2 col-md-2 col-sm-6 col-6"
            id="year"
            placeholder="MM/YY"
          />
          <input
            type="text"
            name="cvv"
            class="col-lg-2 col-md-2 col-sm-6 col-6"
            id="cvv"
            placeholder="CVV"
          />
        </div>
        <div class="row">
          <input
            type="text"
            class="col col-lg-12"
            name="card-holder-name"
            id="card-holder-name"
            placeholder="Card Holder Name"
          />
        </div>
      </div>
      <hr />
      <div class="row payment">
        <div class="col col-lg-11">
          <div class="row paypal">
            <input
              type="radio"
              name="paymentMethod"
              class="col col-lg-1"
              id="free-shipping"
            />
            <div class="col col-lg-8">
              <label for="free-shipping" class="">
                Paypal
              </label>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                libero.
              </p>
            </div>
            <div class="logo col col-lg-3">
              <img src={PayPalImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentMethod;
