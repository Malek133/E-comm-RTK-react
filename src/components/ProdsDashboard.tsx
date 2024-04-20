

import Image from './ui/Image';
import { IProduct } from './interface';
import Btn from './ui/Btn';
 import { FilePenLine } from 'lucide-react';
 import { Trash2 } from 'lucide-react';


interface IProps {
  product:IProduct
   setProductToEdit:( product:IProduct) => void
   openEditModal:() => void
   setProductToEditIdx : (value:number) => void
  idx:number
   openConfirmModal: () => void
  
}

const ProdsDashboard = ({product,setProductToEdit,openEditModal,idx
   ,setProductToEditIdx,openConfirmModal
}:IProps) => {

  const onEdit = () =>{
    setProductToEdit(product)
    openEditModal()
    setProductToEditIdx(idx)
  }

  

  const onRemove = () =>{
    openConfirmModal()
    setProductToEdit(product)
  }
  


  return (

    <div className='m-5 container'>
       <div className='border-2 border-gray-300 rounded' 
    key={product.id}>
      <Image className='container p-5 mb-4 rounded h-80 w-96' 
      imageURL={product.imageUrl} alt={product.title} />

      <div className='flex justify-between items-center my-1 mx-3'>
        <div className='text-center text-xl font-bold'>
          {product.title}</div>
      <div className='text-center text-3xl font-bold'>
        <span className='text-red-800'>{product.price}</span> $</div>
      </div>
      
      <div>
        <p className='my-5 m-2'>{product.des}</p>
        </div>

     

      <div className='m-5 flex justify-center items-center space-x-3'>
        <Btn onClick={onEdit} cla="bg-blue-900"><FilePenLine /></Btn> 
        <Btn onClick={onRemove} cla="bg-red-700"><Trash2 /></Btn>
      </div>
      
    </div>
    </div>
   
  )
}

export default ProdsDashboard
