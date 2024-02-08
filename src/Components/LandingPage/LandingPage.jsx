import "./landingPage.css";
import Header from "./Header";
import PriceSection from "./PriceSection";
import { useState } from "react";

function LandingPage() {
  const [currentPlan, setCurrentPlan] = useState("Starter Trial");
  const [MAUs, setMAUs] = useState("500MAUs");
  const [selectedOption, setSelectedOption] = useState("2500MAUs");


  const handleClick = (plan, value) => {
    setCurrentPlan(plan);
    setMAUs(value);
  };

  

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="landing-page-container">
      <Header currentPlan={currentPlan} MAUs={MAUs} selectedOption= {selectedOption}  />
      <PriceSection onClick={handleClick} onChange = {handleSelectChange} selectedOption ={selectedOption} />
    </div>
  );
}

export default LandingPage;
