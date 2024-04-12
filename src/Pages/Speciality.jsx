import { TbHomeSearch } from "react-icons/tb";
import { RiHomeHeartLine } from "react-icons/ri";
import { TbHomeRibbon } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
const Speciality = () => {
    return (
        <div className="bg-purple-50">
            <div className="max-w-7xl mx-auto pb-20">
            <div className="text-center pt-20">
                <p className="text-purple-800 font-bold">What We do</p>
                <h1 className="text-4xl font-bold">Our Main Speciality</h1>
            </div>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 mt-6">
                <div className="text-center hover:shadow-xl hover:bg-base-100 p-8 rounded-xl ">
                   <div className="flex justify-center">
                        <div className="bg-purple-100 hover:bg-purple-500 p-2  w-16 h-16 rounded-full text-center ">
                           <TbHomeSearch className="text-5xl  text-purple-400
                            hover:text-white"/>
                        </div>
                   </div>
                    <h1 className="text-2xl font-bold mt-2 mb-1">Buy a New Home</h1>
                    <p className="text-gray-500">
                        Discover your dream home with us. Tailored solutions, expert guidance, and extensive listings ensure a smooth buying experience.
                    </p>
                    <Link to='/properties' className="flex justify-center">
                        <button className="flex items-center gap-1 mt-4 border text-purple-800 font-medium  hover:bg-purple-600 hover:text-white border-purple-600 px-4 py-2 rounded-lg">Check Property <MdKeyboardArrowRight /></button>
                    </Link>
                </div>

                <div className="text-center hover:shadow-xl hover:bg-base-100 p-8 rounded-xl">
                   <div className="flex justify-center">
                        <div className="bg-purple-100 hover:bg-purple-500  p-2  w-16 h-16 rounded-full text-center">
                           <TbHomeRibbon className="text-5xl  text-purple-400 hover:text-white"/>
                        </div>
                   </div>
                    <h1 className="text-2xl font-bold mt-2 mb-1">Sell a Home</h1>
                    <p className="text-gray-500">Maximize your property's appeal with our strategic marketing, staging, and negotiation expertise for a seamless home selling experience.
                    </p>
                    <Link to='/properties' className="flex justify-center">
                        <button className="flex items-center gap-1 mt-4 border text-purple-800 font-medium  hover:bg-purple-600 hover:text-white border-purple-600 px-4 py-2 rounded-lg">Check Property <MdKeyboardArrowRight /></button>
                    </Link>
                </div>

                <div className="text-center hover:shadow-xl hover:bg-base-100 p-8 rounded-xl">
                   <div className="flex justify-center">
                        <div className="bg-purple-100 hover:bg-purple-500 p-2  w-16 h-16 rounded-full text-center">
                           <RiHomeHeartLine className="text-5xl hover:text-white text-purple-400"/>
                        </div>
                   </div>
                    <h1 className="text-2xl font-bold mt-2 mb-1">Rent a Home</h1>
                    <p className="text-gray-500">
                       Find your ideal rental property effortlessly. Benefit from our tailored solutions, vast listings, and expert guidance for a seamless renting experience.
                    </p>
                    <Link to='/properties' className="flex justify-center">
                        <button className="flex items-center gap-1 mt-4 border text-purple-800 font-medium  hover:bg-purple-600 hover:text-white border-purple-600 px-4 py-2 rounded-lg">Check Property <MdKeyboardArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Speciality;