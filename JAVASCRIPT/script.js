document.getElementById("search_input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        query = document.getElementById("search_input").value;

        if (query.trim() !== "") {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query.trim());
        }
    }
});