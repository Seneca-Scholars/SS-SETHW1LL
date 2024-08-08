document.addEventListener('DOMContentLoaded', () => {
  const movieForm = document.getElementById('movieForm');
  const cancelButton = document.getElementById('cancelButton');
  let movies = JSON.parse(localStorage.getItem('movies')) || [];
  const editIndex = localStorage.getItem('editIndex');
// this if statement basically is checking to see if we can edit the index of the movies
  if (editIndex !== null) {
    const movie = movies[editIndex];
    document.getElementById('title').value = movie.title;
    document.getElementById('genre').value = movie.genre;
    document.getElementById('description').value = movie.description;
    document.getElementById('time').value = movie.time;
    document.getElementById('image').value = movie.image;
  }
//
  movieForm.onsubmit = function (event) {
    event.preventDefault(); //dont use original default action, use my method insteade
    const movieData = {
      title: document.getElementById('title').value,
      genre: document.getElementById('genre').value,
      description: document.getElementById('description').value,
      time: document.getElementById('time').value,
      image: document.getElementById('image').value
    };
    if (editIndex !== null) { //checking to see if we can edit the index of the movies
      movies[editIndex] = movieData;
      localStorage.removeItem('editIndex');
    } else {
      movies.push(movieData);
    }
    localStorage.setItem('movies', JSON.stringify(movies));
    window.location.href = 'index.html';
  };
  cancelButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});