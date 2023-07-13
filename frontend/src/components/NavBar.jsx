import React,{useState} from "react";
import logo from './../images/logo.png'

function NavBar(props) {
    const[location, setLocation] = useState();

    const onChange = (e)=>{
        setLocation(e.target.value);
    }


    const onSearch = ()=>{
        props.onSearch(location);
    }

    
  return (
    <nav className="container max-w-xl mx-auto rounded-2xl bg-black bg-opacity-10 backdrop-blur-md backdrop-filter backdrop-blur-md  ">
        <div className="flex items-center justify-between">
            <div>
                <img src={logo} alt="Weather-In" width={120}/>
            </div>

            <div className="pt-2 relative flex mx-auto items-center">
                <input
                className="block w-full pl-5 pr-3 py-2 border border-gray-500 rounded-l-2xl leading-5 shadow-md bg-white bg-opacity-20 placeholder-gray-200 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm text-white"
                type="text"
                placeholder="Search"
                value={location}
                onChange={onChange}
                />
                <button className="relative z-[2] flex items-center rounded-r-2xl bg-blue-500 px-6 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={onSearch}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd" />
                </svg>
                </button>
            </div>

            {/* <div className="pt-2">
                <p className="text-white">Bargarh</p>
                <p className="text-white">32</p>
            </div> */}

            

        </div>
    </nav>
  );
}

export default NavBar;
