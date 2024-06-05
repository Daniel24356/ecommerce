import { products } from "../data/details.js";

const toggleBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', () => {
  // if(sidebar.classList.contains('show-sidebar')){
  //     sidebar.classList.remove('show-sidebar');
  // }else{
  //     sidebar.classList.add('show-sidebar')
  // }
  sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
})

function addProduct(event) {
  event.preventDefault();
  const productName = document.getElementById("productName").value.trim();
  const color1 = document.getElementById("color1").value.trim();
  const color2 = document.getElementById("color2").value.trim();
  const productImage1 = document.getElementById("productImage1").value.trim();
  const productImage2 = document.getElementById("productImage2").value.trim();
  const starImage = document.getElementById("starImage").value.trim();
  const starText = document.getElementById("starText").value.trim();
  const productPrice = document.getElementById("productPrice").value.trim();
  
  if (productName && color1 && color2 && productImage1 && productImage2 && starImage && starText && productPrice) {

    const eachProduct = {
      id: generateId(),
      title: productName,
      starImage: starImage,
      stars: starText,
      price: productPrice,
      productImage: productImage1,
      colors: [
        {
          code: color1,
          img: productImage1,
        },
        {
          code: color2,
          img: productImage2,
        },
      ],
    }
    console.log(color1);
    products.push(eachProduct);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Product added succesfully");
    document.getElementById("employeeForm").reset();
    displayProduct();
  } else {
    alert("All fields are required")
  }
}
 
function generateId() {
  return "_" + Math.random().toString(36).substring(2, 9)
}

function displayProduct() {
  let productCont = document.querySelector('.product-container');
  let displayHtml = ''
  products.forEach(product => {
    displayHtml += `
      <div class="container">
       <div class="inner-cont">
            <img class="shoe-img" src="${product.productImage}" alt=""> 
          </div>
          <div class="all">
            <div class="inner-cont">
              <p> <strong>${product.title}</strong></p>
              <div class="star-cont">
                <img class="star-img" src="${product.starImage}" alt="">
                <p>${product.stars}</p>
              </div>
             </div>
             <div class="inner-cont">
              <p> <strong>Price:</strong></p>
              <p>$${product.price}</p>
             </div>
             <div class="inner-conts">
               <div class="edit-cont">
              <button class="edit-btn">Edit
              <div class="caret"> <i class='bx bxs-chevron-down'></i> </div>
              </button>
              <ul class="menus">
              <li class="list-item" data-id="title">productName</li>
              <li class="list-item" data-id="productImage">productImage</li>
              <li class="list-item" data-id="starImage">starImage</li>
              <li class="list-item" data-id="stars">starText</li>
              <li class="list-item" data-id="price">productPrice</li>
              </ul>
              </div>
              <button  class="delete-btn">Delete</button>
             </div>
          </div>
          </div>
       `;
  });
  productCont.innerHTML = displayHtml;
}

displayProduct();

const employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener("submit", addProduct);

const editConts = document.querySelectorAll('.edit-cont');
const listItems = document.querySelectorAll('.list-item');
// const innerConts = document.querySelectorAll('')
 
editConts.forEach((editCont) => {
  const caret = editCont.querySelector('.caret');
  const menus = editCont.querySelector('.menus');

  editCont.addEventListener('click', () => {
   
    caret.classList.toggle('caret-rotate');

    menus.classList.toggle('menus-open');
  
  });
})

 

listItems.forEach((li) => {
 li.addEventListener('click', (e) => {
   let ids = e.currentTarget.dataset.id;
   const product = products.find((product) => product.id === product.id);
   if (product) {
       const empName = prompt(`enter the new ${ids} : `);
       if(ids){
          if (empName) { 
           if(ids === 'title'){
               product.title = empName
               localStorage.setItem("products", JSON.stringify(products));
               displayProduct();
           }
          else if(ids === 'productImage'){
              product.productImage = empName
              product.colors[0].img = empName
              product.colors[1].img = empName
              product.colors[0].code = empName
              product.colors[1].code = empName
              localStorage.setItem("products", JSON.stringify(products));
              displayProduct();
           }
         else if(ids === 'starImage'){
              product.starImage = empName
              localStorage.setItem("products", JSON.stringify(products));
              displayProduct();
           }
         else if(ids === 'stars'){
              product.stars = empName
              localStorage.setItem("products", JSON.stringify(products));
              displayProduct();
           }
         else if(ids === 'price'){
              product.price = empName
              localStorage.setItem("products", JSON.stringify(products));
              displayProduct();
           }
         
        }
      }
   } else {
       alert("No such product")
   }
 })
})

function deleteProduct(id) {
      products = products.filter((product) => product.id !== id);
      localStorage.setItem("products", JSON.stringify(products));
      displayEmployee();
}

let deleteBtn = document.querySelectorAll('.delete-btn');
deleteBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
   
      products.forEach((product) => {
        deleteProduct(product.id);
      })

  })
})