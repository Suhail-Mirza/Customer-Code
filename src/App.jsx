import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Shops from "./pages/Shops"
import Card from "./pages/Card"
import './App.css'
import Shipping from './pages/Shipping'
import Details from './pages/Details'
import Register from './pages/Register'
import Login from './pages/Login'
import CategoryShop from "./pages/CategoryShop"
import SearchProducts from "./pages/SearchProducts"
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import ProtectUser from './utils/ProtectUser';
import Index from './components/dashboard/Index';
import Orders from './components/dashboard/Orders';
import ChangePassword from './components/dashboard/ChangePassword';
import Wishlist from './components/dashboard/Wishlist';
import OrderDetails from './components/dashboard/OrderDetails';
import Chat from "./components/dashboard/Chat"
import ConfirmOrder from './pages/ConfirmOrder';

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shops' element={<Shops/>}></Route>
      <Route path='/payment' element={<Payment/>} />
      <Route path='/card' element={<Card/>}></Route>
      <Route path='/shipping' element={<Shipping/>}></Route>
      <Route path='/product/details/:slug' element={<Details/>}></Route>
      <Route path='/order/confirm?' element={<ConfirmOrder/>} /> 
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/products?' element={<CategoryShop/>}></Route>
      <Route path='/products/search?' element={<SearchProducts/>}></Route>
      <Route path='/dashboard' element={<ProtectUser/>} >
             <Route path='' element={<Dashboard/>} >
                    <Route path='' element={<Index/>} />
                    <Route path='my-orders' element={<Orders/>} /> 
                    <Route path='change-password' element={<ChangePassword/>} /> 
                    <Route path='my-wishlist' element={<Wishlist/>} /> 
                    <Route path='order/details/:orderId' element={<OrderDetails/>} /> 
                    <Route path='chat' element={<Chat/>} />
                    <Route path='chat/:sellerId' element={<Chat/>} /> 
             </Route> 
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App
