// الوصول إلى الزر وتحديد ما يحدث عند النقر
document.addEventListener("DOMContentLoaded", function() {
    var nextPageButton = document.getElementById("nextPageButton");
    nextPageButton.addEventListener("click", function() {
      window.location.href = "page2.html"; // توجيه المستخدم إلى الصفحة الثانية
    });
  });


  // الوصول إلى الزر وتحديد ما يحدث عند النقر
document.addEventListener("DOMContentLoaded", function() {
    var firstPageButton = document.getElementById("firstPageButton");
    firstPageButton.addEventListener("click", function() {
      window.location.href = "index.html"; // توجيه المستخدم إلى الصفحة الثانية
    });
  });



  const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);


// زرار الالعاب
function GamesPage() {
  window.location.href = "/games/games.html";
}
// زرار الرسم
function ArtPage() {
  window.location.href = "art.html";
}
// زرار العقل
function BrainPage() {
  window.location.href = "brain.html";
}
// زرار القران
function QuranPage() {
  window.location.href = "quran.html";
}