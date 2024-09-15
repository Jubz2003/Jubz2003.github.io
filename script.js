// Simple JavaScript to demonstrate some interactivity

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name && email && message) {
        alert("Thanks for your message, " + name + "! We'll get back to you soon.");
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
