var total = 0;
var qt = 1;
var price = 0;
var orderOpen = true;

function roundHundred(value){
  return Math.ceil(value * 100) / 100;
}

function getQt(number) {
  qt = number;
  // add clar qt box
}
/*var time = 1;
setInterval(function timeElapsed() {
    time
}, 1000);


$('body').click(function(){
  timeElapsed();
});*/

function Buy(item){
  var burger = new sandwich(item[0], item[1], qt, item[3]); // Get item and construct burger

  // Qt more than 1
  if (burger.quantity > 1) {
    price = burger.price * qt;
    total += price; // Add the price of the burger to the overall totoal
    document.getElementById("TotalNoTax").innerHTML = total.toFixed(2);
    qt = 1; // Return to default value;
    $('#printOrder').append("<li class='InCartObject' >x" + burger.quantity + " " + burger.name + "</li>");
  }

  else if( burger.quantity <= 0) {
    alert("Cannot have 0 burgers.");
    qt = 1; // Restore quantity value
  }

  // Qt 1
  else {
    price = burger.price;
    total += price; // Add the price of the burger to the overall totoal
    document.getElementById("TotalNoTax").innerHTML = total.toFixed(2);
    $('#printOrder').append("<li class='InCartObject' >x" + burger.quantity + " " + burger.name + "</li>");
  }


}
