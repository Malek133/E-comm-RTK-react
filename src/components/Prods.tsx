

import Image from './ui/Image';
import { IProduct } from './interface';
import Btn from './ui/Btn';
import { ShoppingCart } from 'lucide-react';
import { useAppDispatch } from '../Redux/store';
import { AddToCart } from '../Redux/features/Carte/CarteSlice';

interface IProps {
  product:IProduct
}

const Prods = ({product}:IProps) => {

  const dispatch = useAppDispatch()

  return (

    <div className='m-5 container'>
       <div className='border-2 border-gray-300 rounded' 
    key={product.id}>
      <Image className='container p-5 mb-4 ml-5 rounded h-72 w-72' 
      imageURL={product.thumbnail} alt={product.title} />

      <div className='flex justify-between items-center my-1 mx-3'>
        <div className='text-center text-xl font-bold'>
          {product.title}</div>
      <div className='flex justify-center items-center space-x-1 text-center text-xl font-bold'>
        <span className='text-red-800'>{product.price}</span> 
        $</div>
      </div>
      
      <div>
        <p className='my-5 m-2'>{product.des}</p>
        </div>

      <div className='m-5 flex justify-center items-center space-x-3'>
        <Btn onClick={()=>dispatch(AddToCart(product))} 
        cla="bg-sky-950"><ShoppingCart /> Add To Cart</Btn>
      </div>
      
    </div>
    </div>
   
  )
}

export default Prods


