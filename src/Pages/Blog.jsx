import { useEffect, useState } from "react";
import Nav from "./Header/Nav";
import { LuCalendarDays } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { Helmet } from "react-helmet";


const Blog = () => {
    const [blogs, setBlog] =useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then( data=> setBlog(data));

    },[])

    // console.log(blog)
    return (
        <div>
          <Helmet>
                <title>Urban Paradise -Blogs</title>
            </Helmet>
            <Nav></Nav>
            <div className="max-w-7xl mx-auto mt-10">
            {
                blogs.map((blog, idx)=> <div className="mt-12 pb-3 border-purple-300 border-b-2 border-dashed" key={idx}>
                  <div>
                    <h1 className="text-3xl font-bold">{blog.title}</h1>
                    <div className="flex gap-5">
                        <p className="flex gap-1 items-center text-gray-500"><LuCalendarDays /> {blog.post_date}</p>
                        <p className="flex gap-1 items-center text-gray-500"><IoMdTime />{blog.post_time}</p>
                        <p className="flex gap-1 items-center text-gray-500"> <IoMdEye />{blog.views}</p>
                        
                    </div>
                    <img className="w-3/5 mx-auto mt-6" src={blog.image} alt="" />
                    <h1 className="text-3xl font-bold mt-8 ">{blog.title2}:</h1>
                     <p className="mb-3 font-semibold text-xl">{blog.category}</p>
                    <p className="text-gray-500 text-lg">{blog.description}</p>
                  </div>
                  <div className="flex gap-2 items-center mt-4">
                    <img className="w-16 h-16 rounded-full" src={blog.author_image} alt="" />
                    <p className="text-lg font-bold">By:  {blog.author}
                    </p>
                  </div>
                </div>)
            }
            
        </div>
        </div>
    );
};

export default Blog;