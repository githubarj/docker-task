import propTypes from "prop-types";

function Header({currentPlan}) {
  return (
    <div className="header-container">
      <p className="normal-text">Your current plan:</p>
      <h2 className="medium-text">{currentPlan}</h2>
    </div>
  );
}

Header.propTypes = {
  currentPlan: propTypes.string.isRequired,
};

export default Header;
