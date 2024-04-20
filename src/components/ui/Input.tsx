
import  { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { ...rest } = props; // Déstructuration après avoir extrait la référence
  return (
    <input
      ref={ref}
      className="border-[1px] border-gray-300 w-full 
      shadow-md focus:border-indigo-500 focus:outline-none 
      focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-3 text-md"
      {...rest}
    />
  );
});

export default Input;
