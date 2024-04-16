import { Link } from "react-router-dom";
import Nav from "./Header/Nav";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";


const Login = () => {
    const {login,singINGoogle} = useContext(AuthContext)
    
      
     const handleLogin = e=>{
        e.preventDefault();
        const form = new FormData (e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        


        login(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch (error =>{
            console.error( error)
        })

     }
     const handleGoogleSingIn = ()=>{
        singINGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
     }
     
     return (
        <div>
            <Nav></Nav>
            <div className="max-w-md mx-auto mt-10 shadow-xl rounded-lg">
                <div className="text-center">
                    <h1 className="text-4xl text-purple-800 font-bold">Login Now</h1>
                </div>
            <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered border border-purple-600" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered border border-purple-600" required />
                   
                    </div>
                   
                    <div className="form-control mt-6">
                    <button className="border-2 border-purple-600 px-6  rounded-lg py-3 bg-purple-500 text-white  font-semibold">Login</button>
                    </div>
                    
                    <label className="label">
                        <p className="label-text-alt text-lg ">New here? Please <Link to='/register' className="underline text-purple-600 font-medium">Register</Link></p>
                    </label>
            </form>
            <div className="">
                    
                        <div className="text-center mt-6 pb-8">
                            <button onClick={handleGoogleSingIn} className="mr-3 border border-purple-400 p-1 rounded-xl">
                                <FcGoogle className="w-10 h-10" />
                            </button>
                            <button  className="mr-3 border border-purple-400 p-1 rounded-xl">
                                <FaGithub className="w-10 h-10"/>
                            </button>
                            <button  className="mr-3 border border-purple-400 p-1 rounded-xl">
                               <FaFacebook className="w-10 h-10 text-blue-700"/>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Login;