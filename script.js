document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var navbar = document.getElementById("navbar");

        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#3498db";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });
});
