import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import App from './Components/App.jsx'
import ProductList from './Components/ProductList.jsx'
import ProductPage from './Components/ProductPage.jsx'
import NotFound from './Components/NotFound.jsx'
import Order from './Components/Order.jsx'
import Admin from './Components/Admin.jsx'
import ClientSignup from './Components/ClientSignup.jsx'
import ClientSignin from './Components/ClientSignin.jsx'
import './main.css'

const router = createBrowserRouter([
  {path:'/',element:<App />},
  {path:'/products',element:<ProductList />},
  {path:'/product',element:<ProductPage />},
  {path:'/order',element:<Order />},
  {path:'/signin',element:<ClientSignin />},
  {path:'/signup',element:<ClientSignup />},
  {path:'/admin',element:<Admin />},
  {path:'*',element:<NotFound />},

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
