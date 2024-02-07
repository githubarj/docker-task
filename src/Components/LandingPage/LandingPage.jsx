import "./landingPage.css";
import Header from "./Header";
import PriceSection from "./PriceSection";
import { useState } from "react";

function LandingPage() {
  const [currentPlan, setCurrentPlan] = useState("Starter Trial");
  const [MAUs, setMAUs] = useState("500MAUs");

  const handleClick = (plan, value) => {
    setCurrentPlan(plan);
    setMAUs(value);
  };

  return (
    <div className="landing-page-container">
      <Header currentPlan={currentPlan} MAUs={MAUs} />
      <PriceSection onClick={handleClick} />
    </div>
  );
}

export default LandingPage;
