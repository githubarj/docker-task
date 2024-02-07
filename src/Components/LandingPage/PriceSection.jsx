import Card from "./Card";
import ToggleSlider from "../ToggleSlider/ToggleSlider";
import { prices } from "../../Data/Prices";

function PriceSection() {
  const pricing = prices.map((item, index) => {
    return <Card key={index} {...item} />;
  });

  return (
    <div className="price-section-container">
      <h2 className="title-text">Choose a plan</h2>

      <div className="normal-text billing-switch">
        Billed monthly
        <ToggleSlider /> Billed annually
      </div>

      <div className="cards">{pricing}</div>
    </div>
  );
}

export default PriceSection;
