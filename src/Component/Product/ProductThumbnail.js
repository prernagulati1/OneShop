import "../Product/ProductThumbnail.css";
import { Fragment } from "react";

const ProductThumbnail = (props) => {
  //   console.log("props from thumbnail===>", props);
  return (
    <Fragment>
      {props.items.map((product) => {
        return (
          <div className="row">
            <div className="col col-lg-4 col-md-4 thumbnail">
              <img src={product.mainImage} />
            </div>
            <div className="col col-lg-8 col-md-8">
              <h5>{product.name}</h5>
              <p>${product.price}</p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProductThumbnail;
