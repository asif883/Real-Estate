import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { IoLocationSharp } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";



const PropertiesCard = ({estate}) => {

    const {id,estate_title,image,location,author_name,image_url ,bedrooms,bathrooms ,area}= estate;  
    return (
        
        <div>     
       <Link to={`/properties/${id}`} >
           <div className="flex gap-3 border border-purple-200 rounded-lg p-3"> 
            <div>
                <img className="w-[100px] lg:w-[250px] h-[100px] lg:h-[160px] rounded-lg" src={image} alt={estate_title} />
            </div>
            <div>
                 <h1 className="text-xl font-bold">{estate_title}</h1>
                 <p className="flex items-center gap-1 text-gray-500"><IoLocationSharp></IoLocationSharp>{location}</p> 
                 <div className="flex gap-2 flex-col lg:flex-row  mt-2 border-b border-purple-300 pb-3">
                            <p className="flex items-center gap-1 text-lg p-2 rounded-3xl"> < IoBedOutline className="text-purple-600 text-xl" />Beds:{bedrooms}</p>
                            <p className="flex items-center  text-lg p-2 rounded-3xl"> <FaShower className="text-purple-600 text-xl" />Baths: {bathrooms}</p>
                            <p className="flex items-center text-lg  p-2 rounded-3xl"> <BsArrowsFullscreen className="text-purple-600 text-xl"/> {area} </p>
                 </div> 
                 <div className="mt-3 flex justify-between">
                    <div className="flex gap-1 items-center">
                        <img className="w-8 h-8 rounded-full" src={image_url} alt="" />
                        <p>{author_name}</p>
                    </div>
                    <div>
                        <button className="border text-purple-800 font-medium  hover:bg-purple-600 hover:text-white border-purple-600 px-2 py-1 rounded-lg">Details</button>
                    </div>
                 </div>
            </div>
           </div>
        </Link>
        </div>

       
    );
};

PropertiesCard.propTypes={
    estate: PropTypes.object
}

export default PropertiesCard;