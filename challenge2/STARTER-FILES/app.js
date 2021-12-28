const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 2.23,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 5.12,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 7.82,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 5.99,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 6.98,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 6.34,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]

let selectedItems = []


let menu = document.getElementById("menu")
let summary = document.getElementById("cart-summary")

let subtotalText = document.getElementById("subtotal")
let taxText = document.getElementById("tax")
let totalText = document.getElementById("total")

let total = 0.00
let tax = 0.00
let subtotal = 0.00

function updateStatus() {
  showSelectedItems()
  showAllItems()
}

function showSelectedItems() {
  summary.innerHTML = ``
    if(selectedItems.length === 0){
        summary.innerHTML = `<p class="empty">Your cart is empty.</p>`
    } else {
        selectedItems.forEach(item =>{
            summary.innerHTML += `<li>
            <div class="plate">
              <img src="images/${item.image}" alt="${item.alt}" class="plate" />
              <div class="quantity">${item.count}</div>
            </div>
            <div class="content">
              <p class="menu-item">${item.name}</p>
              <p class="price">$ ${item.price}</p>
            </div>
            <div class="quantity__wrapper">
              <button onclick="removeOne('${item.name}')" class="decrease">
                <img src="images/chevron.svg" />
              </button>
              <div class="quantity">${item.count}</div>
              <button onclick="addMore('${item.name}')" class="increase">
                <img src="images/chevron.svg" />
              </button>
            </div>
            <div class="subtotal">
        $ ${Math.round((item.price * item.count) * 100) / 100}
          </div>

          </li>`
        })
    }
    getTotals()
}

function showAllItems(){
  menu.innerHTML = ``
  menuItems.forEach(item =>{
    if(selectedItems.length !== 0){
        if(selectedItems.includes(item)){
          menu.innerHTML +=`<li>
          <div class="plate">
            <img src="images/${item.image}" alt="${item.alt}" class="plate" />
          </div>
          <div class="content">
          <p class="menu-item">${item.name}</p>
          <p class="price">$ ${item.price}</p>
            <button class="in-cart">
              <img src="images/check.svg" alt="Check" />
              In Cart
            </button>
          </div>
        </li>`
        } else {
          menu.innerHTML += `<li>
          <div class="plate">
            <img src="images/${item.image}" alt="${item.alt}" class="plate" />
          </div>
          <div class="content">
            <p class="menu-item">${item.name}</p>
            <p class="price">$ ${item.price}</p>
            <button class="add" onclick="addToCart('${item.name}')">Add to Cart</button>
          </div>
        </li>`
        }
    } else {
      menu.innerHTML += `<li>
          <div class="plate">
            <img src="images/${item.image}" alt="${item.alt}" class="plate" />
          </div>
          <div class="content">
            <p class="menu-item">${item.name}</p>
            <p class="price">$ ${item.price}</p>
            <button class="add" onclick="addToCart('${item.name}')">Add to Cart</button>
          </div>
        </li>`
        }    
  })
  getTotals()
}

function addToCart(itemName) {
  menuItems.forEach(item =>{
    if(item.name === itemName){
      selectedItems.push(item)
      item.count++
    }
  })
  updateStatus()
}

function getTotals() {
  
  let subtotalItem = 0
  subtotal = 0

  if(selectedItems.length == 0){
    total = 0.00
    tax = 0.00
    subtotal = 0.00
  } else {
    selectedItems.forEach(item => {
      subtotalItem = (item.price * item.count)
      subtotal += subtotalItem
    })
  subtotal = (subtotal * 100) / 100
  }

  tax = Math.round((subtotal * 0.0975) * 100) / 100

  total = Math.round((subtotal + tax) * 100) / 100

  subtotalText.innerText = `$${subtotal}`
  taxText.innerText = `$${tax}`
  totalText.innerText = `$${total}`

}

function addMore (item) {
  selectedItems.forEach(x =>{
    if(x.name === item){
      x.count++
    }
  })
  updateStatus()
}

function removeOne (item) {

  selectedItems.forEach(x =>{
    if(x.name === item){
      if( x.count === 1){
        x.count--
        selectedItems = selectedItems.filter( x =>  {
          return x.name !== item
        } )
        showAllItems()
      } else {
        x.count--
      }
    }
  })
  updateStatus()

} 

updateStatus()
