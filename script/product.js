import {products} from "../data/details.js";
import { cart,saveToStorage } from "../data/cart.js";

   let productsHtml = '';
   let moreHtml = ''
  products.forEach((product) => {
    productsHtml +=  `
      <div class="product-cont">
            <img class="product-img" src="${product.colors[0].img}" alt="">
             <p class="product-name">${product.title}</p>
             <div class="rating-cont">
              <img class="rating-img" src="images/ratings/rating-${product.stars * 10}.png" alt="">
              <p class="rating-name">${product.stars}</p>
             </div>
             <p class="price-name">$${product.price}</p>
             <a href="#container">
              <p class="more-text data-product-name="${product.title}">see more</p>
             </a>
          </div>
      `;
  });
  
  moreHtml += `
  <div>
  <img class="container-img" src="${products[0].colors[0].img}" alt="">
</div>
<div>
  <h1 class="shoe-title">${products[0].title}</h1>
  <p class="shoe-price">$${products[0].price}</p>
  <p class="shoe-use">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque libero provident voluptas doloremque ab reiciendis ea ducimus quasi error?</p>
   <div class="color-cont">
      <div class="color" id="first"></div>
      <div class="color" id="second"></div>
   </div>
   <div class="size-container">
      <div class="size">40</div>
      <div class="size">41</div>
      <div class="size">42</div>
      <div class="size">43</div>
      <div class="size">44</div>
      <div class="size">45</div>
      <div class="size">46</div>
   </div>
   <button class="cart-btn">Add to cart</button>
</div>
  `

       document.querySelector('.product-grid').innerHTML =
       productsHtml;
   
    document.querySelector('.container').innerHTML = moreHtml;

    const mores = document.querySelectorAll(".more-text");
    const ProductTitle = document.querySelector(".shoe-title");
    const productPrice = document.querySelector(".shoe-price");
    const productImg = document.querySelector(".container-img")
    const colors = document.querySelectorAll(".color")
    const sizes = document.querySelectorAll(".size")
    const quantity = document.querySelector('.js-cart-quantity')
    const  addBtn = document.querySelector('.cart-btn')
  
    
    

  
  let chosenProducts = products[0];
   
   mores.forEach((more,index) => {

       more.addEventListener('click', () => {
       chosenProducts = products[index]
        
         ProductTitle.innerText = chosenProducts.title;
         productPrice.innerText = "$" + chosenProducts.price;
         productImg.src = chosenProducts.colors[0].img
         

           colors.forEach((color,index) => {

                color.style.backgroundColor = chosenProducts.colors[index].code

                color.addEventListener('click', () => {
                    productImg.src = chosenProducts.colors[index].img
                })
           })
 
          sizes.forEach((size) => {
             size.addEventListener('click', () => {
                sizes.forEach((size) => {
                    size.style.backgroundColor = 'white'
                    size.style.color = 'black'
                })
                 size.style.backgroundColor = 'black'
                 size.style.color = 'white'
             })
          } )
         
          addBtn.addEventListener('click', () => {
            chosenProducts = products[index];
            let cartQuantity = 0;
              function addQuantity(){
                  cart.forEach((item) => {
                   cartQuantity++;
                  //  localStorage.setItem('quantity',cartQuantity);
                  //  let user = localStorage.getItem('quantity');
                   quantity.innerHTML = cartQuantity;
                   saveToStorage()
                  })
              }
                if(chosenProducts.title === ProductTitle.innerText){
                   cart.push(chosenProducts);
                   addQuantity();
                   console.log(cart);
                   saveToStorage()
                }
       })

       })
   })

  
   