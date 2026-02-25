document.getElementById("search_input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        query = document.getElementById("search_input").value;

        if (query.trim() !== "") {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query.trim());
        }
    }
});

const menu = document.getElementsByClassName("menu")[0];
const dropdown = document.getElementsByClassName("dropdown_menu_container")[0];

menu.addEventListener("click", function() {
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        menu.style.backgroundColor = "hsl(0, 0%, 90%)";
    } else {
        dropdown.style.display = "none";
        menu.style.backgroundColor = "transparent";
    }
});

dropdown.addEventListener("click", function(event) {
    event.stopPropagation(); 
});

document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
    menu.style.backgroundColor = "transparent";
    }
});