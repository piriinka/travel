import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Tours } from './pages/Tours.jsx'
import { Tour } from './pages/Tour.jsx'
import { Contact } from './pages/Contact.jsx'
import { RouterProvider } from 'react-router-dom'


const router=createBrowserRouter([
    {
        path:"/travel/",
        element:<App />,
        children:[
            {
                path:'/travel/',
                element:<Home />
            },
            {
                path:'/travel/about',
                element:<About />
            },
            {
                path:'/travel/tours',
                element:<Tours />
            },
            {
                path:'/travel/tour/:id',
                element:<Tour />
            },
            {
                path:'/travel/contact',
                element:<Contact />
            },
        ]
    }
])




ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)