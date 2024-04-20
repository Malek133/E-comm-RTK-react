import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../../components/interface'
import { cartItemShop } from '../../../utils/functions'
import {RootState} from '../../store'
 interface CartState {
 carteItems:IProduct[]
}

const initialState: CartState = {
   carteItems:[],
  
}

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    AddToCart: (state, action: PayloadAction<IProduct>) => {
       state.carteItems = cartItemShop( state.carteItems,action.payload)
    },
//     RemoveFromCart:(state, action:PayloadAction<string>)=>{
//       const index = state.carteItems.findIndex(item => item.id === action.payload);
//       if (index !== -1) {
//         state.carteItems.splice(index, 1);
//   }
//   },
  }
})


 export const { AddToCart } = cartSlice.actions
 export const cartSelector = ({cart}:RootState) => cart
export default cartSlice.reducer