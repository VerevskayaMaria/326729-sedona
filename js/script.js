var search = document.querySelector(".search-index .btn-alt"); 
var form = document.querySelector(".search form"); 

search.addEventListener("click", function(event) {
  event.preventDefault();
  if (form.classList.contains("form-search-show")) { 
    form.classList.remove("form-search-show"); 
  } 
  else { 
    form.classList.add("form-search-show"); 
  } 
});