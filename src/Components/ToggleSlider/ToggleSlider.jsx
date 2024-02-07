import "./toggleSlider.css";
import propTypes from "prop-types";

function ToggleSlider(props) {
  return (
    <div className="toggle-slider">
      <input
        type="checkbox"
        id="toggle"
        checked={props.checked}
        onChange={props.handleClick}
      />
      <label htmlFor="toggle" className="slider" />
    </div>
  );
}

ToggleSlider.propTypes = {
  checked: propTypes.bool,
  handleClick: propTypes.func,
};

export default ToggleSlider;
