import Nav from "./Header/Nav";
import {  useLoaderData, useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const PropertisDetails = () => {
    const estates = useLoaderData();
    // console.log(estates)
    const {id} = useParams();
    const idInt =parseInt(id);
    const oneEstate = estates.find((estate)=> estate.id === idInt);
    // console.log(oneEstate)
    const {estate_title,image,publish_date,view,location,image_url,author_name,phone,email,price} =oneEstate;
    return (
        <div className="max-w-7xl mx-auto ">
            <Nav></Nav>
            <div className="mt-10"> 
                <div>
                  <div className="flex items-center justify-between">
                   <h1 className="text-3xl font-bold">{estate_title}</h1>
                   <h2 className="text-2xl font-bold">Price: {price}(Fixed)</h2> 
                  </div>
                  <div className="flex gap-2 text-gray-500 font-medium mt-2">
                    <p className="flex gap-1 items-center"><IoLocationSharp /> {location}</p>
                    <p>/</p>
                    <p className="flex gap-1 items-center"><IoIosTimer /> {publish_date}</p>
                    <p>/</p>
                    <p className="flex gap-1 items-center"> <IoEye /> {view}</p>
                  </div>
                </div>
                 
                <div className="grid gap-6 grid-cols-3 mt-6">
                    <div className="col-span-2 ">
                        <img className="w-full rounded-lg" src={image} alt="" />                 
                    </div>
                    {/* right side */}
                    <div className="border-2 rounded-lg p-4 shadow-xl">
                      <h1 className="text-2xl font-bold mb-2">Contact with Owner</h1>

                        <div className="flex items-center gap-6">
                            <div>
                              
                                <img className="w-28 h-28 rounded-full border-2 border-purple-300 p-1" src={image_url} alt="" />
                            </div>
                            <div>
                            
                                 <p className="text-2xl text-purple-700 font-medium"> {author_name}</p>
                                 <p className="flex gap-2 items-center text-lg font-medium text-gray-500"><FaPhoneAlt /> {phone}</p>
                                 <p className="flex gap-2 items-center text-lg font-medium text-gray-500"><MdOutlineEmail />{email}</p>
                            </div>
                        </div>
                        <form className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    
                                </label>
                                <input type="text" placeholder="Name *" className="input input-bordered input-primary " required />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    
                                </label>
                                <input type="email" placeholder="Email *" className="input input-bordered input-primary " required />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                   
                                </label>
                                <input type="text" placeholder="Phone *" className="input input-bordered input-primary " required />
                                
                                </div>
                                <textarea className="textarea textarea-primary" placeholder="Massage"></textarea>
                                <div className="form-control mt-6">
                                <button className="border-2 text-purple-800 font-medium hover:bg-purple-600 hover:text-white border-purple-600 px-4 py-3 rounded-lg">Send Massage</button>
                                </div>
                        </form>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default PropertisDetails;