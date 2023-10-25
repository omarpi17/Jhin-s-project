var productname = document.getElementById("ProductName")
var productcompany = document.getElementById("ProductCompany")
var productprice = document.getElementById("ProductPrice")
var productcategory = document.getElementById("ProductCategory")
var productdesc = document.getElementById("ProductDesc")
var productamount = document.getElementById("ProductAmount")
var ProductImg = document.getElementById("imageInput")
var imagesrc = "";
//  code to get image src
    ProductImg.addEventListener("change", () => {
        imagesrc = URL.createObjectURL(ProductImg.files[0])
    })
    
// code to get image src
var updatebtn = document.getElementById("updatebtn")
var addd = document.getElementById("addd")
var light=0
var cool=``
var ava=""
var place
var green=`class="grr"style="background-color: lightgreen;
color:green;
width:80px;
margin:auto;
border-radius:16px;
padding:3px 10px;"`;
var red =`class="grr"style="background-color: lightcoral;
color:red;
width:80px;
margin:auto;
border-radius:16px;
padding:3px 10px;"`;
var productcontainer =[]//here we push the products into
if(localStorage.getItem("ourshop")== null){
    productcontainer=[]
}else{
    productcontainer= JSON.parse(localStorage.getItem("ourshop"))
    displayproduct()
}
if(localStorage.getItem("SHOP")== null){
    CartContainer=[]
}else{
    CartContainer= JSON.parse(localStorage.getItem("SHOP"))
    displayCart()
}
//add product
function AddProduct() {
    var Product = {
    company:productcompany.value,
    name : productname.value,
    price : productprice.value,
    category : productcategory.value,
    desc : productdesc.value,
    amount : productamount.value,
    imageSrc:  imagesrc,
    total : 0,
    cartamount : 0,
    inCart : 0
}

if(Product.name==="" || Product.price==="" || Product.price <= 0 || Product.category==="" || Product.desc==="" || Product.amount==="" || Product.amount<0|| Product.company==="")
{
    alert("invalid")
}
else{
    if(light==0){
    if(Product.imageSrc == ""){
    Product.imageSrc = "media/noImg.png"
    }
    productcontainer.push(Product)
    displayproduct()
    deleteentry()
    localStorage.setItem("ourshop",JSON.stringify(productcontainer))
   
    }
    else{
        productcontainer[place].company= productcompany.value
        productcontainer[place].name= productname.value
        productcontainer[place].price= productprice.value
        productcontainer[place].category= productcategory.value
        productcontainer[place].desc= productdesc.value
        productcontainer[place].amount= productamount.value
        addd.classList.add('black')
        addd.classList.remove('btn-warning')
        addd.innerHTML="Add Product"
        displayproduct()
        deleteentry()
         light=0
         localStorage.setItem("ourshop",JSON.stringify(productcontainer))  
    }
}
   

}
//display all poducts
function displayproduct(){
    var box = "" ;
    for(var i = 0 ; i < productcontainer.length ; i++){
        getcolor(i)
    box += `
        <tr>
        <td>${i+1}</td>
        <td><img src="${productcontainer[i].imageSrc}"></td>
        <td><div ${cool}>${ava}</div></td>
        <td>${productcontainer[i].company}</td>
        <td>${productcontainer[i].name}</td>
        <td>$${productcontainer[i].price}</td>
        <td>${productcontainer[i].category}</td>
        <td>${productcontainer[i].desc}</td>
        <td>${productcontainer[i].amount}</td>
        <td><button class="btn btn-danger" onclick="deleterow(${i})"><i class="fa-solid fa-trash-can"></i></button></td>
        <td><button id="updatebtn" class="btn btn-warning" onclick="updateproduct(${i})"><i class="fa-solid fa-pen-to-square"></i></button></td>
     </tr>
    `
    }
    document.getElementById("TBody").innerHTML= box
    localStorage.setItem("ourshop",JSON.stringify(productcontainer))  

}
// delete entry
function deleteentry(){
    productcompany.value=""
    productname.value=""
    productprice.value=""
    productcategory.value=""
    productdesc.value=""
    productamount.value=""
    
}
// delete all
function deleteall(){
        productcontainer.splice(0)  
        localStorage.setItem("ourshop",JSON.stringify(productcontainer)) 
        displayproduct()  
        light=0
}
// delete row
function deleterow(i){
    if(productcontainer[i].amount==0||productcontainer[i].amount<0){
        productcontainer.splice(i,1)
        light=0
        localStorage.setItem("ourshop",JSON.stringify(productcontainer)) 
        displayproduct()
    }
    else
    productcontainer[i].amount=productcontainer[i].amount-1
if(productcontainer[i].amount < 0){
    productcontainer.splice(i,1)
}
    localStorage.setItem("ourshop",JSON.stringify(productcontainer)) 
    displayproduct()
   
}
// updateproduct
function updateproduct(i){
    productcompany.value=productcontainer[i].company
    productname.value=productcontainer[i].name
    productprice.value=productcontainer[i].price
    productcategory.value=productcontainer[i].category
    productdesc.value=productcontainer[i].desc
    productamount.value=productcontainer[i].amount
    addd.classList.remove('black')
    addd.classList.add('btn-warning')
    addd.innerHTML="update"
    light=1
    place=i
    localStorage.setItem("ourshop",JSON.stringify(productcontainer))   

    displayproduct()

}
//search
function search(data) {
    var box = "" ;
    for(var i = 0 ; i < productcontainer.length ; i++){
        getcolor(i)
        if(productcontainer[i].name.includes(data)==true){
    box += `
        <tr>
        <td>${i+1}</td>
        <td><div ${cool}>${ava}</div></td>
        <td>${productcontainer[i].company}</td>
        <td>${productcontainer[i].name}</td>
        <td>$${productcontainer[i].price}</td>
        <td>${productcontainer[i].category}</td>
        <td>${productcontainer[i].desc}</td>
        <td>${productcontainer[i].amount}</td>
        <td><button class="btn btn-danger" onclick="deleterow(${i})"><i class="fa-solid fa-trash-can"></i></button></td>
        <td><button id="updatebtn" class="btn btn-warning" onclick="updateproduct(${i})"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <td> <button class="btn btn-success " onclick="addtocart(${i})"><i class="fa-solid fa-basket-shopping"></i></button></td>
     </tr>
    `
    }
}
    document.getElementById("TBody").innerHTML= box
}
function getcolor(i){
    if(productcontainer[i].amount==0)
    {
        ava="outstock"
        cool=red
    }else{
        ava="instock"
        cool=green
    }
}


var CartContainer = [];

function addtocart(i){
    if(productcontainer[i].amount <= 0){
        alert("Out of Stock")
    }
    else{
        productcontainer[i].inCart = 1;
        displayCart();
        localStorage.setItem("ourshop",JSON.stringify(productcontainer))  
    }
}

function displayCart (){
    var box = "";
    for(var i = 0; i < CartContainer.length ; i++){
        box +=` <tr>
        <td>${CartContainer[i].name}</td>
        <td>$${CartContainer[i].price}</td>
        <td><input type="number" name="CartAmount" id="CartAmount${i}" onkeyup="Changer(${i})" value ="${CartContainer[i].amount}")"></td>
        <td>${CartContainer[i].total}</td>
        <td><button class = "btn btn-success" onclick="confirm(${i})"><i class="fa-solid fa-circle-check"></i></button></td>
        <td><button class="btn btn-danger" onclick="deletecart(${i})"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
        `
    }
    document.getElementById("Shop").innerHTML= box;
    localStorage.setItem("CART",JSON.stringify(CartContainer))


}


function Changer(i){
    CartContainer[i].amount = document.getElementById(`CartAmount${i}`).value;
    var result = CartContainer[i].price * CartContainer[i].amount;
    CartContainer[i].total = result;
    displayCart();
}

function deletecart(i){
        CartContainer.splice(i,1);
        displayCart();
    }

    var GrandFinal = document.getElementById("finalprice");
    GrandFinal.value = 0;


function confirm(i){
    AmountChecker(i);
}

function AmountChecker(i){
    if(parseInt(CartContainer[i].amount)  <= 0 || parseInt(CartContainer[i].amount=="")){
        alert("Invalid data");
    }
    else{
        if(parseInt(CartContainer[i].amount) > parseInt(productcontainer[CartContainer[i].Index].amount) ){
            alert("Stock Shortage");
        }
        else{
            productcontainer[CartContainer[i].Index].amount -= CartContainer[i].amount;
            GrandFinal.value += CartContainer[i].total;
            GrandFinal.innerHTML =`\$${GrandFinal.value}`;        
            deletecart(i);
            displayproduct();
        }
    
    }
}
