import { ProductNameTypes } from "../types";

export interface IProduct {
    id?:string | undefined,
      title:string ,
      des:string,
      imageUrl:string ,
      price:string 
      quantity:number
}

export interface IFormInput {
  id: string;
  name: ProductNameTypes; 
  label: string;
  type: string;
}

export interface IErrors {
  error: {
    details?:{
       errors:{
          message:string
       }[]
    },
    message?:string
  }
}

export interface ILoginInput {
  type:string
  placeholder:string
  name:"identifier" | "password"
  validation:{
      required?:boolean, 
      minLength?:number, 
      pattern?:RegExp
  }
}