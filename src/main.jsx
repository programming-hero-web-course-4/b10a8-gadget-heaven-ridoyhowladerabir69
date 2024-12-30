import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Route from './Component/MainRoute/Route';
import Home from './Component/AllComponents/Home';
import Statistics from './Component/AllComponents/Statistics';
import Dashboard from './Component/AllComponents/Dashboard';
import ProductDetails from './Component/AllComponents/ProductBox/ProductDetails';
import { ToastContainer } from 'react-toastify';
import Cart from './Component/AllComponents/ProductBox/Cart';
import Wishlist from './Component/AllComponents/ProductBox/Wishlist';
// import DataProvider from './Component/context-api/DataProvider';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Route></Route>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allProduct/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/allData.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: () => fetch('/allData.json')
      },
      {
        path: '/wishlist',
        element: <Wishlist></Wishlist>,
        loader: () => fetch('/allData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <DataProvider> */}
      <RouterProvider router={router}/>
      <ToastContainer />
    {/* </DataProvider> */}
  </StrictMode>,
)
