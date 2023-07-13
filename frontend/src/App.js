import './components/NavBar'
import NavBar from './components/NavBar';
import MainCard from './components/MainCard'
import { useState,useEffect } from 'react';
import Spinner from './components/Spinner';

function App() {
  const[weatherData,setWeatherData] = useState({});
  const [loading, setLoading] =useState(true);

  const searchLocation = async(location)=>{
    if(location===undefined) return;
    let url = `http://localhost:5000/api/weather/${location}`;
    setLoading(true);
        const response = await fetch(url);

        if(response.status===200){
            const data = await response.json();
            setWeatherData(data);
            // console.log(weatherData["main"]);
        }else if(response.status === 404){
            console.log("City not found");
        }else{
            console.log("something went wrong");
        }
        setLoading(false);
  }


  useEffect(() => {
    document.title = "Weather-In Search the city"
    fetch('http://localhost:5000/api/weather')
      .then(response => response.json())
      .then(data => {
          setWeatherData(data);
          setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <div className='h-auto sm:h-[100vh] bg-gradient-to-tr from-violet-900 via-blue-500 to-violet-900 pt-5 pb-5 '>
        <NavBar onSearch={searchLocation}  />
        {loading===true ?<Spinner/>: <MainCard weatherData={weatherData}/>}
      
    </div>
    </>
  );
}

export default App;
