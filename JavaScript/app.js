function showContent(e) {
  console.log(e.target.parentNode.childNodes[3]);
  e.target.parentNode.childNodes[3].classList.toggle("show");
}

window.onclick = function(e) {
  if (!event.target.matches('.dd-btn')) {
    var dropdowns = document.getElementsByClassName("dd-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}