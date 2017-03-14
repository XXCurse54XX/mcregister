var total = 0;

function roundHundred(value){
  return Math.ceil(value * 100) / 100;
}

function Buy(item){
  var uid = 0;
  uid += 1;
  var price = item.price;
  total += item.price;
  var fullPrice = (roundHundred(price));
  total = (roundHundred(total));
  document.getElementById("TotalNoTax").innerHTML = total.toFixed(2);
  $('#printOrder').append("<li class='InCartObject'>" + item.name + uid + "<span style='float: right;'>" + fullPrice.toFixed(2) + "</span></li>");
}

//On Click Event for Items in cart
// Not Working
$('.InCartObject').click(function(){
  $(this).addClass('SelectedInCart');
  alert("class added");
});

// Void Line
function VoidLine(item) {
  // space
};
