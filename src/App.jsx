import SearchBar from "./weather/components/SearchBar.jsx";
import CurrentWeather from "./weather/components/CurrentWeather.jsx";
import Forecast from "./weather/components/Forecast.jsx";
import "./App.css"

function App(){
  return(
      <div className="app">
        <h1>Forecast</h1>
         <div className='content'>
           <SearchBar />
           <CurrentWeather />
           <Forecast />
         </div>
      </div>
  );
}

export default App;