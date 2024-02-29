import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Splash from './views/Splash'
import About from './views/About'
import Dash from './views/Dash'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
    errorElement: <Splash />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/dash',
    element: <Dash />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
