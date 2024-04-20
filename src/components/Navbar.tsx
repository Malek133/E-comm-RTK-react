
import { useSelector } from "react-redux"
import {  NavLink } from "react-router-dom"
import { cartSelector } from "../Redux/features/Carte/CarteSlice"
import Btn from "./ui/Btn"

const Navbar = () => {

 const {carteItems} = useSelector(cartSelector)
     
   const storageKey = 'addLoged';
 const userDataString = localStorage.getItem(storageKey);
 const userData = userDataString ? JSON.parse(userDataString) : null 

const Logoutin = () =>{
    localStorage.removeItem(storageKey);
    setTimeout(() =>{
      location.replace('/')
    },1200)
  }
  

  return (
    <nav className=" bg-slate-100 rounded p-3 max-w-6xl mx-auto my-4">
        <ul className="flex items-center justify-around">

        <li className=" duration-200 font-bold text-2xl">
          <NavLink to="/">
            LOGO
          </NavLink>
        </li>

        <li> <NavLink to="/AddCart">
            <p className=" text-lg font-medium ">
            Add to Cart ({carteItems.length})</p>
            </NavLink> </li>
           
            {userData ? ( 
           <div className="flex justify-center 
           items-center space-x-14">
            <p className=" duration-200 font-semibold text-lg">
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </p> 
          

             <Btn cla="bg-red-500"  onClick={Logoutin}>
              Logout</Btn> 

            </div>
            
         ) : ( 
          <ul className="flex items-center space-x-5">
               
          <li className=" duration-200 font-semibold text-lg">
            <NavLink to="/login">Login Admin</NavLink>
          </li>
        
        </ul>
         ) 
         }
            

            

            

        </ul>
      
    </nav>
  )
}

export default Navbar
