// import { name } from "../script/checkout.js";

export let cart = JSON.parse(localStorage.getItem('cart'))||[]

 export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}
   
export  function removeFromCart(index){
// const newCart = [];

//   cart.forEach((cartItem) => {
//       if (cartItem.id !== productId) {
//         newCart.push(cartItem);
//       }
//   });
//   cart = newCart;
     cart = cart.slice(0,index).concat(cart.slice(index+1));
     console.log(cart)
     saveToStorage();
 }
// export function quantityModifier(){
//    let mixArr = [];
//    let matchingItem;
//    cart.forEach((item) => {
//     if(item.id === item.id){
//       matchingItem = item;
//       matchingItem.quantity++;
//     }
//    })
      
//  }