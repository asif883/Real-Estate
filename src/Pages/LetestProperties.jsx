import { useEffect, useState } from "react";
import PropertiesCard from "./PropertiesCard";


const LetestProperties = () => {

    const [estates, setEstatesInfo] = useState([]);

    useEffect(()=>{
        fetch("estatesProperties.json")
        .then(res => res.json())
        .then (data => setEstatesInfo(data))
    },[])
    console.log(estates);
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className="text-center">
                <h1 className="text-4xl text-purple-800 font-bold mb-2">Our Latest Residential Properties</h1>
                <p className="text-gray-500">We are offering best Residential facilities for our  honorable customers. <br />We are providing best services.</p>
            </div>
            <div className="flex gap-8">
                <button className="border-2 text-purple-800 font-medium hover:bg-purple-600 hover:text-white border-purple-600 px-3 py-1 rounded-full">Sale</button>
                <button className="border-2 text-purple-800 font-medium hover:bg-purple-600 hover:text-white border-purple-600 px-3 py-1 rounded-full">Rent</button>
           </div>
           <div className=" mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                estates.map((estate,idx) => <PropertiesCard key={idx} estate={estate}></PropertiesCard>)
            }
           </div>
           
        </div>
    );
};

export default LetestProperties;