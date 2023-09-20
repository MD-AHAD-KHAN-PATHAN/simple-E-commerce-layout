import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Products from '../Components/Products/Products';
import About from '../Components/About/About';
import Dashboard from '../Components/Dashboard/Dashboard';
import Layouts from '../Components/Layouts/Layouts';
import ProductCard from '../Components/ProductCard/ProductCard';
import DashboardHeader from '../Components/DashboardHeader/DashboardHeader';
import Profile from '../Components/Profile/Profile';
import EditProfile from '../Components/EditProfile/EditProfile';

const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path: '/products/:id',
                element: <ProductCard></ProductCard>,
                loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`)
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard',
                        element: <DashboardHeader></DashboardHeader>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/editprofile',
                        element: <EditProfile></EditProfile>
                    }
                ]
            }
            
        ]
    }
])

export default mainRoute;