const apiKey = '0ed43ff017d14d6c928e400c2f6ca16e'; // Your API key

// Function to fetch news articles based on the category
function fetchNews(category) {
    let url = 'https://newsapi.org/v2/top-headlines?category=general&apiKey=' + apiKey;

    // Modify URL for specific category
    if (category !== 'all') {
        url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
    }

    // Fetch news from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                displayNews(data.articles);
            } else {
                document.getElementById('news-articles').innerHTML = '<p>No news available at the moment. Please try again later.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            document.getElementById('news-articles').innerHTML = '<p>Failed to load news. Please try again later.</p>';
        });
}

// Function to display the fetched news articles
function displayNews(articles) {
    const newsContainer = document.getElementById('news-articles');
    newsContainer.innerHTML = ''; // Clear previous articles

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');
        articleElement.innerHTML = `
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description}</p>
        `;
        newsContainer.appendChild(articleElement);
    });
}

// Fetch news for the 'all' category by default
fetchNews('all');

// Function to handle topic filter buttons
function filterNews(category) {
    fetchNews(category);
}
