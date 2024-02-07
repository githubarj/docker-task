function Card() {
  return (
    <div className="card-container">
      <div className="card-heading">
        <h2 className="header-text">Starter</h2>
        <h1 className="large-text">$19</h1>
      </div>
      <ul className="normal-text accent-bullets ">
        <li>500 MAUs</li>
        <li>3 projects</li>
        <li>Unlimited guides</li>
        <li>Unimited flows</li>
        <li>Unlimited branded themes</li>
        <li>Email support</li>
      </ul>
      <button className="medium-text">Choose Plan</button>
    </div>
  );
}

export default Card;
