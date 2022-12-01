document.addEventListener("DOMContentLoaded", function () {
  console.log("HTML prêt !");

  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;
});

/* Set the width of the side navigation to 250px */
function openNav() {
  var sidenav = document.getElementById("mySidenav");
  console.log("Active");
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  var sidenav = document.getElementById("mySidenav");
  console.log("Inactive");
  sidenav.classList.remove("active");
}
