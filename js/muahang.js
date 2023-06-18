const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    var product = event.target.closest(".content-div3-img").querySelector(".content-div3-text");
    var productImg = event.target.closest(".content-div3-img").querySelector("img").src;
    var productName = product.querySelector(".name").textContent;
    var productPrice = product.querySelector(".cost").textContent;
    addToCart(productName, productPrice, productImg);
  });
});

function addToCart(name, price, imgUrl) {
  alert ("Đã thêm vào giỏ hàng.Chúc Quý khách Một Ngày Vui Vẻ");
  var table = document.querySelector("table tbody");
  var row = table.insertRow();
  var nameCell = row.insertCell(0);
  var priceCell = row.insertCell(1);
  var imgCell = row.insertCell(0);
  nameCell.innerHTML = name;
  priceCell.innerHTML = price;
  imgCell.innerHTML = "<img src='" + imgUrl + "' width='50' />";
}


