const movieForm = document.getElementById('movieForm');
const movieTitle = document.getElementById('movieTitle');
const genreSelect = document.getElementById('genreSelect');
const movieDescription = document.getElementById('movieDescription');
const movieReview = document.getElementById('movieReview');
const movieImage = document.getElementById('movieImage');
const movieList = document.getElementById('movieList');

// Fetch and display genres
async function loadGenres() {
  const response = await fetch('http://localhost:3000/genres');
  const genres = await response.json();
  genreSelect.innerHTML = genres
    .map((genre) => `<option value="${genre.id}">${genre.name}</option>`)
    .join('');
}

// Fetch and display movies with reviews, genres, and descriptions
async function loadMovies() {
  const response = await fetch('http://localhost:3000/movies');
  const movies = await response.json();

  movieList.innerHTML = '';
  for (let movie of movies) {
    const genreResponse = await fetch(
      `http://localhost:3000/genres?id=${movie.genreId}`
    );
    const genres = await genreResponse.json();
    const genre = genres.length ? genres[0] : { name: 'Unknown' };

    const reviewResponse = await fetch(
      `http://localhost:3000/reviews?movieId=${movie.id}`
    );
    const reviews = await reviewResponse.json();
    const avgRating = reviews.length
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 'No reviews';

    // Check if the movie has a valid imageUrl, otherwise use a fallback image
    const imageUrl = movie.imageUrl || 'https://placekitten.com/150/150'; // Fallback image

    const movieItem = document.createElement('li');
    movieItem.className =
      'list-group-item d-flex justify-content-between align-items-center flex-column text-start';
    movieItem.innerHTML = `
        <div>
            <img src="${imageUrl}" alt="${
      movie.title
    }" class="img-fluid movie-img" />
            <strong>${movie.title}</strong> <span class="badge bg-secondary">${
      genre.name
    }</span>
        </div>
        <div>Average Rating: <strong>${avgRating}</strong></div>
        <div><strong>Description:</strong> ${
          movie.description || 'No description available'
        }</div>
        <button class="btn btn-danger btn-sm mt-2" onclick="deleteMovie(${
          movie.id
        })">Delete</button>
    `;
    movieList.appendChild(movieItem);
  }
}

// Add a new movie
movieForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newMovie = {
    title: movieTitle.value,
    genreId: parseInt(genreSelect.value),
    description: movieDescription.value || 'No description available', // Add movie description
    imageUrl: movieImage.value || 'https://via.placeholder.com/150', // Default image if none provided
  };

  const response = await fetch('http://localhost:3000/movies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newMovie), // Don't inlcude the id, it will be auto-generated
  });

  const movie = await response.json(); // Get the added movie to use its id for review

  // Add a default review for the movie
  const newReview = {
    movieId: movie.id,
    rating: parseInt(movieReview.value) || 5, // Default to 5 if no review is provided
  };

  // Add the review to the reviews API
  await fetch('http://localhost:3000/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newReview),
  });

  // Clear the form fields
  movieTitle.value = '';
  movieDescription.value = '';
  movieReview.value = '';
  movieImage.value = ''; // Clear the image field
  loadMovies(); // Reload movies and reviews
});

// Delete a movie
async function deleteMovie(id) {
    console.log(`Deleting movie with id ${id}`); // Debugging line
  
    try {
      const response = await fetch(`http://localhost:3000/movies/${id}`, {
        method: 'DELETE',
      });
  
      console.log('Response status:', response.status); //Log the status code
  
      if (response.ok) {
        console.log('Movie deleted successfully');
        loadMovies(); // Reload the movie list after deletion
      } else {
        console.error('Failed to delete movie', response.status);
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  }
  

// Load data on page load
loadGenres();
loadMovies();
