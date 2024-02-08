
import { MAUs } from "../../Data/Prices";
import "./dropDown.css";
import propTypes from "prop-types"

function Dropdown({handleSelectChange, selectedOption}) {

    const options = MAUs.map((item, index) => {
        return <option value={item} key={index}   >{item}</option>
    })


  return (
    <div  className="dropdown-container" > 
      <select value={selectedOption} onChange={ (event) =>  handleSelectChange(event.target.value)  } className="dropdown-box normal-text " >
        {options}
      </select>

      <p className="normal-text" >Monthly actve users</p>
    </div>
  );
}

Dropdown.propTypes ={
  handleSelectChange : propTypes.func,
  selectedOption : propTypes.string,
}

export default Dropdown;
