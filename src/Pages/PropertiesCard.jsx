import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { IoLocationSharp } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";



const PropertiesCard = ({estate}) => {

    const {id,estate_title,image,location,author_name,image_url ,facilities,bedrooms,bathrooms ,area}= estate;  
    return (
        
        <div>     
       <Link to={`/properties/${id}`} >
          <div className="card  border-2 border-purple-200">
                <figure><img className="h-[250px] w-[400px] rounded-t-lg" src={image} alt={estate_title} /></figure>
                <div className="card-body">
                    
                    {/* <p>{description}</p> */}
                    
                    <div className="border-b-2 border-gray-200 pb-4 ">
                        <h2 className="card-title mb-2">{estate_title}</h2>
                        <p className="flex gap-2 items-center text-gray-500"><IoLocationSharp  /> {location}</p>
                        <p className="text-xl font-semibold mb-1 mt-3">Facilities:</p>
                        {
                            facilities.map((facility,idx) => (<li className="text-gray-600 font-medium text-lg" key={idx}>{`${facility}`}</li>))
                        }
                        <div className="flex gap-2 justify-around mt-2">
                            <p className="flex items-center gap-1 text-lg bg-purple-100 p-2 rounded-3xl"> < IoBedOutline className="" />Beds:{bedrooms}</p>
                            <p className="flex items-center gap-1 text-lg bg-purple-100 p-2 rounded-3xl"> <FaShower />Baths: {bathrooms}</p>
                            <p className="flex items-center gap-1 text-lg bg-purple-100 p-2 rounded-3xl"> <BsArrowsFullscreen /> {area} </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-2 ">
                        <div className="flex gap-2 items-center">
                            <img className="w-7 h-8 rounded-full" src={image_url} alt="" />
                            <p className="text-lg font-bold">{author_name}</p>
                        </div>
                        <button className="border-2 text-purple-800 font-medium hover:bg-purple-600 hover:text-white border-purple-600 px-4 py-2 rounded-lg">Details</button>
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