import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="md:flex md:m-20 m-5">
            <div className="md:w-1/3 md:mr-10 md:mb-0 mb-10 p-10 bg-teal-100 text-teal-700 font-bold text-xl rounded-md">
                <ul>
                    <li><Link to="/dashboard">Dash Board</Link></li>
                    <li className="my-4"><Link to="/dashboard/profile">Profile</Link></li>
                    <li><Link to="/dashboard/editprofile">Edit Profile</Link></li>
                </ul>
            </div>
            <div className="md:w-2/3 text-center py-10 bg-teal-100 text-teal-700 font-bold text-xl rounded-md">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;