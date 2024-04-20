// import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { IProduct } from '../../../components/interface'
// import { axiosInstancep } from '../../../components/config/axiosConfig'


//  interface ProductsState {
//    loading:boolean
//  productsItems:IProduct[]
//  error:null
// }

// const initialState: ProductsState = {
//    loading:true,
//    productsItems:[],
//    error: null
  
// }

// export const getProductList = createAsyncThunk('products/getProductList',
// async (thunkAPI) =>{
//    const {rejectWithValue} = thunkAPI
// try {
   
//   const {data} = await axiosInstancep.get('/products?limit=10&select=title,price,thumbnail')
//  return data;
// } catch (error) {
//    return rejectWithValue(error)
// }
// })

//  const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {},
//   extraReducers :{
  
//    [`${getProductList.pending}`]:(state) =>{
//       state.isloading= true,
//    },
   
//    [`${getProductList.fulfilled}`]:(state,action)=>{
//       state.loading= false,
//       state.productsItems = action.payload
//    } ,
   
//    [`${getProductList.rejected}`]:(state,action)=>{
//       state.loading= false,
//       state.productsItems = [],
//       state.error= action.payload
//    } ,
     
//   }
// })

// export default  productsSlice.reducer


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../components/interface';
import { axiosInstancep } from '../../../components/config/axiosConfig';

interface ProductsState {
  loading: boolean;
  productsItems: IProduct[];
  error: string | null; // Modifier le type d'erreur si nécessaire
}

const initialState: ProductsState = {
  loading: true,
  productsItems: [],
  error: null,
};

export const getProductList = createAsyncThunk(
  'products/getProductList',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstancep.get('/products?limit=10&select=title,price');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.productsItems = action.payload;
        state.error = null; // Réinitialiser l'erreur si la requête réussit
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = false;
        state.productsItems = [];
        state.error = action.payload as string; // Gérer l'erreur correctement
      });
  },
});

export default productsSlice.reducer;
