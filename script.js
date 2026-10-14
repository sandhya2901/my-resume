const form = document.getElementById("messageForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    document.getElementById("form-message").textContent =
        "Thank you, " + name + "! Your message has been entered.";

    form.reset();
});