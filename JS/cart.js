let TotalCart = document.getElementById("TotalCart");
TotalCart.innerHTML = "Total Price :  "
let items = document.getElementById("Items");
items.innerHTML = " items in cart : 0"

// CheckOut Button Animation //
const btn = document.getElementById("checkOutBtn");

function confirmPurchase(){
  document.documentElement.classList.toggle('checked-out');
}

// CheckOut Button Animation //

var productcontainer = []
if(localStorage.getItem("ourshop")== null){
  productcontainer=[]
}else{
  productcontainer= JSON.parse(localStorage.getItem("ourshop"))
  displayproduct()
}


function displayproduct(){
  let itemcount = 0;
  var box = "" ;
  for(var i = 0 ; i < productcontainer.length ; i++){
    if(productcontainer[i].inCart == 1){
      itemcount++;
      box += `
      <tr>
      <td>
      <div class="details">
      <img src="${productcontainer[i].imageSrc}" alt="">
      <div class="details-text">
              <h3>${productcontainer[i].name}</h3>
              <p>${productcontainer[i].category}</p>
              <p>${productcontainer[i].company}</p>

      </div>
      </div>        
      </td>
      <td>
              <div class="Amount">
                  <input type="number" name="ProductAmount" class="w-100" onkeyup="Changer(${i})"  id="CartAmount${i}">
              </div>
      </td>
      <td>
      <div class="Amount">
              <h3>E£${productcontainer[i].price}</h3>
              </div>   
      </td>
      <td>
              <div class="removeCart">
              <button class="TheDeleter" onclick="deletecart(${i})"><i class="fa-solid fa-trash-can"></i></button>
              </div>
      </td>
      </tr>
    `

    }
    else{
      box += `
      <li class = "TheInvisible"><div class="cartItem">
      <div class="row">
          <div class="col-xl-2">
              <div class="productImg">
                  <img src="${productcontainer[i].imageSrc}" alt="">
              </div>
          </div>
          <div class="col-xl-5">
              <div class="productInfo">
                  <h3>${productcontainer[i].name}</h3>
                  <p>${productcontainer[i].company}</p>
              </div>
          </div>
          <div class="col-xl-2">
              <div class="Amount">
                  <input type="number" name="ProductAmount" class="w-100" onkeyup="Changer(${i})"  id="CartAmount${i}">
              </div>
          </div>
          <div class="col-xl-1">
              <div class="removeCart">
              <button class="TheDeleter" onclick="deletecart(${i})"><i class="fa-solid fa-trash-can"></i></button>
              </div>
          </div>
          <div class="col-xl-2">
              <div class="productPrice">
                  <p>E£${productcontainer[i].price}</p>
              </div>
          </div>
    </div>
    </div></li>
    `
    }
  }
  items.innerHTML =   " Items in cart :" +itemcount
  document.getElementById("CartList").innerHTML= box
  localStorage.setItem("ourshop",JSON.stringify(productcontainer)) 

}

function deletecart(i){
  productcontainer[i].inCart = 0;
  localStorage.setItem("ourshop",JSON.stringify(productcontainer))  
  displayproduct();
  for(let i = 0 ; i < productcontainer.length ; i++){
    productcontainer[i].total = 0;
  }
  displayTotal();
}

function Changer(i){
  productcontainer[i].cartamount = document.getElementById(`CartAmount${i}`).value;
  productcontainer[i].total= productcontainer[i].price * productcontainer[i].cartamount;
  displayTotal();
}

function displayTotal(){
  let TheTotalPrice = 0
  for (let i = 0 ; i < productcontainer.length ; i++){
    TheTotalPrice += productcontainer[i].total;
  }
  TotalCart.innerHTML = "Total Price : E£" + TheTotalPrice;
}


function AmountChecker(){
  for(let i = 0 ; i < productcontainer.length ; i++){
    for(let j = 0 ; j < productcontainer.length ; j++){
      if(productcontainer[j].inCart == 1){
      if(parseInt(productcontainer[j].cartamount)  <= 0 || productcontainer[j].cartamount ==""){
        alert("Invalid data");
        return;
    }
    else{
        if(parseInt(productcontainer[j].cartamount) > parseInt(productcontainer[j].amount)){
            alert("Stock Shortage");
            return;
        }
    }
  }
    }
    if(productcontainer[i].inCart == 1){
    productcontainer[i].amount -= parseInt(productcontainer[i].cartamount);
    productcontainer[i].inCart = 0;
    productcontainer[i].cartamount = 0;
    productcontainer[i].total = 0;
    TotalCart.innerHTML = "Total Price :  "
    }


  }
  confirmPurchase();
  displayproduct();
 
}


btn.addEventListener('click', AmountChecker);


