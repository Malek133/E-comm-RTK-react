import { IProduct } from "../components/interface";

export const cartItemShop = (carteItems:IProduct[],
    product:IProduct) =>{
   const exist =  carteItems.find(item=> item.id ===product.id);
     if(exist){
        return  carteItems.map((item)=> item.id===product.id ?
        {...item, quantity:item.quantity +1}:item
        )
     }
     return [...carteItems , {...product, quantity:1}]
}