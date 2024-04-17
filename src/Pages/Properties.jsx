import Nav from "./Header/Nav";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsBuilding } from "react-icons/bs";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { BsBuildings } from "react-icons/bs";
import { TbBuildingBank } from "react-icons/tb";
import { TbBuildingEstate } from "react-icons/tb";
import { TbBuildingCommunity } from "react-icons/tb";
import { TbBuildingCottage } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import { Helmet } from "react-helmet";




const Properties = () => {
    return (
        <div>
            <Helmet>
                <title>Urban Paradise -property</title>
            </Helmet>
            <Nav></Nav>
            <div className="bg-purple-50">
                <div className="max-w-7xl mx-auto mt-10 p-8">
                <li className="text-lg text-purple-600 mb-3">
                    PROPERTY TYPE
                </li>
                <h1 className="text-3xl font-bold">Let’s Explore by Property Type</h1> 
                
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
                     {/* 1st card */}
                        <div className="card bg-base-100 border border-purple-300  py-4 hover:shadow-2xl ">
                        <figure><HiOutlineBuildingOffice2  className=" text-purple-400 w-full h-[150px]"/></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Apartment</h2>
                                <p>5 Listings</p>
                                <div className="card-actions justify-end">
                                <button className=" mt-3 border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Details</button>
                                </div>
                            </div>
                      </div>
                       {/* 2nd card */}
                        <div className="card bg-base-100 border border-purple-300  py-4 hover:shadow-2xl">
                        <figure><HiOutlineBuildingLibrary  className=" text-purple-400 w-full h-[150px]"/></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Studio Villa</h2>
                                <p>6 Listings</p>
                                <div className="card-actions justify-end">
                                <button className=" mt-3 border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Details</button>
                                </div>
                            </div>
                      </div>
                        <div className="card bg-base-100 border border-purple-300  py-4 hover:shadow-2xl">
                        <figure><BsBuilding  className=" text-purple-400 w-full h-[150px]"/></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Restaurant</h2>
                                <p>3 Listings</p>
                                <div className="card-actions justify-end">
                                <button className=" mt-3 border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Details</button>
                                </div>
                            </div>
                      </div>
                        <div className="card bg-base-100 border border-purple-300  py-4 hover:shadow-2xl">
                        <figure><BsBuildings  className=" text-purple-400 w-full h-[150px]"/></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Office</h2>
                                <p>2 Listings</p>
                                <div className="card-actions justify-end">
                                <button className=" mt-3 border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Details</button>
                                </div>
                            </div>
                      </div>
                        <div className="card bg-base-100 border border-purple-300  py-4 hover:shadow-2xl">
                        <figure><TbBuildingBank  className=" text-purple-400 w-full h-[150px]"/></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Villa</h2>
                                <p>3 Listings</p>
                                <div className="card-actions justify-end">
                                <button className=" mt-3 border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Details</button>
                                </div>
                            </div>
                      </div>
                        <div className="card bg-base-100 border border-purple-300  py-4 hover:shadow-2xl">
                        <figure><TbBuildingEstate  className=" text-purple-400 w-full h-[150px]"/></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Commercial</h2>
                                <p>2 Listings</p>
                                <div className="card-actions justify-end">
                                <button className=" mt-3 border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Details</button>
                                </div>
                            </div>
                      </div>
                        <div className="card bg-base-100 border border-purple-300  py-4 hover:shadow-2xl">
                        <figure><TbBuildingCommunity  className=" text-purple-400 w-full h-[150px]"/></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Resort</h2>
                                <p>5 Listings</p>
                                <div className="card-actions justify-end">
                                <button className=" mt-3 border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Details</button>
                                </div>
                            </div>
                      </div>
                        <div className="card bg-base-100 border border-purple-300  py-4 hover:shadow-2xl">
                        <figure><TbBuildingCottage  className=" text-purple-400 w-full h-[150px]"/></figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Studio Home</h2>
                                <p>4 Listings</p>
                                <div className="card-actions justify-end">
                                <button className=" mt-3 border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Details</button>
                                </div>
                            </div>
                      </div>
                </div>

                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8">
             <li className="text-lg text-purple-700">TOP AREA</li>
             <h2 className="text-4xl font-bold">Find Your Neighborhood</h2>
            <div className="flex flex-col md:flex-row gap-6 mt-8">
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[200px]" src="https://i.ibb.co/bvs2d2b/lauterbrunnen.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                    <p>4 Property</p>
                        <h2 className="card-title">Switzerland</h2>
                        <div className="card-actions justify-end">
                        <button className="btn border border-purple-500 text-2xl p-3 hover:bg-purple-500 hover:text-white"><MdArrowOutward /></button>
                        </div>
                    </div>
                </div>  
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[200px]" src="https://i.ibb.co/7SLckk5/Getty-Images-946087016.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                    <p>6 Property</p>
                        <h2 className="card-title">New York</h2>
                        <div className="card-actions justify-end">
                        <button className="btn border border-purple-500 text-2xl p-3 hover:bg-purple-500 hover:text-white"><MdArrowOutward /></button>
                        </div>
                    </div>
                </div>  
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[200px]" src="https://i.ibb.co/YdGcPWb/Albania-2218x1406.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                    <p>5 Property</p>
                        <h2 className="card-title">Albania</h2>
                        <div className="card-actions justify-end">
                        <button className="btn border border-purple-500 text-2xl p-3 hover:bg-purple-500 hover:text-white"><MdArrowOutward /></button>
                        </div>
                    </div>
                </div>  
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[200px]" src="https://i.ibb.co/K7PM8My/Best-Places-to-Live-Southern-California.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                    <p>5 Property</p>
                        <h2 className="card-title">California</h2>
                        <div className="card-actions justify-end ">
                        <button className="btn border border-purple-500 text-2xl p-3 hover:bg-purple-500 hover:text-white"><MdArrowOutward /></button>
                        </div>
                    </div>
                </div>  
             </div>
           </div>
     </div>
    );
};

export default Properties;