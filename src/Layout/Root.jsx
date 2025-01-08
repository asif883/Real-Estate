import {Outlet} from 'react-router-dom'

import Footer from '../Pages/footer/Footer';
import Nav from '../Pages/Header/Nav';



const Root = () => {
    return (
        <div className="">
            <Nav/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;