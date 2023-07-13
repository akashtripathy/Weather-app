import react from 'react';


function SmallCard(props){
    let {value,desc,icon} = props;
    
    return(
        <div className="p-2 flex pitems-center flex mt-20 bg-white bg-opacity-10 backdrop-blur-md backdrop-filter w-full flex-col rounded-xl">
            <div className="text-center font-bold text-gray-800">{`${value}`}
            </div>
            <div className="flex items-center justify-center">
                    <span className="text-xl ">{icon}</span>
                    <span className='text-md'>{desc}</span>        
            </div>
        </div>
    );
}

export default SmallCard;