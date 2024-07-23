
import Navbar from "./Component/Navbar/Navbar"


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Products from './Pages/Products'
import RootsLayout from './Layouts/Rootslayout'
import Orders from './Pages/Orders'
import Notifications from './Pages/Notifications'


function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RootsLayout/>}>
      <Route index element={<Dashboard/>} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/notification" element={<Notifications/>}/>


    </Route>
    </>
  )
)



export const App = () => {
  return (
    <div className="container">
      <Navbar/>
    </div>
    <>
    <RouterProvider router={router}/>
   
    </>
  )
}
