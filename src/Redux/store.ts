import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import CarteSlice from './features/Carte/CarteSlice'
import { ProductsApiSlice } from './features/products/CreateAsyncThunkE'

        const store = configureStore({
         reducer: {
            cart:CarteSlice,
            [ProductsApiSlice.reducerPath]:ProductsApiSlice.reducer,
           },
           middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
              serializableCheck:false
            }).concat([ProductsApiSlice.middleware]),
          
       })
      export type RootState = ReturnType<typeof store.getState>
       export type AppDispatch = typeof store.dispatch
        export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
      export default store


