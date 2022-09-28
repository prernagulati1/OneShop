import "./HeroSection.css";

const HeroSection = (props) => {
  const searchHandler = (event) => {
    event.preventDefault();
    // setSearchValue(event.target.value);
    props.onSearch(event.target.value);
  };

  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-section-content">
          <h1>OneShop is a one-stop for Technology Lovers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum
            ab animi voluptatem voluptate sit excepturi voluptatibus eius
            veritatis quisquam.
          </p>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              onChange={searchHandler}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
