var total = 0;

function roundHundred(value){
  return Math.ceil(value * 100) / 100;
}

function Buy(item){
  var price = item.price;
  total += item.price;
  var fullPrice = (roundHundred(price));
  total = (roundHundred(total));
  document.getElementById("TotalNoTax").innerHTML = total.toFixed(2);
  $('#printOrder').append("<li>" + item.name + "&nbsp;" +fullPrice.toFixed(2) + "</li>");
}
