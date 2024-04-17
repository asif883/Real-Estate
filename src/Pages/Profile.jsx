import { useContext } from "react";
import Nav from "./Header/Nav";
import { AuthContext } from "../Provider/Provider";


const Profile = () => {
    const {user} =useContext(AuthContext)
    return (
        <div>
            <Nav></Nav>
            <div className="max-w-4xl mx-auto">
            <div className=" p-8 bg-purple-50 rounded-lg mt-6">
                    <div className="flex justify-around flex-col lg:flex-row-reverse">
                        <img className="flex-1 rounded-xl border-2 border-purple-300" src={user.photoURL} alt={user.email}/>
                        <div className="flex-1">
                        <h1 className="text-3xl font-bold">Name:{user.displayName}</h1>
                        <p className="py-6 text-2xl">Email:{user.email}</p>
                        <button className=" border-2 mr-4 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Update Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;