import { Link } from "react-router-dom";
import Nav from "./Header/Nav";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";


const Login = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="max-w-md mx-auto mt-10 shadow-xl rounded-lg">
                <div className="text-center">
                    <h1 className="text-4xl text-purple-800 font-bold">Login Now</h1>
                </div>
            <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered border border-purple-600" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered border border-purple-600" required />
                   
                    </div>
                   
                    <div className="form-control mt-6">
                    <button className="border-2 border-purple-600 px-6  rounded-lg py-3 bg-purple-500 text-white  font-semibold">Login</button>
                    </div>
                    <div className="mt-3">
                    <div className="mt-4">
                    <div className="border-b-2 border-gray-400 absolute w-96  transform -translate-y-1/2"></div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 rounded-full">Or ,Login with</div>
                    </div>
                        <div className="text-center mt-10">
                            <button className="mr-3 border border-purple-400 p-1 rounded-xl">
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
                    <label className="label">
                        <a className="label-text-alt text-lg ">New here? Please <Link to='/register' className="underline text-purple-600 font-medium">Register</Link></a>
                    </label>
            </form>
            </div>
        </div>
    );
};

export default Login;