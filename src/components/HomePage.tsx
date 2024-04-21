


import { useGetProductListQuery } from "../Redux/features/products/CreateAsyncThunkE";
import Prods from "./Prods";
import { IProduct } from "./interface";


function HomePage() {

const {isLoading,data} = useGetProductListQuery();

 if(isLoading)  return <h1>Loading...</h1>

  return (
    <>
     <h1 className='text-sky-950 m-4 text-center text-4xl font-bold'> 
     <span className='text-red-600'> E-comm </span>
      RTK
     </h1>
     
      <div className='m-5 container grid grid-cols-1 md:grid-cols-2
    lg:grid-cols-3 gap-8'>
       {data.products && data.products.map((product:IProduct) =>(
         <Prods key={product.id} product={product} />
        ))} 
      </div>
     
    
    </>
  )
}

export default HomePage
