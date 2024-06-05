 import { cart ,removeFromCart} from "../data/cart.js"

  let checkoutHml = ""

 cart.forEach((item) => {
   checkoutHml +=  `
      <div class="flex-cont">
      <div class="main-cont">
      <p class="delivery-date">Delivery date: Monday, May 25</p>
      <div class="flex-cont">
        <div class="cart-cont">
          <div>
            <img class="cart-img" src="${item.colors[0].img}" alt="">
          </div>
          <div>
            <p class="cart-name">${item.title}</p>
            <div class="price-cont">
              <p class="quantity"><strong>Quantity:</strong> ${item.quantity}</p>
              <p class="cart-price"><strong>Price:</strong> $${item.price}</p>
             </div>
            </div>
            <div>
              <p class="ref-num">ref:169928</p>
              <div class="check-cont">
                <i id="check" class='bx bx-checkbox-checked'></i>
                <p class="collect">click & collect</p>
              </div>
          <div class="check-cont">
            <i  class='bx bx-checkbox-checked' id="check"></i>
            <p class="collect">Home Delivery</p>
          </div>
            </div>
            
          
          <div class="close" data-product-id="${item.id}">
            <i class='bx bx-x'></i>
          </div>
  
        </div>
        </div>
      </div>
      
    `
 })
 document.querySelector('.main').innerHTML = checkoutHml

 let close = document.querySelectorAll('.close')
  let productName = document.querySelector('.cart-name')
  let main = document.querySelector('.main')
  let empty = document.querySelector('.empty')
  let noItems = document.querySelector('.return-to-home-link')
     
  function displayCartLength(){
    noItems.innerText = `${cart.length} items`
    if(cart.length === 0){
          main.classList.add('display')
          noItems.innerText = `${cart.length} items`
    }else{
          empty.classList.add('display')
          noItems.innerText = `${cart.length} items`
    }
  }
   
displayCartLength();
  close.forEach((btn,index) => {
    btn.addEventListener('click', () => {
     
      // let poductId = btn.dataset.productId;
    //   let newCart = [];
    //   let cartId =  cart[index].id
    //     if(cartId !== productId){
    //         newCart.push(cart[index])
    //     }
     removeFromCart(index);
     noItems.innerText = `${cart.length} items`
      let container = document.querySelector('.main-cont')
      container.remove()
      displayCartLength();
})

  })

