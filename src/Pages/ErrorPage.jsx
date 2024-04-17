import { NavLink, useRouteError } from "react-router-dom";



const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="text-center mt-10" id="error-page">
            <h1 className="text-4xl">404 Page Not found</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="mb-5">
               <i>{error.statusText || error.message}</i>
            </p>

            <NavLink className='btn btn-secondary' to='/'>Go Back</NavLink>
        </div>
    );
};

export default ErrorPage;