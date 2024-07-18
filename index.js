//VARIABLES
let donutCounter = 0;
let autoClickerCounter = 0;
let price = 100;

//TOTAL DONUT FUNCTION
document.querySelector("#increase-donuts").onclick = function () {
  donutCounter++;

  const donutTotal = document.querySelector("#donut-total");
  donutTotal.innerText = donutCounter + ": Donuts Made";
};

//AUTOCLICKER PURCHASE FUNCTION
document.querySelector("#buy-autoclicker").onclick = function () {
  if (donutCounter >= price) {
    autoClickerCounter++;
    donutCounter -= price;
    price = Math.floor(price * 1.1);
    document.querySelector("#price").innerText = price;
  }

  const autoClickerTotal = document.querySelector("#autoclicker-total");
  autoClickerTotal.innerText = autoClickerCounter + ": Auto Clickers Purchased";

  const donutTotal = document.querySelector("#donut-total");
  donutTotal.innerText = donutCounter + ": Donuts Made";
};

//AUTOCLICKER PRODUCTION FUNCTION
setInterval(function () {
  donutCounter += autoClickerCounter;

  const donutTotal = document.querySelector("#donut-total");
  donutTotal.innerText = donutCounter + ": Donuts Made";
}, 1000);

//RESET GAME
document.querySelector("#reset").onclick = function () {
  autoClickerCounter = 0;
  donutCounter = 0;
  price = 100;

  const autoClickerTotal = document.querySelector("#autoclicker-total");
  autoClickerTotal.innerText = autoClickerCounter + ": Auto Clickers Purchased";

  const donutTotal = document.querySelector("#donut-total");
  donutTotal.innerText = donutCounter + ": Donuts Made";

  const autoClickerPrice = document.querySelector("#price");
  autoClickerPrice.innerText = price + " Donuts";
}

