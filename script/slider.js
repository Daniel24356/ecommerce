 const imgArr = [
   {
    name: "Nike Air Max",
    img: "./img/air.png"
   },
   {
    name: "Air Jordan",
    img: "./img/jordan.png"
   },
   {
    name: "Blazer",
    img: "./img/blazer.png"
   },
   {
    name: "Crater",
    img:  "./img/crater.png"
   },
   {
    name: "Hippie",
    img: "./img/hippie.png"
   }
 ]
   const imgStyle = document.querySelector('.img-style') ;
   const btns = document.querySelectorAll('.btn')
     let currentItem = 0; 

 window.addEventListener('DOMContentLoaded', () => {
      automaticSlide();
   })

   function displayImg(){
    imgStyle.src = imgArr[currentItem].img
   }
   function automaticSlide(){
    setTimeout(() => {
        currentItem++
        if(currentItem > imgArr.length-1){
         currentItem = 0;
         displayImg()
        }
        automaticSlide();
        displayImg()
    }, 1500);
   }


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
       let btnTarget =  e.currentTarget;
       if(btnTarget.classList.contains('next')){
          currentItem++
          if(currentItem > imgArr.length-1){
            currentItem = 0; 
            displayImg();
          }
          displayImg();
       }
       if(btnTarget.classList.contains('prev')){
         currentItem--
         if(currentItem < 0){
            currentItem = imgArr.length-1
            displayImg();
           }
         displayImg();
       }

      
       
    })
})