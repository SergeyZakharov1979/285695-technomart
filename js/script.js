var viewmap = document.querySelector(".geolocation-company .map");
var popmap = document.querySelector(".modal-content-map");
var closemap = document.querySelector(".modal-content-close");

viewmap.addEventListener("click", function(event) {
	event.preventDefault();
	popmap.classList.add("modal-content-map-show");
});

closemap.addEventListener("click", function(event) {
	event.preventDefault();
	popmap.classList.remove("modal-content-map-show");
});


var viewwrite = document.querySelector(".geolocation-company .btn");
var popwrite = document.querySelector(".write-us");
var closewrite = document.querySelector(".write-us-btn-close");
var writename = popwrite.querySelector("[name=name]");
var form = popwrite.querySelector("form");

viewwrite.addEventListener("click", function(even) {
	even.preventDefault();
	popwrite.classList.add("write-us-show");
	writename.focus();
	console.log("JS working");
});

closewrite.addEventListener("click", function(even) {
	even.preventDefault();
	popwrite.classList.remove("write-us-show");
});

var viewcart = document.querySelector(".product-action .buy");
var popcart = document.querySelector(".items-in-cart");
var closecart = document.querySelector(".items-in-cart-btn-close");

viewcart.addEventListener("click", function(eve) {
	eve.preventDefault();
	popcart.classList.add("items-in-cart-show");
});

closecart.addEventListener("click", function(eve) {
	eve.preventDefault();
	popcart.classList.remove("items-in-cart-show");
});