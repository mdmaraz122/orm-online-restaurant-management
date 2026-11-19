
let burgerPrice = 280;
let biryaniPrice = 180;
let chickenPrice = 180;


let burgerQty = 0;
let biryaniQty = 0;
let chickenQty = 0;


function changeQty(num, amount) {
  if (num === 1) {
    burgerQty += amount;
    if (burgerQty < 0) {
      burgerQty = 0;
    }
  } else if (num === 2) {
    biryaniQty += amount;
    if (biryaniQty < 0) {
      biryaniQty = 0;
    }
  } else if (num === 3) {
    chickenQty += amount;
    if (chickenQty < 0) {
      chickenQty = 0;
    }
  }
  showCart();
}


function removeItem(num) {
  if (num === 1) {
    burgerQty = 0;
  } else if (num === 2) {
    biryaniQty = 0;
  } else if (num === 3) {
    chickenQty = 0;
  }
  showCart();
}


function showRow(num, qty, price) {
  document.getElementById("qty" + num).innerHTML = qty;
  document.getElementById("sum" + num).innerHTML = price * qty;

  if (qty > 0) {
    document.getElementById("row" + num).style.display = "block";
  } else {
    document.getElementById("row" + num).style.display = "none";
  }
}


function showCart() {
  showRow(1, burgerQty, burgerPrice);
  showRow(2, biryaniQty, biryaniPrice);
  showRow(3, chickenQty, chickenPrice);

  let total = burgerQty * burgerPrice + biryaniQty * biryaniPrice + chickenQty * chickenPrice;
  document.getElementById("total").innerHTML = total;

  if (total === 0) {
    document.getElementById("emptyMsg").style.display = "block";
    document.getElementById("totalLine").style.display = "none";
  } else {
    document.getElementById("emptyMsg").style.display = "none";
    document.getElementById("totalLine").style.display = "block";
  }
}

showCart();