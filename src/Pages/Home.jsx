


import { Helmet } from "react-helmet";
import Slider1 from "./Header/Slider1";
import LetestProperties from "./LetestProperties";
import Speciality from "./Speciality";
import Tour from "./Tour";





const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Urban Paradise-Home</title>
            </Helmet>
            
            <Slider1></Slider1>
            <Speciality></Speciality>
            <LetestProperties></LetestProperties>
            <Tour></Tour>
        </div>
    );
};

export default Home;