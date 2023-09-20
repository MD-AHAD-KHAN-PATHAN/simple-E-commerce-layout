import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Layouts = () => {

    return (

        <div>
            <nav className="md:flex justify-between items-center text-center text-white font-bold md:px-20 py-4 bg-teal-600 shadow-md">
                <h1 className="text-3xl">Ahad</h1>
                <ul className="flex justify-center md:gap-6 gap-4 md:text-xl">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
            
        </div>

    );
};

export default Layouts;