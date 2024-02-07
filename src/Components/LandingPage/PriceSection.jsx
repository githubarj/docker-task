import Card from "./Card";
import ToggleSlider from "../ToggleSlider/ToggleSlider";
function PriceSection() {
  return (
    <div className="price-section-container">
      <h2 className="title-text">Choose a plan</h2>

      <div className="normal-text billing-switch">
        Billed monthly
        <ToggleSlider /> Billed annually
      </div>

      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default PriceSection;
