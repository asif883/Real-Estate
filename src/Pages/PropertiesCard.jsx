import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 


const PropertiesCard = ({estate}) => {

    const {id,estate_title,image,description}= estate;  
    return (
        
        <div>     
       <Link to={`/properties/${id}`}>
          <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-[250px] w-[400px] rounded-t-lg" src={image} alt={estate_title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
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