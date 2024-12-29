// DOM elements
const fanMessageInput = document.getElementById("fan-message");
const submitButton = document.getElementById("submit-message");
const toggleButton = document.getElementById("toggle-comments");
const messageFeed = document.getElementById("message-feed");

// Function to load messages from localStorage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("fanMessages")) || [];
    messages.forEach((message) => {
        displayMessage(message);
    });
}

// Function to display a single message
function displayMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageFeed.appendChild(messageDiv);
}

// Function to save messages to localStorage
function saveMessage(message) {
    const messages = JSON.parse(localStorage.getItem("fanMessages")) || [];
    messages.push(message);
    localStorage.setItem("fanMessages", JSON.stringify(messages));
}

// Event listener for posting a new message
submitButton.addEventListener("click", function () {
    const message = fanMessageInput.value.trim();
    if (message) {
        displayMessage(message); // Display the message
        saveMessage(message);   // Save it to localStorage
        fanMessageInput.value = ""; // Clear the input
    }
});

// Event listener for toggling comments visibility
toggleButton.addEventListener("click", function () {
    if (messageFeed.style.display === "none") {
        messageFeed.style.display = "block";
        toggleButton.textContent = "Hide Comments";
    } else {
        messageFeed.style.display = "none";
        toggleButton.textContent = "View Comments";
    }
});

// Load messages on page load
window.addEventListener("DOMContentLoaded", loadMessages);
