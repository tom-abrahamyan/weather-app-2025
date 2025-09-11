import { IoIosSearch } from "react-icons/io";
import {useState,memo,useEffect} from "react";
import { useDispatch } from "react-redux";  
import {fetchWeather} from "../../store/slices/weatherSlice.js"


function SearchBar() {
  const [input,setInput] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchWeather("gyumri"));
  }, []);


  function handleSubmit(e){
    e.preventDefault();
    dispatch(fetchWeather(input));
    setInput("");
  }
  function handleChange(e){
    setInput(e.target.value);
  }

  return(
      <form id="search-box" onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange}
        placeholder={"Search city ..."}/>
        <button className="icon"><IoIosSearch /></button>
      </form>
  )
}

export default memo(SearchBar);