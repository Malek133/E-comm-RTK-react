/**
 * Validates a product object for required fields and constraints.
 *
 * @param {Object} product - The product to be validated.
 * @param {string} product.title - The title of the product.
 * @param {string} product.descreption - The description of the product.
 * @param {string} product.imageURL - The URL of the product's image.
 * @param {string} product.price - The price of the product.
 *
 * @returns {Object} - An object containing error messages for invalid fields.
 * @property {string} title - Error message for the title field.
 * @property {string} descreption - Error message for the description field.
 * @property {string} imageURL - Error message for the imageURL field.
 * @property {string} price - Error message for the price field.
 */

export const productValidation = (product: { title: string; 
    des: string; imageUrl: string; price: string }) => {

    const errors: { title: string; des: string; imageUrl: string; 
        price: string } = {
      title: "",
      des: "",
      imageUrl: "",
      price: "",
    };
  
    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageUrl);
  
    if (!product.title || !product.title.trim() || product.title.length < 3 || product.title.length > 60) {
      errors.title = "Product title must be between 3 and 60 characters!";
    }
    if (!product.des || !product.des.trim() || product.des.length < 10 || product.des.length > 900) {
      errors.des = "Product description must be between 10 and 900 characters!";
    }
  
    if (!product.imageUrl || !product.imageUrl.trim() || !validUrl) {
      errors.imageUrl = "Valid image URL is required";
    }
  
    if (!product.price || !product.price.trim() || isNaN(Number(product.price))) {
      errors.price = "Valid price is required!";
    }
  
    return errors;
  };