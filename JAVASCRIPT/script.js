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

const settings = document.getElementsByClassName("settings")[0];
const settingsMenu = document.getElementsByClassName("settings_menu_container")[0];
const darkModeOff = document.querySelector(".dark_mode_off");
const darkModeOn = document.querySelector(".dark_mode_on");

settings.addEventListener("click", function() {
    if (settingsMenu.style.display === "none" || settingsMenu.style.display === "") {
        settingsMenu.style.display = "block";
    } else {
        settingsMenu.style.display = "none";
    }
});

settingsMenu.addEventListener("click", function(event) {
    event.stopPropagation(); 
});

document.addEventListener("click", function(event) {
    if (!settings.contains(event.target) && !settingsMenu.contains(event.target)) {
    settingsMenu.style.display = "none";
    }
});

darkModeOff.addEventListener("click", function() {
    darkModeOff.style.display = "none";
    darkModeOn.style.display = "flex";
    document.body.classList.add("dark_mode");
});

darkModeOn.addEventListener("click", function() {
    darkModeOn.style.display = "none";
    darkModeOff.style.display = "flex";
    document.body.classList.remove("dark_mode");
});

const sendReport = document.querySelector(".send_report");

sendReport.addEventListener("click", function() {
    if (document.body.classList.contains("english_page")) {
        alert("Notice: This feature is currently not supported.");
    }
    else if (document.body.classList.contains("france_page")) {
        alert("Avis: Cette fonctionnalité n'est pas encore prise en charge.");
    }
    else if (document.body.classList.contains("chinese_page")) {
        alert("通知：此功能目前尚不受支持。");
    }
    else {
        alert("Thông báo: Tính năng này hiện chưa được hỗ trợ.");
    }
});