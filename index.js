/*const container = (document.querySelector(".container").innerText =
  "mmmmmmmmm doughnuts.... ahhhhhhh!");*/
/**
 * No idea why this is present in project. Putting anything inside the div
 * will prevent anything else from displaying at all except the .innerText string value.
 */

//TOTAL DONUT FUNCTION
let donutCounter = 0;

document.querySelector("#increase-donuts").onclick = function () {
  const donutTotal = document.querySelector("#donut-total");
  donutCounter++;
  donutTotal.innerText = donutCounter + ": Donuts Made";
};

//AUTOCLICKER PURCHASE FUNCTION
let autoClickerCounter = 0;
let price = 100;

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
  document.querySelector("#price").innerText = price;
  donutTotal.innerText = donutCounter + ": Donuts Made";
  autoclickerTotal.innerText = autoClickerCounter + ": Auto Clickers Purchased";
}

