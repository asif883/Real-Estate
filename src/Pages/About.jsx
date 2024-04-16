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
          <div className="flex gap-10 flex-col lg:flex-row mt-16 max-w-7xl mx-auto">
            <div>
                <h1 className="text-4xl font-bold">We Provide You The Best Service <br />
                 Of Real Estate Industries</h1>

                 <p className="text-gray-500 mt-3">

                 Building when an unknown printer took a galley of type and <br /> scram bled it to make a  type specimen book. It has survived not only five <br /> centuries, but also the leape. <br />

 
           <br />
          
                    when an unknown printer took a galley of type andetry scram bled <br /> it to make a type specimen bookhas survived not only centuriesalwith <br /> the release of Letraset sheets containing Lorem Ipsum <br /> passages, and more recently
                 </p>
            </div>
            <div>
               <img src="https://i.ibb.co/pr1p7Zx/home-4-sec-1.jpg" alt="" />
            </div>
          </div>
          
        </div>
    );
};

export default About;