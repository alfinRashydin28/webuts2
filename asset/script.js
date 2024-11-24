document.addEventListener("DOMContentLoaded", function() {
    // Setelah seluruh dokumen dimuat, tampilkan konten utama dan hilangkan splash screen
    setTimeout(function() {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 5000); // Menunggu 2 detik sebelum fade out
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var navbar = document.querySelector(".h-nav");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("h-nav-scrolled");
  } else {
    navbar.classList.remove("h-nav-scrolled");
  }
}
