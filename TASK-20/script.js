let cart = [];
let slno = 0;
let totalPrice = 0;
const dataRow = document.getElementById("data");
const bookName = document.getElementById("name");
const bookEmail = document.getElementById("email");
const bookPhone = document.getElementById("phone");
const bookBtn = document.getElementById("book-btn");
const newsName = document.getElementById("news-name")
const newsEmail = document.getElementById("news-email")
const layout = document.getElementById("layout")
let success = document.getElementById("success");
let tableDataBox = document.getElementById("data-box");
let totalPriceBox = document.getElementById("total-price");
success.style.visibility = "false";
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
function validatePhone(phone) {
  const trimmed = phone.replace(/[\s\-()]/g, ''); 
  const phonePattern = /^(?:\+91|91|0)?[6-9]\d{9}$/; 
  return phonePattern.test(trimmed);
}
function render(cart) {
  const emptyCart = `                <div id="empty-state"class="empty-state">
                  <td id="empty-row" colspan="3">
                    <div class="info-icon">i</div>
                    <div class="empty-text">No Items Added</div>
                    <p class="instruction-text">
                      Add items to the cart from the services bar
                    </p>
                  </td>
                </div>`;
  
  if (cart.length === 0) {
    tableDataBox.innerHTML = emptyCart;
    totalPriceBox.innerText = "₹0";
    bookName.disabled = true;
    bookEmail.disabled = true;
    bookPhone.disabled = true;
    bookBtn.style.backgroundColor = "#c7cbff";
    bookBtn.style.cursor = "not-allowed";
  } else {
    bookBtn.style.backgroundColor = "#5863f9";
    bookBtn.style.cursor = "pointer";
    dataRow.innerHTML = "";
    tableDataBox.innerHTML = "";
    cart.forEach((item, index) => {
      tableDataBox.innerHTML += `
    <tr class="data">
      <td class="data-slno">${index + 1}</td>
      <td class="data-servname">${item.name}</td>
      <td class="data-price">₹${item.price}</td>
    </tr>`;
    });
    totalPrice = cart
      .map((e) => {
        return Number(e.price);
      })
      .reduce((prev, curr) => {
        return (prev += curr);
      });
    totalPriceBox.innerText = "₹" + totalPrice;
    bookName.disabled = false;
    bookEmail.disabled = false;
    bookPhone.disabled = false;
    bookBtn.disabled = false;
  }
}
render(cart);

function add(name, price, servid) {
  const servBtn = document.getElementById(servid);
  servBtn.classList.remove("add-item");
  servBtn.classList.add("skip-item");
  servBtn.innerHTML = "";
  servBtn.innerHTML = `Remove item<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;
  cart.push({ name, price,servid });
  slno++;
  servBtn.setAttribute("onclick", `skip('${name}',${price},'${servid}')`);
  render(cart);
}
function reset(name,price,servid){
  const servBtn = document.getElementById(`${servid}`);
  servBtn.classList.add("add-item");
  servBtn.classList.remove("skip-item");
  servBtn.innerHTML = "";
  servBtn.innerHTML = `Add Item<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
    servBtn.setAttribute("onclick", `add('${name}',${price},'${servid}')`);
}
function skip(name, price, servid) {
  const servBtn = document.getElementById(`${servid}`);
  const index = cart.findIndex((item) => item.name === name);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  servBtn.classList.add("add-item");
  servBtn.classList.remove("skip-item");
  servBtn.innerHTML = "";
  servBtn.innerHTML = `Add Item<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
  servBtn.setAttribute("onclick", `add('${name}',${price},'${servid}')`);
  render(cart);
}
function sendMail(email, price, cart) {
  let params = {
    email: email,
    price: String(price),
  };
  if (cart !== 0) {
    emailjs.send("service_4tjmjcc", "template_f3pab78", params);
  }
}
bookBtn.addEventListener("click", (e) => {
  if (cart.length === 0) {
    success.style.visibility = "true";
    success.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="#ff0000"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><p style="color: #ff0000ff;">Add the items to the cart to book</p>`;
    return;
  }

  if (
    bookEmail.value !== "" && validateEmail(bookEmail.value) &&
    bookName.value !== "" &&
    bookPhone.value.length == 10 && validatePhone(bookPhone.value)
  ) {
    success.style.visibility = "true";
    success.innerHTML = "";
    if (
      bookEmail.value !== "" && validateEmail(bookEmail.value) && 
      bookName.value !== "" &&
      bookPhone.value.length == 10 && validatePhone(bookPhone.value)
    ) {
      success.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="#62ce41"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><p style="color: #62ce41;">Thank you for contacting we will get back to you soon</p>`;
      success.style.transition = "all 2s ease-in 0.3s";
    }
    try{
     sendMail(bookEmail.value, totalPrice, cart);
    }catch(err){
      success.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="#ff0000"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><p style="color: #ff0000ff;">${error}</p>`;
    }

    cart.forEach(item =>{
      reset(item.name,item.price,item.servid)
    })
    cart = [];
    slno = 0;
    totalPrice = 0;
    bookEmail.value = ""
    bookName.value = ""
    bookPhone.value = ""
    render(cart)
  } else {
    success.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="#ff0000"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><p style="color: #ff0000ff;">Provide valid details</p>`;
  }
});

function subscribe(){
  bookEmail.value=newsEmail.value
  bookName.value = newsName.value

layout.scrollIntoView({ 
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest'
});
}
const mobNav = document.getElementById('mob-nav');
mobNav.style.transform = 'translate(300vw)';
function closeMenu(){
  mobNav.style.transform = 'translate(300vw)';
}
function openMenu(){
  mobNav.style.transform = 'translate(0)';
}
