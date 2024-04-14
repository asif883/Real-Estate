import {  Link, NavLink } from "react-router-dom";
import "./nav.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";


const Nav = () => {
 
  const {user,logOut} = useContext(AuthContext)
  const handleSingOut = ()=>{

       logOut()
        .then()
        .catch()

  }

    return (
        <div className="navbar max-w-7xl mx-auto mt-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink className='' to="/">Home</NavLink></li>
              <li><NavLink to="/feature">Feature</NavLink></li>
              <li><NavLink to="/facilities">Facilities</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
             <li><NavLink  to="/about">About</NavLink></li>
            </ul>
          </div>
          <Link to='/' className="font text-4xl text-purple-900 font-bold">Urban Paradise</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 font-medium   text-lg">
            <li><NavLink className='mr-6 ' to="/">Home</NavLink></li>
            <li><NavLink className='mr-6 ' to="/properties">Properties</NavLink></li>
            <li><NavLink className='mr-6 ' to="/blog">Blogs</NavLink></li>
            
            <li><NavLink className='mr-6 ' to="/contact">Contact Us</NavLink></li>
            <li><NavLink  to="/about">About</NavLink></li>
            
            
          </ul>
        </div>
        <div className="navbar-end">
         {
          user ?  <div className="dropdown dropdown-end">
          <div tabIndex={0}  className="btn btn-ghost m-1"><img className="w-16 h-16 rounded-full" src='https://i.ibb.co/YRM9Cdz/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg' alt={user.email} /></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a className="font-semibold">Profile</a></li>
            <li><a className="font-semibold">Update Profile</a></li>
           
          </ul>
         </div>
          :
           <div>
                <Link to='/register'><button className="border-2 mr-4 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Register</button></Link>  
           </div> 
         }
         {
          user ? <Link ><button onClick={handleSingOut} className="border border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Sing Out</button></Link>
          :
          <Link to='/login'><button className="border-2 border-purple-600 px-4  rounded-lg py-3 hover:bg-purple-500 hover:text-white  text-purple-800 font-semibold">Login</button></Link>
         }
        </div>
      </div>
    );
};

export default Nav;