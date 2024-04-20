
import { ChangeEvent, FormEvent, useState } from 'react'
import Btn from './ui/Btn'
 import Modal from './ui/Modal'
import { Products, formInputsList } from './data'
import Input from './ui/Input'
 import ErrorMessage from './ErrorMessage'
import { IProduct } from './interface'
import { productValidation } from './validation'
import { v4 as uuid } from "uuid";
import { ProductNameTypes } from './types'
import ProdsDashboard from './ProdsDashboard'


function HomeDashboard() {
  const ObjPro:IProduct = { title: "",des: "", imageUrl: "", price: "",quantity:0 }
  const [product,setProduct] = useState<IProduct>( ObjPro);
  const [productss,setProductss] = useState<IProduct[]>(Products);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [productToEdit, setProductToEdit] = useState<IProduct>(ObjPro);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);  
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [errors,setErrors] = useState({  title: "", 
  des: "", imageUrl: "", price: "" });
  const [isOpen, setIsOpen] = useState(false)

  const closeModal= () => {setIsOpen(false)}
  const openModal= () => {setIsOpen(true)}

  const  closeEditModal = () => {setIsOpenEditModal(false)}
  const openEditModal= () => { setIsOpenEditModal(true)}


  const closeConfirmModal = () => setIsOpenConfirmModal(false);
  const openConfirmModal = () => setIsOpenConfirmModal(true);

  const onCancel = () => {
     closeModal()
    setProduct(ObjPro)
  };

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
  
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductToEdit({...productToEdit,[name]: value});
  setErrors({...errors,[name]: ""});
  }

  // ADD NEW PRODUCT

  const submitHandler = (e: 
    FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, des,
       price, imageUrl } = product;

    const errors = productValidation({
      title, des,
       price, imageUrl
    });
    
    const hasErrorMsg =
    Object.values(errors).some(value => value === "") && 
    Object.values(errors).every(value => value === "");
    
  if (!hasErrorMsg) {
    setErrors(errors);
    return;
  }

  setProductss(prev => [ {...product,id:uuid()},...prev]);
  closeModal()
   setProduct(ObjPro)
  
  }
  // ADD NEW PRODUCT

  // EDIT PRODUCT
  const submitEditHandler = (e:FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); 
    const { title, des,
      price, imageUrl } = productToEdit;

   const errors = productValidation({
     title, des,price, imageUrl,});
  
   const hasErrorMsg =Object.values(errors).some(value => value === "") && 
   Object.values(errors).every(value => value === "");
   

 if (!hasErrorMsg) {
   setErrors(errors);
   return;
 }

const updateProducts=[...productss,];
updateProducts[productToEditIdx]= {...productToEdit}
setProductss(updateProducts)
  setProductToEdit(ObjPro) 
  closeEditModal();
    }
     // FIN EDIT PRODUCT

  //Renders
 const RenderProductList = productss.map((product,idx) =>(
  <ProdsDashboard key={product.id} product={product} 
  openEditModal={openEditModal}
  setProductToEdit={setProductToEdit} idx={idx}
  setProductToEditIdx={setProductToEditIdx}
  openConfirmModal={openConfirmModal} />
   ));


  // inputs 
 const renderFormInputList = formInputsList.map((i) => (
  <div className="flex flex-col" key={i.id}>
    <label htmlFor={i.id} 
    className="mb-[2px] text-sm font-medium
     text-gray-700">
      {i.label}
    </label>
    <Input type="text" id={i.id} 
    name={i.name}   
    className='border-2 border-gray-350'
     value={product[i.name]} onChange={onChangeHandler}
   
    />
     <ErrorMessage msg={errors[i.name]} /> 
  </div>
    ));

    const renderProductEditWithErrorMsg = (id: string, 
      label: string, name:ProductNameTypes) => {
      return (
        <div className="flex flex-col">
        <label htmlFor={id} 
     className="mb-[2px] text-sm font-medium text-gray-700">
      {label}
      
      </label>
    <Input type="text" id={id} name={name}   
       className='border-2 border-gray-350'
    value={productToEdit[name]} onChange={onChangeEditHandler} />
   <ErrorMessage msg={errors[name]} /> 
  </div>
      )
    }

    const removeProductHandler = ()=>{
      const filtered = productss.filter(product => 
        product.id !== productToEdit.id);
       setProductss(filtered)
      closeConfirmModal();
    }
  
  return (
    <>
     <h1 className='text-sky-950 m-4 text-center text-4xl font-bold'> 
     Alphazero 
     <span className='text-red-600'> E-comm</span>
     </h1>

      <div className='container flex justify-end items-center'>
        <Btn onClick={openModal} cla='bg-red-500 text-xl' wi='w-fit'>
        Dashboard
     </Btn>
      </div>

      {/* ADD Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} 
      title='add new product' >
         <form onSubmit={submitHandler}>
          <div className='m-5 flex flex-col space-y-4'>
            {renderFormInputList}
          </div>
        
        <div className='flex justify-center space-x-3'>

           <Btn onClick={onCancel} 
           cla='bg-sky-700 hover:bg-sky-600'>
            Cancel</Btn>

        <Btn cla='bg-red-700 hover:bg-red-600'>
          Submit</Btn>

        </div>
       
         </form>
      </Modal>
       {/* FIN ADD Modal */}

       {/* EDIT MODALE */}
       <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} 
      title='Edit product' >
         <form onSubmit={submitEditHandler}>
          <div className='m-5 flex flex-col space-y-4'>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
{renderProductEditWithErrorMsg("des", "Product Des", "des")}
 {renderProductEditWithErrorMsg("imageUrl", "Product Image URL", "imageUrl")}
  {renderProductEditWithErrorMsg("price", "Product Price", "price")}
          </div>
        
        <div className='flex justify-center space-x-3'>

           <Btn onClick={onCancel} 
           cla='bg-sky-700 hover:bg-sky-600'>
            Cancel</Btn>

        <Btn cla='bg-red-700 hover:bg-red-600'>
          Edit </Btn>

        </div>
       
         </form>
      </Modal>
      {/* FIN EDIT MODALE */}

      {/* DELETE PRODUCT CONFIRM MODAL */}
      <Modal
        isOpen={isOpenConfirmModal}
        closeModal={closeConfirmModal}
     title="Are you sure you want to remove this Product from your Store?"
      >
        <div className="flex items-center space-x-3">
          <Btn cla="bg-[#c2344d] hover:bg-red-800" 
          onClick={removeProductHandler}>
            Yes, remove
          </Btn>
          <Btn type="button" 
          cla="bg-[#f5f5fa] hover:bg-gray-300 !text-black" 
          onClick={closeConfirmModal}>
            Cancel
          </Btn>
        </div>
      </Modal>
       {/* DELETE PRODUCT CONFIRM MODAL */}


     
      <div className='m-5 container grid grid-cols-1 md:grid-cols-2
    lg:grid-cols-3 gap-8'>
       {RenderProductList} 
      </div>
     
    
    </>
  )
}

export default HomeDashboard
