var logoLight = document.getElementById("logo-light");
var logoDark = document.getElementById("logo-dark");

var changeTheme = function (value) {
  if (value === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
    logoLight.style.display = 'none';
    logoDark.style.display = 'block';
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
    logoDark.style.display = 'none';
    logoLight.style.display = 'block';
  }
};

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  changeTheme("dark");
} else {
  changeTheme("light");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      changeTheme("light");
    } else {
      changeTheme("dark");
    }
  }
});
