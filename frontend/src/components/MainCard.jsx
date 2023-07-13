import react, { useContext, useState } from 'react';
import SmallCard from './SmallCard';
import { CiTempHigh } from 'react-icons/ci';
import { WiHumidity } from 'react-icons/wi';

function MainCard(props){
    const extraData =[
        {id:1, value: Math.floor(props.weatherData.main.feels_like), desc: "Feels Like",icon:<WiHumidity/> },
        {id:2, value: Math.floor(props.weatherData.main.temp_min), desc: "Min" ,icon:<CiTempHigh/>},
        {id:3, value: Math.floor(props.weatherData.main.temp_max), desc: "Max",icon:<CiTempHigh/> },
        {id:4, value: Math.floor(props.weatherData.main.humidity), desc: "Humidity",icon:<WiHumidity/> }
    ]

    const now = new Date(); 
    const year = now.getFullYear(); 
    const month = now.getMonth(); 
    const day = now.getDate(); 
    
    let weatherIcon = `https://openweathermap.org/img/wn/${props.weatherData.weather.icon}@2x.png`;


   
    
    return(
        <>
        <div className="relative flex pb-8 items-center flex mx-auto mt-20 bg-white bg-opacity-10 backdrop-blur-md backdrop-filter w-full max-w-[18rem] flex-col rounded-xl">
            <div className="pt-8 flex">
            <span className='text-6xl animate-pulse text-yellow-500'><img src={weatherIcon} alt="icon" /></span>
                <div className='pt-5'>
                    <span className="font-bold text-xl mb-2">{props.weatherData.location}</span>
                    <p className="text-white opacity-45 text-base">{day}-{month+1}-{year}</p> 
                </div>               
            </div>
            <div className="text-2xl flex items-center pt-5 pb-3">
                    <span className="text-7xl font-bold">{Math.floor(props.weatherData.main.temp)}</span>
                    <span className=''>&#8451;</span>     
            </div>
            <span className='text-gray-900 font-bold'>{(props.weatherData.weather.description).toUpperCase()}</span>
        </div>

        <div className='flex justify-center flex-wrap'>
            {
                extraData.map(user=>{
                    return <div className='mx-5' key={user.id}>
                        <SmallCard key={user.id} value={user.value} desc={user.desc} icon={user.icon}/>
                    </div>
                })
            }
        </div>
        
        
        </>
    );
}

export default MainCard;