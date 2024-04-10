import Nav from "./Header/Nav";
import {  useLoaderData, useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { useEffect, useState } from "react";


const PropertisDetails = () => {
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        fetch("/latest.json")
        .then(res => res.json())
        .then(data => setLatest(data))
    },[]);
    console.log(latest);
    // 
    const estates = useLoaderData();
    // console.log(estates)
    const {id} = useParams();
    const idInt =parseInt(id);
    const oneEstate = estates.find((estate)=> estate.id === idInt);
    // console.log(oneEstate)
    const {estate_title,image,publish_date,view,location,image_url,author_name,phone,email,price,status,bedrooms,bathrooms ,area,segment_name,amenities,description} =oneEstate;
    return (
        <div className="max-w-7xl mx-auto ">
            <Nav></Nav>
            <div className="mt-10 "> 
                <div>
                  <div className="flex justify-between">
                   <h1 className="text-3xl font-bold">{estate_title}</h1>
                   <div>
                     <h2 className="text-2xl font-bold">Price: {price}(Fixed)</h2>
                     <p className="text-2xl font-bold">For {status}</p>
                   </div> 
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
                    <div className="border-2 border-purple-200  rounded-lg p-4 shadow-xl">
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
                                <input type="text" placeholder="Name *" className="input input-bordered border-purple-600 " required />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    
                                </label>
                                <input type="email" placeholder="Email *" className="input input-bordered border-purple-600  " required />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                   
                                </label>
                                <input type="text" placeholder="Phone *" className="input input-bordered border-purple-600  " required />
                                
                                </div>
                                <textarea className="textarea border-purple-600 " placeholder="Massage"></textarea>
                                <div className="form-control mt-6">
                                <button className="border-2 text-purple-800 font-medium hover:bg-purple-600 hover:text-white border-purple-600 px-4 py-3 rounded-lg">Send Massage</button>
                                </div>
                        </form>
                       
                    </div>
                </div>

                <div className="grid gap-6 grid-cols-3">
                    <div className=" col-span-2 border-2 h-[600px] border-purple-200 rounded-lg p-4 mt-8">
                            <h1 className="text-3xl font-bold">Overview</h1>
                                <div className="flex gap-2 justify-between mt-4">
                                        <p className="font-semibold flex items-center gap-1 text-lg border-2 p-2 border-purple-200 rounded-lg"> < IoBedOutline className="" />Beds:{bedrooms}</p>
                                        <p className=" font-semibold flex items-center gap-1 text-lg border-2 p-2 border-purple-200 rounded-lg"> <FaShower />Baths: {bathrooms}</p>
                                        <p className="font-semibold flex items-center gap-1 text-lg border-2 p-2 border-purple-200 rounded-lg"> <BsArrowsFullscreen /> {area} </p>
                                        <p className="font-semibold flex items-center gap-1 text-lg border-2 p-2 border-purple-200 rounded-lg"> <IoHomeOutline /> {segment_name} </p>
                                </div>
                                <div className="mt-4 border-b-2 pb-4">
                                    <h1 className="text-xl font-bold mb-2">Amenities:</h1>
                                    {
                                        amenities.map((amenitie,idx)=> (<li key={idx}>{`${amenitie}`}</li>))
                                    }
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold mt-4 mb-2">About This Listing</h1>
                                <p className="text-gray-500">{description}</p>
                                </div>
                   </div>
                   <div className="mt-8 border-2 border-purple-200 rounded-lg p-2">
                           <h1 className="text-xl font-bold mb-3">Latest Listings</h1>
                            {
                                latest.map((post,idx)=>(<div className="border-2 border-purple-200 rounded-lg p-2 mb-2" key={idx}>
                                    <div className="flex gap-3">
                                        <div className="w-[200px] flex-1">
                                            <img className="mb-4 h-[130px] rounded-lg" src={post.image} alt="" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold mb-1">{post.title}</p>
                                            <p className="text-gray-500 flex items-center gap-1"><IoLocationSharp /> {post.location}</p>
                                            <div className="flex mt-1 justify-between">
                                                <p>For {post.status}</p>
                                                <button className="border-2  border-purple-200 px-2 font-medium rounded-lg ">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                </div>
               
            </div>
        </div>
    );
};

export default PropertisDetails;