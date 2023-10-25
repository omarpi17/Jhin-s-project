const select = document.querySelector('.custom-select');
const header = select.querySelector('.select-header');
const options = select.querySelector('.options');
const arrow = select.querySelector('.arrow');
const selectedOption = select.querySelector('.selected-option');

header.addEventListener('click', function() {
  options.classList.toggle('show');
  arrow.classList.toggle('up');
});

options.addEventListener('click', function(e) {
  if (e.target.classList.contains('option')) {
    const value = e.target.textContent;
    selectedOption.textContent = value;
    options.classList.remove('show');
    arrow.classList.remove('up');
  }
});
// ------------------------------------------------
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;



function showSlide() {
  slides[currentSlide].classList.add('active');
}

function hideSlide() {
  slides[currentSlide].classList.remove('active');
}

function nextSlide() {
  hideSlide();
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}
setInterval(nextSlide, 3000);
// Show the initial slide
showSlide();
// ------------------------------------------------
// let luck = document.getElementById("lucky")
// let cards = document.querySelectorAll('cards')


// luck.addEventListener("click",function(){
//     cards.forEach(cards=>{

//         cards.style.display="block"
//     })
        
    
// })


// Dashboard to Shop Connection-----------------------------------------

var productcontainer =[]//here we push the products into
if(localStorage.getItem("ourshop")== null){
    productcontainer=[]
}else{
    productcontainer= JSON.parse(localStorage.getItem("ourshop"))
    displayproduct()
}



function displayproduct(){
  var box = "" ;
  for(var i = 0 ; i < productcontainer.length ; i++){
  box += `
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
  document.getElementById("ShopList").innerHTML= box
  localStorage.setItem("ourshop",JSON.stringify(productcontainer))
}

function getBackgroundColor(i){
        var RankHolder = ""
        if(productcontainer[i].category == "clothes"){
          RankHolder = `backgroundClo`
          return RankHolder;
        }
        else if(productcontainer[i].category == "electronics"){
          RankHolder = `backgroundElc`
          return RankHolder;
        }
        else if(productcontainer[i].category == "furniture"){
          RankHolder = `backgroundFur`
          return RankHolder;
        }
        else if(productcontainer[i].category == "shoes"){
          RankHolder = `backgroundSho`
          return RankHolder;
        }
      else{
        RankHolder = `backgroundArt`
        return RankHolder;
      }      
}

function addtocart(i){
  if(productcontainer[i].amount <= 0){
      alert("Out of Stock")
  }
  else{
      productcontainer[i].inCart = 1;
      localStorage.setItem("ourshop",JSON.stringify(productcontainer))  
      displayCartCount();
  }
}

function getRank(i){
  var RankHolder = ""
  if(productcontainer[i].category == "clothes"){
    RankHolder = `<i class="fa-solid fa-shirt"></i>`
    return RankHolder;
  }
  else if(productcontainer[i].category == "electronics"){
    RankHolder = `<i class="fa-solid fa-gamepad"></i>`
    return RankHolder;
  }
  else if(productcontainer[i].category == "furniture"){
    RankHolder = `<i class="fa-solid fa-couch"></i>`
    return RankHolder;
  }
  else if(productcontainer[i].category == "shoes"){
    RankHolder = `<i class="fa-solid fa-socks"></i>`
    return RankHolder;
  }
else{
  RankHolder = `<i class="fa-solid fa-palette"></i>`
  return RankHolder;
}
}

// Dashboard to Shop Connection------------------------------------------


// category sorting-------------------------------

var SelectedCategory = "";
document.getElementById("CatClothes").addEventListener("click",function(){
  SelectedCategory = "clothes";
  displaySelectedCateg();
})
document.getElementById("CatElec").addEventListener("click",function(){
  SelectedCategory = "electronics";
  displaySelectedCateg();
})
document.getElementById("CatShoes").addEventListener("click",function(){
  SelectedCategory = "shoes";
  displaySelectedCateg();
})
document.getElementById("CatFurniture").addEventListener("click",function(){
  SelectedCategory = "furniture";
  displaySelectedCateg();
})
document.getElementById("CatArt").addEventListener("click",function(){
  SelectedCategory = "art";
  displaySelectedCateg();
})
document.getElementById("CatAll").addEventListener("click",function(){
  displayproduct();
})

function displaySelectedCateg(){
  var box = "" ;
  for(var i = 0 ; i < productcontainer.length ; i++){
    if(productcontainer[i].category == SelectedCategory){
  box += `
  <div class="col-xl-3 col-lg-4 col-md 6 col-sm-12">
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
  else{
    box += `
    <div class="col-xl-3 col-lg-4 col-md 6 col-sm-12 TheInvisible">
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
  }
  document.getElementById("ShopList").innerHTML= box
  localStorage.setItem("ourshop",JSON.stringify(productcontainer))  
}

// category sorting-------------------------------


// Search Product--------------------------------

function search(term){
  var box="" ;
  for(var i = 0 ; i < productcontainer.length ; i++){
     if(productcontainer[i].name.toLowerCase().includes(term.toLowerCase().trim()) == true){
      box +=
      `     <div class="col-xl-3 col-lg-4 col-md 6 col-sm-12">
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
  else{
    box +=
    `     <div class="col-xl-3 col-lg-4 col-md 6 col-sm-12 TheInvisible">
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
  document.getElementById("ShopList").innerHTML= box
  localStorage.setItem("ourshop",JSON.stringify(productcontainer))  
}
}


// Search Product--------------------------------

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

// Light ME Box

let luck = document.getElementById("light")
let luckyitems = document.querySelectorAll(".cards")
let blackbox = document.querySelector(".blackbox")

luck.addEventListener("click",function(){
        blackbox.style.background="transparent"
        luck.style.display="none"
        for (let i = 0; i < luckyitems.length; i++) {
                luckyitems[i].style.opacity="1"
        }
})

// Light ME Box


// The Top Cards Height Issue Solving


let BigCard = document.getElementById("BigCard");
let CardsRow = document.getElementById("CardsRow");
let BigCardHeight = BigCard.offsetHeight;
CardsRow.style.height = BigCardHeight + "px";