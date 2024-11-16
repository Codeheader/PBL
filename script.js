// Display a dynamic greeting based on the time of day
function displayGreeting() {
    const greetingElement = document.getElementById("greeting-message");
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingElement.textContent = "Good Morning! Welcome to your personalized news app.";
    } else if (hour < 18) {
        greetingElement.textContent = "Good Afternoon! Catch up on the latest news.";
    } else {
        greetingElement.textContent = "Good Evening! Stay updated with the latest stories.";
    }
}

// Filter news articles by topic
function filterNews(topic) {
    const newsItems = document.querySelectorAll(".news-item");

    newsItems.forEach(item => {
        if (item.getAttribute("data-topic") === topic || topic === "all") {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}

// Initialize greeting and show all news items on page load
document.addEventListener("DOMContentLoaded", () => {
    displayGreeting();
    filterNews("all");  // Display all news by default
});
