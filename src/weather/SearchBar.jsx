import { IoIosSearch } from "react-icons/io";
import {useState} from "react";

function SearchBar({getCity}) {
const [value,setValue] = useState('');
  function handleSubmit(e){
    e.preventDefault();
    getCity(value);
    setValue('')
  }
  function handleChange(e){
    setValue(e.target.value);
  }

  return(
      <form id="search-box" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange}/>
        <button className="icon"><IoIosSearch /></button>
      </form>
  )
}

export default SearchBar;