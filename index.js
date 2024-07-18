//VARIABLES
let donutCounter = 0;
let autoClickerCounter = 0;
let price = 100;

//TOTAL DONUT FUNCTION
document.querySelector("#increase-donuts").onclick = function () {
  const donutTotal = document.querySelector("#donut-total");
  donutCounter++;
  donutTotal.innerText = donutCounter + ": Donuts Made";
};

//AUTOCLICKER PURCHASE FUNCTION
document.querySelector("#buy-autoclicker").onclick = function () {
  const autoclickerTotal = document.querySelector("#autoclicker-total");
  if (donutCounter >= price) {
    autoClickerCounter++;
    donutCounter -= price;
    price = Math.floor(price * 1.1);
    document.querySelector("#price").innerText = price;
  }
  autoclickerTotal.innerText = autoClickerCounter + ": Auto Clickers Purchased";
  const donutTotal = document.querySelector("#donut-total");
  donutTotal.innerText = donutCounter + ": Donuts Made";
};

//AUTOCLICKER PRODUCTION FUNCTION
setInterval(function () {
  const donutTotal = document.querySelector("#donut-total");

  donutTotal.innerText = donutCounter + ": Donuts Made";

  donutCounter += autoClickerCounter;
}, 1000);

//RESET GAME
document.querySelector("#reset").onclick = function () {
  donutCounter = 0;
  autoClickerCounter = 0;
  price = 100;
  const donutTotal = document.querySelector("#donut-total");
  const autoclickerTotal = document.querySelector("#autoclicker-total");
  document.querySelector("#price").innerText = price + " Donuts";
  donutTotal.innerText = donutCounter + ": Donuts Made";
  autoclickerTotal.innerText = autoClickerCounter + ": Auto Clickers Purchased";
}

