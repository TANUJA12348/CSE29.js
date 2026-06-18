let cart = 0;

const products = [

{
name:"Laptop",
price:55000,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
},

{
name:"Mobile",
price:22000,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
},

{
name:"Headphones",
price:1999,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},

{
name:"Watch",
price:2999,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},

{
name:"Keyboard",
price:1499,
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
},

{
name:"Mouse",
price:799,
image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
},

{
name:"Speaker",
price:2499,
image:"https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
},

{
name:"Camera",
price:45000,
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
},

{
name:"Printer",
price:8500,
image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500"
},

{
name:"Monitor",
price:12000,
image:"https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500"
},

{
name:"Tablet",
price:18000,
image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
},

{
name:"TV",
price:40000,
image:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500"
},

{
name:"Shoes",
price:2500,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},

{
name:"Bag",
price:1800,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},

{
name:"Bottle",
price:499,
image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500"
},

{
name:"Book",
price:399,
image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500"
},

{
name:"Chair",
price:3200,
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
},

{
name:"Fan",
price:1800,
image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500"
},

{
name:"Iron",
price:1200,
image:"https://images.unsplash.com/photo-1583947582886-f40ec95dd752?w=500"
},

{
name:"Mixer",
price:2800,
image:"https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500"
},

{
name:"AC",
price:38000,
image:"https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=500"
},

{
name:"Refrigerator",
price:45000,
image:"https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500"
},

{
name:"Microwave",
price:9500,
image:"https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500"
},

{
name:"Smartphone",
price:32000,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
}

];

function displayProducts(items){

const container =
document.getElementById("productContainer");

container.innerHTML="";

items.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<div class="price">
₹${product.price}
</div>

<button onclick="addToCart()">
Add To Cart
</button>

</div>

`;

});

}

function searchProducts(){

const value =
document.getElementById("searchInput")
.value.toLowerCase();

const filtered =
products.filter(product =>
product.name.toLowerCase().includes(value)
);

displayProducts(filtered);

}

function addToCart(){

cart++;

document.getElementById("cartCount")
innerText = cart;

}

displayProducts(products);