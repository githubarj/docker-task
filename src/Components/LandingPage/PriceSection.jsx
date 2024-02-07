import Card from "./Card"
function PriceSection() {
  return (
    <div className="price-section-container">
      <h2 className="title-text" >Choose a plan</h2>
      <p className="normal-text">Billed monthly Billed annually </p>
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default PriceSection