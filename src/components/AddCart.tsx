import { useSelector } from "react-redux"
import {  cartSelector } from "../Redux/features/Carte/CarteSlice"
import { Trash2 } from "lucide-react"

import Btn from "./ui/Btn"



const AddCart = () => {
  const {carteItems} = useSelector(cartSelector)

  const ProdInCart = carteItems.map((productt) => (
    <div className='border-2 border-gray-300 rounded w-fit' 
      key={productt.id}>
   <img className='container p-5 mb-4 rounded h-80 w-96' 
   src={productt.imageUrl} alt={productt.title} />

   <div className=' my-1 mx-3'>
     <div className='text-center text-xl font-bold'>
       {productt.title}</div>
   <div className='text-center text-3xl font-bold'>
     <span className='text-red-800'>{productt.price}</span> $</div>
   </div>
   
   {/* <div>
     <p className='my-5 m-2'>{productt.des}</p>
     </div> */}

     <div className="flex justify-around items-center py-3">
      <span></span>
      <Btn 
      cla="bg-red-700"><Trash2 /> 
      <span className="ml-2">from Cart</span></Btn>
       <span></span>
     </div>
   
 </div>
   )) 
  return (
    <>
    <span className="ml-10 my-3 font-semibold text-3xl">
      Total :<span className="text-red-500">1000</span> $</span>
    <div className='m-5 container grid grid-cols-3 gap-x-7 gap-y-4'>
      {ProdInCart}
    </div>
    </>
    
  )
}

export default AddCart
