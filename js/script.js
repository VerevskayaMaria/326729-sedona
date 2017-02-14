var search = document.querySelector(".search-index .btn-alt");
var form = document.querySelector(".search form");

search.addEventListener("click", function(event) {
	event.preventDefault();
	form.classList.toggle("form-search-show");
});