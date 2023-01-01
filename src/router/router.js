import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../pages/AddService";
import Blog from "../pages/Blog";
import Edit from "../pages/Edit";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyReviews from "../pages/MyReviews";
import Service from "../pages/Service";
import ServiceDetails from "../pages/ServiceDetails";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/service',
                element: <Service />,
            },
            {
                path: '/service/:id',
                element: <ServiceDetails />
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/addservice',
                element: <AddService />,
            },
            {
                path: '/myreviews',
                element: <MyReviews />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/edit/:id',
                element: <Edit />
            }

        ]
    }
])
export default router;