function Card(props) {
  const features = props.features.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div className="card-container">
      <div className="card-heading">
        <h2 className="header-text">{props.product}</h2>

        {props.price ? (
          <h2 className="title-text">{props.price}</h2>
        ) : (
          <h1 className="large-text">{props.monthly}</h1>
        )}
      </div>
      <ul className="normal-text accent-bullets ">{features}</ul>
      <button className="medium-text">Choose Plan</button>
    </div>
  );
}

export default Card;
