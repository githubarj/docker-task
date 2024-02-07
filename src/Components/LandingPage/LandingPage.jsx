import "./landingPage.css";
import Header from "./Header";
import PriceSection from "./PriceSection";
import { useState } from "react";

function LandingPage() {
  const [currentPlan, setCurrentPlan] = useState("Starter Trial * 500MAUs");

  const handleClick = (value) => {
    setCurrentPlan(value);
  };

  return (
    <div className="landing-page-container">
      <Header currentPlan={currentPlan} />
      <PriceSection onClick = {handleClick} />
    </div>
  );
}

export default LandingPage;
