import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Tour = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16">
            <div className="flex justify-between">
            <div>
                <li className="text-xl font-semibold text-purple-800 uppercase mb-2">Let's take a tour</li>
                 <h1 className="text-4xl font-bold">Helping People to Find <br /> The
                  <br /> Right Property
                </h1> 
                <p className="text-gray-500 mt-4 mb-10">Over 39,000 people work for us in more than 70 countries all over the <br /> This breadth of global coverage, combined with specialist <br /> follower Over 39,000 people work for us in more.</p>  

                <div className="flex gap-3 items-center">
                    <div className="bg-purple-100 rounded-full w-14 h-14 p-2">
                      <IoHomeOutline className="text-4xl text-purple-400"/>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">The Perfect Residency</h1>
                      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Excepturi accusamus quo laborum ex illo veritatis <br /></p>
                    </div>
                </div>
                <div className="flex gap-3 items-center  mt-10">
                    <div className="bg-purple-100  rounded-full w-14 h-14 p-2">
                      <MdOutlineSecurity className="text-4xl text-purple-400"/>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Trusted By Thousands</h1>
                      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Excepturi accusamus quo laborum ex illo veritatis <br /></p>
                    </div>
                </div>
                <div className="flex gap-3 items-center mt-10">
                    <div className="bg-purple-100 rounded-full w-14 h-14 p-2">
                      <RiSecurePaymentLine className="text-4xl text-purple-400"/>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Total Payment Transparency</h1>
                      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Excepturi accusamus quo laborum ex illo veritatis <br /></p>
                    </div>
                </div>
                 
            </div>
            <div>
               <img src="https://i.ibb.co/hBQJcxN/infobox-2-img.jpg" alt="" />
            </div>
          </div>
        </div>
    );
};

export default Tour;