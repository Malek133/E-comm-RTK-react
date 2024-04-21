import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductsApiSlice = createApi({
    reducerPath:'products',
    tagTypes:['Products'],
    baseQuery:fetchBaseQuery({
        baseUrl:'https://dummyjson.com'}),
        endpoints:(builder) =>({

            getProductList:builder.query({
                query:() =>{
                  return {
                    url:'/products'
                  }
                }
            })
        }),
})

export const { useGetProductListQuery} = ProductsApiSlice;
