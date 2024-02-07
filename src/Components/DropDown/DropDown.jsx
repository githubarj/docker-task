
import { useState } from "react";
import { MAUs } from "../../Data/Prices";

function Dropdown() {

    const options = MAUs.map((item, index) => {
        return <option value={item} key={index} >{item}</option>
    })

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div  >
      <select value={selectedOption} onChange={handleSelectChange}>
        {options}
      </select>

      <p className="normal-text" >Monthly actve users</p>
    </div>
  );
}

export default Dropdown;
