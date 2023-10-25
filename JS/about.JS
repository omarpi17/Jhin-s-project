var productcontainer =[]//here we push the products into
if(localStorage.getItem("ourshop")== null){
    productcontainer=[]
}else{
    productcontainer= JSON.parse(localStorage.getItem("ourshop"))
}


let step = document.querySelectorAll(".step")
let fnext = document.getElementById("fnext")
let snext = document.getElementById("snext")
step[0].style.opacity="1"
fnext.addEventListener("click",function(){
    step[1].style.opacity="1"
//     step[1].style.background="#028090"
    step[1].style.transform="translateX(0px)"

   
})
snext.addEventListener("click",function(){
    step[2].style.opacity="1"
//     step[2].style.background="#00A896"
    step[2].style.transform="translateX(0px)"

})

// Show Cart Count-------------------------------

let noi = document.getElementById("noi")

function displayCartCount(){
        let itemcount = 0;
        for(var i = 0 ; i < productcontainer.length ; i++){
          if(productcontainer[i].inCart == 1){
            itemcount++;
          }
        }
        noi.innerHTML = itemcount;
}
      
displayCartCount()
// Show Cart Count-------------------------------


// Debugging for photos to work
function displayproduct(){
  var box = "" ;
  for(var i = 0 ; i < productcontainer.length ; i++){
  box += `
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 TheInvisible">
  <div class="product">
  <div class="rank">
   ${getRank(i)}
  </div> 
  <div class="front">
           <img src="${productcontainer[i].imageSrc}" alt="">
           <h3 class="name">${productcontainer[i].name}</h3>
   <div class="stats">
           <p class="viewers">515.9k</p>
   <div class="streamers">
           <img class="omr" src="media/omar.jpg" alt="">
           <img src="media/ahmed.png" alt="">
   </div>
   </div>
   </div><!-- front end -->
   <div class="back">
   <div class="product-info">
           <p class="product-stat">Amount<span>${productcontainer[i].amount}</span></p>
           <p class="product-stat">category<span>${productcontainer[i].category}</span></p>
   </div>
   <div class="desc">
           <h3>description </h3>
           <p>${productcontainer[i].desc}</p>
   </div>
   <div class="btns">
           <button class="add" onclick="addtocart(${i})">add to cart</button>
           <button class="wish">add to wishlist</button>
   </div>
   </div> <!-- back end -->
   <div class="background ${getBackgroundColor(i)}" id="background">
   </div>
   </div><!-- product end -->
  </div><!-- col end -->

  `
  }
  document.getElementById("photo").innerHTML= box;
  localStorage.setItem("ourshop",JSON.stringify(productcontainer))
}

displayproduct();

// 