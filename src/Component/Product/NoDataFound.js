import OopsImg from "../../Assets/Nodatafound.jpg";
import "./NoDataFound.css";

const NoDataFound = () => {
  return (
    <div className="col col-lg-12 NoDataFound-img">
      <img src={OopsImg} alt="no data found image" />
    </div>
  );
};

export default NoDataFound;
