
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Prods from './Prods'
import { useEffect } from 'react';
import { getProductList } from '../Redux/features/products/ProdutsSlice';
import { AppDispatch } from '../Redux/store';

// import { IProduct } from './interface';
// import { Products } from './data';

function HomePage() {

  const dispatch = useDispatch<AppDispatch>()

useEffect(() =>{
  dispatch(getProductList())
},[dispatch])

  //Renders
 const RenderProductList = [].map((product,idx) =>(
  <Prods key={idx} product={product} />
   ));
  
  return (
    <>
     <h1 className='text-sky-950 m-4 text-center text-4xl font-bold'> 
     <span className='text-red-600'> E-comm </span>
      RTK
     </h1>
     
      <div className='m-5 container grid grid-cols-1 md:grid-cols-2
    lg:grid-cols-3 gap-8'>
       {RenderProductList} 
      </div>
     
    
    </>
  )
}

export default HomePage
