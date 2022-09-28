import "./ProductView.css";
import { useParams } from "react-router";
import ProductData from "../../storage/product.json";
import AddToCartButton from "../Cart/AddToCartButton";

const ProductView = () => {
  const { id } = useParams();

  const selectedProduct = ProductData.filter((item) => {
    if (item.id === id) {
      return item;
    }
  });

  const imagesOfProduct = selectedProduct[0].images;

  return (
    <section class="Product-view">
      <div class="container">
        <div class="row">
          <div class="col col-lg-6">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="false"
            >
              <div class="carousel-indicators">
                <img
                  src={imagesOfProduct[0]}
                  alt=""
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <img
                  src={imagesOfProduct[1]}
                  alt=""
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                />
                <img
                  src={imagesOfProduct[2]}
                  alt=""
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                />
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={imagesOfProduct[0]}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={imagesOfProduct[1]}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={imagesOfProduct[2]}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col col-lg-6 product-details">
            <h2>{selectedProduct[0].name}</h2>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <span>5 Reviews</span>
            </div>
            <div class="other-details">
              <p>${selectedProduct[0].price}</p>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <p>{selectedProduct[0].description}</p>
            <AddToCartButton class="btn btn-dark" item={selectedProduct[0]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
