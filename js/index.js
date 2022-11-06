function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
// Changing UI Backgrond Color

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.getElementById("fullpage").classList.toggle("dark");
  document.getElementById("searchform").classList.toggle("dark");
  document.getElementById("searchcontainer").classList.toggle("dark");
  document.getElementById("sidenav").classList.toggle("dark");
  document.getElementById("change").classList.toggle("dark");
  document.getElementById("Show_more").classList.toggle("dark");
  document.getElementById("Show_less").classList.toggle("dark");

  document.body.classList.toggle("dark");

  let img = document.getElementById("logoimg").src;

  if (img.indexOf("image/First-Bank.png") != -1) {
    document.getElementById("logoimg").src = "image/First-Bankdark.png";
  } else {
    document.getElementById("logoimg").src = "image/First-Bank.png";
  }
});

// Close and Open Nav
let sidebar = document.getElementById("sidenav");
let close = document.getElementById("closein");
let open = document.getElementById("menu");

close.addEventListener("click", () => {
  sidebar.style.display = "none";
});

open.addEventListener("click", () => {
  sidebar.style.display = "block";
});

// Show all card / less card
let ShowAll = document.getElementById("Show_more");
let heightChange = document.getElementById("all_cards");
let hiddenCards = document.querySelectorAll(".addtional_cards");
let HideAll = document.getElementById("Show_less");
for (let i = 0; i < hiddenCards.length; i++) {
  hiddenCards[i];
  ShowAll.addEventListener("click", () => {
    hiddenCards[i].classList.replace("remove", "add");

    heightChange.style.height = 100 + "%";
    ShowAll.style.display = "none";
    HideAll.style.display = "block";
  });
  HideAll.addEventListener("click", () => {
    hiddenCards[i].classList.replace("add", "remove");
    heightChange.style.height = 120 + "vh";
    ShowAll.style.display = "block";
    HideAll.style.display = "none";
  });
}
