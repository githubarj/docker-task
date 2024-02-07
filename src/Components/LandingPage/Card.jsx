import propTypes from "prop-types";
import Dropdown from "../DropDown/DropDown";
function Card(props) {
  const features = props.features.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div className="card-container">
      <div className="card-heading">
        <h2 className="header-text">{props.product}</h2>

        {props.price ? (
          <h2 className="title-text enterprise-price">{props.price}</h2>
        ) : (
          <div className="price-text">
            <h1 className="large-text">
              {props.checked ? props.annually : props.monthly}
              {!props.checked && <span className="header-text">/month</span>}
            </h1>
          </div>
        )}
        {props.product == "Pro" && <Dropdown />}
      </div>
      <ul className="normal-text accent-bullets ">{features}</ul>
      <button
        className="medium-text"
        onClick={() => props.handleClick(`${props.product} `)}
      >
        Choose Plan
      </button>
    </div>
  );
}

export default Card;

Card.propTypes = {
  product: propTypes.string,
  price: propTypes.string,
  monthly: propTypes.string,
  annually: propTypes.string,
  checked: propTypes.bool,
  features: propTypes.array,
  handleClick: propTypes.func,
};
