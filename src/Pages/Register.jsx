import { Link } from "react-router-dom";
import Nav from "./Header/Nav";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Provider";
import { IoIosEyeOff,IoMdEye  } from "react-icons/io";
import { Helmet } from "react-helmet";




const Register = () => {

    const[password, setPassword] =useState('');
    
    

    const {createUser} =useContext(AuthContext)
    const [errorMassage, setErrorMassage] =useState('')
    const [success,setSuccess] =useState('')
    const [showPassword, setShowPassword] =useState(false)

    const handleChange= (e)=>{
        setPassword(e.target.value)
    }

    const handleRegister = e=> {
        e.preventDefault();
        const form = new FormData (e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log (email, password);

      
        const regExp =/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if(password === ""){
            setErrorMassage('Please enter Password')
            
        } else if(regExp.test(password)){
            setErrorMassage ('Password is valid')
            
        } else if(!regExp.test(password)){
            setErrorMassage('Password is not valid')
            return
        }

        setErrorMassage('');
        setSuccess('')

        
        
        

        createUser ( email, password)
        .then(result =>{
            console.log(result.user)
            
            alert('Registration Successful')
            setSuccess('Registration success')

           
        })
        .catch (error =>{
            console.error( error.message)
            alert(error.message)
            setErrorMassage(error.message)
        })
    }



    return (
        <div>
            <Helmet>
                <title>Urban Paradise -Register</title>
            </Helmet>
            <Nav></Nav>
            
            <div className="text-center max-w-lg mx-auto mt-8 shadow-xl rounded-lg pb-8">
                <h1 className="text-4xl text-purple-800 font-bold">Register Now</h1>


                <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-xl font-semibold">Name</span>
                            </label>
                                
                            <input type="text"  placeholder="Enter Your Name"className="input input-bordered border border-purple-600" required />
                           
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
                        <div className="form-control relative">
                        <label className="label">
                            <span className=" label-text text-xl font-semibold">Password</span>
                        </label>
                      
                       <input type={showPassword? "text": "password"} 
                            name='password' 
                            placeholder="password" 
                            onChange={handleChange}
                            value={password}
                            className= "input input-bordered border border-purple-600" required />
                      
                            <span  className="absolute right-3 bottom-4 text-xl" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoIosEyeOff></IoIosEyeOff> : <IoMdEye></IoMdEye>
                                }
                            </span>
                       
                        </div>
                        
                        <div className="form-control mt-6">
                        <button className="border-2 border-purple-600 px-6  rounded-lg py-3 bg-purple-500 text-white   font-semibold">Register</button>
                        </div>
                        <label className="label mt-4">
                            <a className="label-text-alt text-lg">Already have an account? Please <Link to='/login' className="underline text-purple-600">Login</Link></a>
                        </label>
                 </form>
                 {
                    errorMassage && <p className="text-red-600">{errorMassage}</p>
                 }
                 {
                    success && <p className="text-xl text-green-700">{success}</p>
                 }
            </div>
            
        </div>
    );
};

export default Register;