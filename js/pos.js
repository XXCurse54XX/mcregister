var total = 0;

function roundHundred(value){
  return Math.ceil(value * 100) / 100;
}

function Buy(item){
  var price = item.price;
  var name = item.name;
  total += item.price;
  total = (roundHundred(total));
  document.getElementById("TotalNoTax").innerHTML = total.toFixed(2);
}
