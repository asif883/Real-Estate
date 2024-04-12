import { useEffect, useState } from "react";
import PropertiesCard from "./PropertiesCard";


const LetestProperties = () => {
    
     

    const [showAll, setShowAll] = useState(false);

    const handleClick = () => {
        setShowAll(!showAll);
      };
    
    

    const [estates, setEstatesInfo] = useState([]);

    useEffect(()=>{
        fetch("estatesProperties.json")
        .then(res => res.json())
        .then (data => setEstatesInfo(data))
    },[])
   
    return (
        <div className="max-w-7xl mx-auto mt-16">
            <div className="text-center">
                <h1 className="text-4xl text-purple-800 font-bold mb-2">Our Latest Residential Properties</h1>
                <p className="text-gray-500">We are offering best Residential facilities for our  honorable customers. <br />We are providing best services.</p>
            </div>
            
           <div className=" mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {
                estates.slice(0, showAll ? estates.length :6).map((estate,idx) => <PropertiesCard key={idx} estate={estate}></PropertiesCard>)
            }
           </div>
           <div className="text-center mt-8">
                {
                    estates.length > 6 && (
                        <button onClick={handleClick} className="border-2 rounded-lg border-purple-500 text-purple-700 font-medium px-4 py-2 hover:bg-purple-500 hover:text-white">{
                            showAll ? 'Show Less' : 'Show All'
                        }</button>
                    )
                }
            </div>
        </div>
    );
};

export default LetestProperties;