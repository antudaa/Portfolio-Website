import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import Services from '../../Pages/Services/Services';

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/service',
                element: <Services></Services>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default route;