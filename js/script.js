var viewmap = document.querySelector(".geolocation-company .map");
var popmap = document.querySelector(".modal-content-map");
var closemap = document.querySelector(".modal-content-close");


viewmap.addEventListener("click", function(event) {
	event.preventDefault();
	popmap.classList.add("modal-content-map-show");});


closemap.addEventListener("click", function(event) {
	event.preventDefault();
	popmap.classList.remove("modal-content-map-show");});

var viewwrite = document.querySelector(".geolocation-company .btn");
var popwrite = document.querySelector(".write-us");
var closewrite = document.querySelector(".write-us .btn-close");
var writename = document.querySelector("[name=name]");

viewwrite.addEventListener("click", function(event) {
	event.preventDefault();
	popwrite.classList.add("write-us-show");
	writename.focus();
});

closewrite.addEventListener("click", function(event) {
	event.preventDefault();
	popwrite.classList.remove("write-us-show");
});