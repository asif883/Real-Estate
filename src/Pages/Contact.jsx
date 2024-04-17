import Nav from "./Header/Nav";
import { SlPeople } from "react-icons/sl";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Helmet } from "react-helmet";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Urban Paradise -Contact</title>
            </Helmet>
            <Nav></Nav>
            <div className="flex gap-16 flex-col-reverse lg:flex-row mt-10 max-w-7xl mx-auto">
                <div>
                   <img src="https://i.ibb.co/FmssrMZ/home5-promo-image.png" alt="" />
                </div>
                <div>
                    <li className="text-lg uppercase text-purple-700">Who we are</li>
                    <h1 className="text-4xl font-bold mt-2">We are Offering The Best <br />
                     Real Estate Property For All</h1>
                     <p className="text-gray-500 mt-3">
                     Make a type specimen book. It has survived not only five centuries,<br />

                        but also the leap into electronic typesetting, remaining essentially <br />

                        electronic typesettings pecimen book
                     </p>
                     <div className="mt-8 flex gap-8"> 
                           <div className="flex gap-2 items-center">
                               <div className="border-2 border-purple-400 p-4 rounded-lg">
                                 <SlPeople className="text-2xl font-extrabold text-purple-600"/>
                               </div>
                               <h1 className="text-2xl font-bold">50K <br /> <span className="text-gray-500 text-xl">
                                  Satisfied people
                                </span> </h1>
                            </div> 
                           <div className="flex gap-2 items-center">
                               <div className="border-2 border-purple-400 p-4 rounded-lg">
                                 <IoCheckmarkDoneSharp className="text-2xl font-bold text-purple-600"/>
                               </div>
                               <h1 className="text-2xl font-bold">11K <br /> <span className="text-gray-500 text-xl">
                                    Verified Property
                                </span> </h1>
                            </div> 
                     </div>

                     <p className="text-gray-500 mt-6">Make a type specimen book. It has survived not only five centuries, <br />

                            but also the leap into electronic typesetting, remaining essentially <br />

                            electronic typesettings pecimen book</p>

                      <button className=" mt-10 border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Contact With Us</button>      

                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Contact;