import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import CarteSlice from './features/Carte/CarteSlice'
import ProductsSlice from './features/products/ProdutsSlice'
        const store = configureStore({
         reducer: {
            cart:CarteSlice,
            products:ProductsSlice,
           },
       })
      export type RootState = ReturnType<typeof store.getState>
       export type AppDispatch = typeof store.dispatch
        export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
      export default store


