import { IoIosSearch } from "react-icons/io";
import {useState,useCallback,memo,useEffect} from "react";
import {useWeather} from "../context/WeatherContext.jsx";
import {getCityImage, getWeatherData} from "../utils/getWeatherData.js";

function SearchBar() {
  const [input,setinput] = useState("");
  const {setCity, setWeatherData, setImgSrc} = useWeather();

  const getCity = useCallback(async (cityName)=>{
      if(cityName.length > 2){
        const data = await getWeatherData(cityName);
        setWeatherData(data);
        const image = await getCityImage(cityName);
        setImgSrc(image);
      }
  },);

  useEffect(() => {
    getCity("Gyumri");
  }, []);

  function handleSubmit(e){
    e.preventDefault();
    setCity(input);
    getCity(input);
  }
  function handleChange(e){
    setinput(e.target.value);
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