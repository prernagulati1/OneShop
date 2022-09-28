import "./Reviews.css";
// import ProductImg from "../Assets/p1.jpg";
import Person from "../Assets/person.jpg";

const Reviews = () => {
  return (
    <section class="reviews">
      <div class="container">
        <h2>Reviews</h2>
        <div class="row">
          <div class="col col-lg-4">
            <div class="testimonial">
              <img src={Person} alt="" />
              <div class="testimonial-details">
                <p>JOHN DOE</p>
                <span>12 aug 2021</span>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-8">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis saepe dolores labore quae? Voluptatem hic voluptate
              magnam ex nulla harum nobis commodi velit. Dicta animi, ullam odit
              laudantium quas dolore?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
