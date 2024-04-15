import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Facilities from "../Pages/Facilities";
import PropertisDetails from "../Pages/PropertisDetails";
import Properties from "../Pages/Properties";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Pages/PrivateRoute";
import About from "../Pages/About";

const Router = createBrowserRouter ([
    {
       path: '/',
       element:<Root></Root>,
       children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element : <Facilities></Facilities>
        },
        {
            path :'/properties/:id',
            loader: ()=> fetch('/estatesDetails.json'),
            element:<PrivateRoute><PropertisDetails></PropertisDetails></PrivateRoute>
        },
        {
            path :'/properties',
            element:<Properties></Properties>
            
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/about'    ,
          element: <About></About>  
        }
       ]
    }
]);
 
export default Router;