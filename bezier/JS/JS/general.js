const menuIcon = document.getElementById("menu-icon");
const navItems = document.getElementById("nav-items");

menuIcon.addEventListener("click", () => {
  navItems.classList.toggle("hidden");
});

