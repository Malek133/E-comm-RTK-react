import * as yup from "yup"
export const loginSchema = yup
  .object({

    identifier: yup.string().required('email is required')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'email not matched'),

    password: yup.string().required('Password is required')
    .min(6, 'Must be at least 6 characters')

  })
  .required()