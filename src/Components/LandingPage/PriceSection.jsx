import Card from "./Card";
import ToggleSlider from "../ToggleSlider/ToggleSlider";
function PriceSection() {
  return (
    <div className="price-section-container">
      <h2 className="title-text">Choose a plan</h2>

      <p className="normal-text billing-switch">
        Billed monthly
        <ToggleSlider /> Billed annually
      </p>

      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default PriceSection;
