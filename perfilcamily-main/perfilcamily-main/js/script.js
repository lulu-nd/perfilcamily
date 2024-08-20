const toggletheme = document.getElementById("toggleTheme")
const rootHtml = document.documentElement;

function changeTheme () {
const currentTheme = rootHtml.getAttributr("data-theme");

currentTheme === "dark" ? rootHtml.setAttribute("data-theme,light") : rootHtml.setAttribute("data-theme" , "dark");

toggletheme.classList.toggle("bi-sun");
toggletheme.classList.toggle("bi-moon-star");
}
toggletheme.addEventListener("click" ,"changeTheme");