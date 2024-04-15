import Nav from "./Header/Nav";
import { MdOutlineDone } from "react-icons/md";


const About = () => {
    return (
        <div>
            <Nav></Nav>
            <div className=" bg-purple-50 p-4">
          <div className="flex gap-10 mt-10 max-w-7xl mx-auto">
                <div className="flex-1">
                    <img className="rounded-lg" src="https://i.ibb.co/YLkVKtm/maxresdefault.jpg" alt="" />
                </div>
                <div  className="flex-1">
                    <li className="text-purple-700 text-lg uppercase">Why you choose Our Property</li>
                    <h1 className="text-4xl font-bold">
                       The experts in local and <br />
                        international property
                    </h1>
                    <p className="text-gray-500 mt-4">Agent hen an unknown printer took a galley of type and scrambled <br />it to make a type specimen book. It has survived not only five
                     centuries, <br /> but also the leap into electronic.</p>

                     <ul className="mt-4 text-lg font-medium text-gray-700">
                        <li className="flex gap-1 items-center"><MdOutlineDone  className="text-purple-800"/> Outstanding property</li>
                        <li className="flex gap-1 items-center"> <MdOutlineDone className="text-purple-800" /> Modern City Locations</li>
                        <li className="flex gap-1 items-center"> <MdOutlineDone className="text-purple-800" /> Specialist services</li>
                        <li className="flex gap-1 items-center"> <MdOutlineDone className="text-purple-800" /> Market-leading research</li>
                    
                   </ul>
                   <button className=" mt-3 border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Read More</button>
                   
                </div>
                
                
            </div>

          </div>
          {/* 1st part end */}
           <div className="max-w-7xl mx-auto mt-8">
             <li className="text-lg text-purple-700">TOP AREA</li>
             <h2 className="text-4xl font-bold">Find Your Neighborhood</h2>
            <div className="flex gap-6 mt-8">
                <div className=" w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/K7PM8My/Best-Places-to-Live-Southern-California.jpg" alt="Shoes" /></figure>
                    <div className=" flex justify-between items-center">
                        <div>
                         <p>5 Property</p>
                         <h2 className="">California</h2>
                        </div>
                        <div>
                          <p>arrow</p>
                        </div>
                    </div>
                </div>  
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/K7PM8My/Best-Places-to-Live-Southern-California.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                    <p>5 Property</p>
                        <h2 className="card-title">California</h2>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>  
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/K7PM8My/Best-Places-to-Live-Southern-California.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                    <p>5 Property</p>
                        <h2 className="card-title">California</h2>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>  
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/K7PM8My/Best-Places-to-Live-Southern-California.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                    <p>5 Property</p>
                        <h2 className="card-title">California</h2>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>  
             </div>
           </div>
        </div>
    );
};

export default About;