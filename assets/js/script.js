let navbar = document.getElementsByClassName('.navbar');

function showNavbar() {
  if (navbar.style.display == 'none') {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
  }
}

console.log(navbar);
