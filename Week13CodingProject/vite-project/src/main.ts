// Importing necessary CSS files
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Define API URL and key (replace with your host and API key)
const API_URL = 'http://localhost:5000/movies'; // Make sure to update with your correct URL
const API_KEY = 'Your_API_Key_Here'; // Optional if your API requires a key

// Get form and input elements
const movieForm = document.getElementById('movieForm') as HTMLFormElement;
const titleInput = document.getElementById('title') as HTMLInputElement;
const directorInput = document.getElementById('director') as HTMLInputElement;
const yearInput = document.getElementById('year') as HTMLInputElement;
const genreInput = document.getElementById('genre') as HTMLSelectElement;
const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const genreSelect = document.getElementById('genreSelect') as HTMLSelectElement;

// Movie list display area
const movieList = document.getElementById('movieList') as HTMLUListElement;

// Store fetched movies
let allMovies: { id: number; title: string; director: string; year: string; genre: string }[] = [];

// Function to fetch and display movies
async function fetchMovies() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch movies: ${response.statusText}`);
        }

        const data = await response.json();
        allMovies = data;
        displayMovies(data);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Function to display movies
function displayMovies(movies: { id: number; title: string; director: string; year: string; genre: string }[]): void {
    if (movieList) {
        movieList.innerHTML = ''; // Clear current movie list
    }

    movies.forEach((movie) => {
        const movieItem = document.createElement('li');
        movieItem.classList.add('list-group-item');
        movieItem.textContent = `${movie.title} (Directed by ${movie.director}, ${movie.year}, Genre: ${movie.genre})`;

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteBtn.onclick = () => deleteMovie(movie.id);

        movieItem.appendChild(deleteBtn);
        movieList?.appendChild(movieItem);
    });
}

// Function to add a new movie
if (movieForm) {
    movieForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const newMovie = {
            title: titleInput.value.trim(),
            director: directorInput.value.trim(),
            year: yearInput.value.trim(),
            genre: genreInput.value.trim()
        };

        // Validate input
        if (!newMovie.title || !newMovie.director || !newMovie.year || !newMovie.genre) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY
                },
                body: JSON.stringify(newMovie)
            });

            if (!response.ok) {
                throw new Error('Failed to add movie');
            }

            console.log('Movie added:', await response.json());
            movieForm.reset();
            fetchMovies(); // Refresh the movie list after adding a new one
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    });
}

// Function to delete a movie
function deleteMovie(movieId: number): void {
    fetch(`${API_URL}/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete movie');
        }
        console.log(`Movie with ID ${movieId} deleted`);
        fetchMovies(); // Refresh the movie list after deletion
    })
    .catch(error => console.error('Error deleting movie:', error));
}

// Function to filter movies based on title, director, and genre
function filterMovies() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedGenre = genreSelect.value;

    const filteredMovies = allMovies.filter(movie => {
        const matchesTitle = movie.title.toLowerCase().includes(query);
        const matchesDirector = movie.director.toLowerCase().includes(query);
        const matchesGenre = selectedGenre ? movie.genre === selectedGenre : true;

        return (matchesTitle || matchesDirector) && matchesGenre;
    });

    displayMovies(filteredMovies);
}

// Event listeners for search input and genre dropdown
if (searchInput) {
    searchInput.addEventListener('input', filterMovies);
}
if (genreSelect) {
    genreSelect.addEventListener('change', filterMovies);
}

// Initial fetch when the page loads
fetchMovies();
