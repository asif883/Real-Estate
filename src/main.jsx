import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import Provider from './Provider/Provider.jsx'
// import { HelmetProvider } from 'react-helmet';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

     <Provider>
         <RouterProvider router={Router}></RouterProvider>
      </Provider>
      
  </React.StrictMode>,
)
