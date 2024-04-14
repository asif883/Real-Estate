import { Link } from "react-router-dom";
import Nav from "./Header/Nav";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";





const Register = () => {
    const {createUser} =useContext(AuthContext)

    const handleRegister = e=> {
        e.preventDefault();
        const form = new FormData (e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log (email, password);


        createUser ( email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch (error =>{
            console.error( error)
        })
    }



    return (
        <div>
            <Nav></Nav>
            <div className="text-center max-w-lg mx-auto mt-8 shadow-xl rounded-lg">
                <h1 className="text-4xl text-purple-800 font-bold">Register Now</h1>


                <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name"className="input input-bordered border border-purple-600" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo_url" className="input input-bordered border border-purple-600"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered border border-purple-600" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered border border-purple-600" required />
                       
                        </div>
                        <div className="form-control mt-6">
                        <button className="border-2 border-purple-600 px-6  rounded-lg py-3 bg-purple-500 text-white   font-semibold">Register</button>
                        </div>
                        <label className="label mt-4">
                            <a className="label-text-alt text-lg">Already have an account? Please <Link to='/login' className="underline text-purple-600">Login</Link></a>
                        </label>
                 </form>
            </div>
            
        </div>
    );
};

export default Register;