var productcontainer =[]//here we push the products into
if(localStorage.getItem("ourshop")== null){
    productcontainer=[]
}else{
    productcontainer= JSON.parse(localStorage.getItem("ourshop"))
}

let days = 1;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      minutes = 59;
      hours--;
      if (hours < 0) {
        hours = 23;
        days--;
        if (days < 0) {
          stopTimer();
          return;
        }
      }
    }
  }

  const formattedTime = formatTime(days) + ':' + formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
  document.getElementById('timer').textContent = formattedTime;
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('timer').textContent = '00:00:00:00';
}
startTimer()
// ---------------------home-----------------
let change = document.querySelectorAll(".change")
let cha1 = document.getElementById("cha1")
let chha2 = document.getElementById("chha2")
let cha11=document.querySelectorAll(".cha")
change[1].style.opacity="0"
change[1].style.display="none"
cha1.addEventListener("click",function(){
    change[0].style.opacity="0"
    change[0].style.display="none"
    change[1].style.display="flex"
    setTimeout(function () {
        change[1].style.opacity = "1";
        change[1].animate="fadeinout"
      }, 200);
    
    cha11[0].classList.add("chha2")
    cha11[1].classList.add("cha1")
    cha11[1].classList.remove("chha2")
})
chha2.addEventListener("click",function(){
    change[1].style.opacity="0"
    change[1].style.display="none"
    change[0].style.display="flex"
    setTimeout(function () {
        change[0].style.opacity = "1";
      }, 200);
    cha11[1].classList.add("chha2")
    cha11[0].classList.add("cha1")
    cha11[0].classList.remove("chha2")

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