var total = 0;
var uid = 0;

function roundHundred(value){
  return Math.ceil(value * 100) / 100;
}

function Buy(item){
  item.quantity = item.quantity + 1;
  if(!(item.quantity > 1 )){
    // If there is more than one item, do not assign new uid
    uid = uid + 1;
  }
  else {
    uid = uid;
  }
  var price = item.price;
  total += item.price;
  var fullPrice = (roundHundred(price));
  total = (roundHundred(total));
  document.getElementById("TotalNoTax").innerHTML = total.toFixed(2);
  if(!(item.quantity > 1)){
    $('#printOrder').append("<li class='InCartObject' id='" + item.id + "'>x<span class='itmQt'>" + item.quantity + "</span> " + item.name + "<span class='costBox' style='float: right;'>" + fullPrice.toFixed(2) + "</span></li>");
  }
  else {
      $('.itmQt').html(item.quantity);
      var multiCost = item.price * item.quantity;
      multiCost = (roundHundred(multiCost));
      $('.costBox').html(multiCost.toFixed(2));
  }
  // Add selected class to the Item when you click
  $('li').click(function(){
    $(this).toggleClass('SelectedInCart');
    $('.voidBtn').click(function removeItem(){
      var rmItem = $('.SelectedInCart').id;
      
      $('.SelectedInCart').hide();
    });
  });
}
