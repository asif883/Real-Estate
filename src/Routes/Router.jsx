import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Facilities from "../Pages/Facilities";

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
        }
       ]
    }
]);
 
export default Router;