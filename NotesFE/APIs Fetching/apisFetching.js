document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const displayDiv = document.getElementById('dataDisplay');
        displayDiv.innerHTML = data.slice(0, 5).map(post => `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});