
import { useState } from "react";
import { MAUs } from "../../Data/Prices";
import "./dropDown.css";

function Dropdown() {

    const options = MAUs.map((item, index) => {
        return <option value={item} key={index}   >{item}</option>
    })

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div  className="dropdown-container" >
      <select value={selectedOption} onChange={handleSelectChange} className="dropdown-box normal-text " >
        {options}
      </select>

      <p className="normal-text" >Monthly actve users</p>
    </div>
  );
}

export default Dropdown;
