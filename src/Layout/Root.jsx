import {Outlet} from 'react-router-dom'

import Footer from '../Pages/footer/Footer';



const Root = () => {
    return (
        <div className="">
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;