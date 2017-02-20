<!--Интерактивная карта-->
var viewmap = document.querySelector(".geolocation-company .map");
var popmap = document.querySelector(".modal-content-map");
var closemap = document.querySelector(".modal-content-close");

if(viewmap) {
  viewmap.addEventListener("click", function(event) {
    event.preventDefault();
    popmap.classList.add("modal-content-map-show");
  });

  closemap.addEventListener("click", function(event) {
    event.preventDefault();
    popmap.classList.remove("modal-content-map-show");
  });

  window.addEventListener("keydown", function(event) {
  	if (event.keyCode === 27) {
  		if (popmap.classList.contains("modal-content-map-show")) {
  				popmap.classList.remove("modal-content-map-show");
  		}
  	}
  });
}

<!--Всплывающее окно отправки формы-->
var viewwrite = document.querySelector(".geolocation-company .btn");
var popwrite = document.querySelector(".write-us");
var closewrite = document.querySelector(".write-us-btn-close");

if(viewwrite) {
  var writename = popwrite.querySelector("[name=name]");
  var form = popwrite.querySelector("form");
  var email = popwrite.querySelector("[name=email]");
  var storage = localStorage.getItem("name");
  var stor = localStorage.getItem("mail");
  var text = popwrite.querySelector("textarea");

  viewwrite.addEventListener("click", function(event) {
    event.preventDefault();
    popwrite.classList.add("write-us-show");
    
    if(storage && stor) {
    	writename.value = storage;
    	email.value = stor;
    	text.focus();
    }	else {
    		writename.focus();
    }
  });

  closewrite.addEventListener("click", function(event) {
    event.preventDefault();
    popwrite.classList.remove("write-us-show");
    popwrite.classList.remove("write-us-error");
  });

  form.addEventListener("submit", function(event) {
    if (!writename.value || !email.value) {
    event.preventDefault();
    popwrite.classList.add("write-us-error");
  	} else { 
  		localStorage.setItem("name", writename.value);
  		localStorage.setItem("mail", email.value);
  	}
  });

  window.addEventListener("keydown", function(event) {
  	if (event.keyCode === 27) {
  		if (popwrite.classList.contains("write-us-show")) {
  			popwrite.classList.remove("write-us-show");
  			popwrite.classList.remove("write-us-error");
  		}
  	}
  });
}

<!--Модальное окно: Товар добавлен в корзину-->
var viewcart = document.querySelectorAll(".product-action .buy");
var closecart = document.querySelector(".items-in-cart-btn-close");

if(viewcart && closecart) {
  var popcart = document.querySelector(".items-in-cart");

  viewcart.forEach(function(item, i) {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      popcart.classList.add("items-in-cart-show");
    });

    closecart.addEventListener("click", function(event) {
      event.preventDefault();
      popcart.classList.remove("items-in-cart-show");
    });
  });

  window.addEventListener("keydown", function(event) {
  	if (event.keyCode === 27) {
  		if (popcart.classList.contains("items-in-cart-show")) {
  			popcart.classList.remove("items-in-cart-show");
  		}
  	}
  });
}