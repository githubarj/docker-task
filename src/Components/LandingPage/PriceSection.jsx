import Card from "./Card";
import ToggleSlider from "../ToggleSlider/ToggleSlider";
import { prices } from "../../Data/Prices";
import { useState } from "react";
import propTypes from "prop-types";

function PriceSection({ onClick, selectedOption , onChange }) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const pricing = prices.map((item, index) => {
    return (
      <Card
        key={index}
        {...item}
        checked={checked}
        handleClick={onClick}
        selectedOption = {selectedOption}
        onChange = {onChange}
      />
    );
  });

  return (
    <div className="price-section-container">
      <h2 className="title-text">Choose a plan</h2> 

      <div className="normal-text billing-switch">
        Billed monthly
        <ToggleSlider checked={checked} handleClick={handleToggle} /> Billed
        annually
      </div>

      <div className="cards">{pricing}</div>
    </div>
  );
}

PriceSection.propTypes = {
  onClick: propTypes.func,
  selectedOption: propTypes.string,
  onChange: propTypes.func,
};

export default PriceSection;
