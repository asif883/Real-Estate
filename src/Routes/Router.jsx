import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Facilities from "../Pages/Facilities";
import PropertisDetails from "../Pages/PropertisDetails";
import Properties from "../Pages/Properties";

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
            path: '/facilities',
            element : <Facilities></Facilities>
        },
        {
            path :'/properties/:id',
            element:<PropertisDetails></PropertisDetails>
        },
        {
            path :'/properties',
            element:<Properties></Properties>
            
        }
       ]
    }
]);
 
export default Router;