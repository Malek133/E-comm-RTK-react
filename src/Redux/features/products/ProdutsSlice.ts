
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../components/interface';
import { axiosInstancep } from '../../../components/config/axiosConfig';
import { RootState } from '../../store';

interface ProductsState {
  loading: boolean;
  data: IProduct[];
  error: string | null; // Modifier le type d'erreur si nécessaire
}

const initialState: ProductsState = {
  loading: true,
  data: [],
  error: null,
};

export const getProductList = createAsyncThunk(
  'products/getProductList',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstancep.get('/products?limit=10&skip=10&select=title,price,thumbnail');
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
        state.data = action.payload;
        state.error = null; // Réinitialiser l'erreur si la requête réussit
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.payload as string; // Gérer l'erreur correctement
      });
  },
});

export const productsSelector = ({products}:RootState) => products
export default productsSlice.reducer;
