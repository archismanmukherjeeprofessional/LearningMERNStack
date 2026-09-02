const laundryServices = [
  {
    name: "Wash n' Iron",
    price: "₹29",
    assetUrl: "assets/Wash-Iron-Fold.png",
  },
  {
    name: "Casuals Wash",
    price: "₹79",
    assetUrl: "assets/casuals-wash.png",
  },
  {
    name: "Formals Dry Clean",
    price: "₹249",
    assetUrl: "assets/Formal-wash.png",
  },
  {
    name: "Ethinic Female Dry Clean",
    price: "₹499",
    assetUrl: "assets/Ethinic-female-wash.png",
  },
  {
    name: "Ethinic Male Dry Clean",
    price: "₹449",
    assetUrl: "assets/Ethinic-male-wash.png",
  },
  {
    name: "Winter Wear Dry Clean",
    price: "₹599",
    assetUrl: "assets/winterwear-wash.png",
  },
  {
    name: "Toys Cleaning",
    price: "₹149",
    assetUrl: "assets/toys-wash.png",
  },
  {
    name: "Shoe Wash",
    price: "₹149",
    assetUrl: "assets/shoe-wash.png",
  },
  {
    name: "Curtain Wash",
    price: "₹299",
    assetUrl: "assets/curtain-wash.png",
  },
  {
    name: "Bedsheet Wash",
    price: "₹349",
    assetUrl: "assets/bedsheet-wash.png",
  },
];

let cart = [];
let slno = 0;
let totalPrice = 0;
const dataRow = document.getElementById("data");
const bookName = document.getElementById("name");
const bookEmail = document.getElementById("email");
const bookPhone = document.getElementById("phone");
const bookBtn = document.getElementById("book-btn");
const servImg = document.getElementById("servimg");
const servName = document.getElementById("servname");
const servPrice = document.getElementById("servprice");
let success = document.getElementById("success");
let tableDataBox = document.getElementById("data-box");
let totalPriceBox = document.getElementById("total-price");
success.style.visibility = "false";

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
    bookBtn.addEventListener("click", (e) => {
      success.style.visibility = "true";
      success.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="#ff0000"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><p style="color: #ff0000ff;">Add the items to the cart to book</p>`;
    });
  } else {
    bookBtn.addEventListener("click", (e) => {
      success.style.visibility = "true";
      success.innerHTML = "";
      if (
        bookEmail.value !== "" &&
        bookName.value !== "" &&
        bookPhone.value.length == 10
      ) {
        success.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="#62ce41"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><p style="color: #62ce41;">Thank you for contacting we will get back to you soon</p>`;
        success.style.transition = "all 2s ease-in 0.3s";
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        success.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="#ff0000"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><p style="color: #ff0000ff;">Provide valid details</p>`;
      }
    });
  }
  if (cart.length === 0) {
    dataRow.innerHTML = emptyCart;
    bookName.disabled = true;
    bookEmail.disabled = true;
    bookPhone.disabled = true;
    bookBtn.style.backgroundColor = "#c7cbff";
    bookBtn.style.cursor = "not-allowed";
  } else {
    bookBtn.style.backgroundColor = "#5863f9";
    bookBtn.style.cursor = "pointer";
    dataRow.innerHTML = "";
    lastCartObj = cart[cart.length - 1];
    tableDataBox.innerHTML += `<tr id="data" class="data">
                <td class="data-slno">${slno}</td>
                  <td class="data-servname">${lastCartObj.name}</td>
                  <td class="data-price">${lastCartObj.price}</td>
              </tr>`;
    totalPrice = cart
      .map((e) => {
        return Number(e.price.slice(1));
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

const firstObj = laundryServices[0];
let firstImgUrl = firstObj.assetUrl;
servImg.style.backgroundImage = `url(${firstImgUrl})`;
servName.innerText = firstObj.name;
servPrice.innerText = firstObj.price;
let flag = 0;
let currObj = {};
function skip() {
  flag++;
  currObj = laundryServices[flag];
  servImg.style.backgroundImage = `url(${currObj.assetUrl})`;
  servName.innerText = currObj.name;
  servPrice.innerText = currObj.price;
  if (flag === laundryServices.length - 1) {
    flag = -1;
  }
}
function add() {
  slno++;
  if (flag === 0) {
    cart.push(firstObj);
    render(cart);
    skip();
  } else {
    cart.push(currObj);
    render(cart);
    flag++;
    currObj = laundryServices[flag];
    servImg.style.backgroundImage = `url(${currObj.assetUrl})`;
    servName.innerText = currObj.name;
    servPrice.innerText = currObj.price;
    if (flag === laundryServices.length - 1) {
      flag = -1;
    }
  }
}
