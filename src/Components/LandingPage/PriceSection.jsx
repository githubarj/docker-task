import Card from "./Card";
import ToggleSlider from "../ToggleSlider/ToggleSlider";
import { prices } from "../../Data/Prices";
import { useState } from "react";

function PriceSection() {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const pricing = prices.map((item, index) => {
    return <Card key={index} {...item} checked= {checked} />;
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

export default PriceSection;
