const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
console.log("Ejercicios por consola");
console.log(getAllDirectors(movies));
function getAllDirectors(moviesArray) {
  console.log("\nIteration 1");

  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
console.log(howManyMovies(movies));
function howManyMovies(moviesArray) {
  console.log("\nIteration 2");

  const dramaMovies = moviesArray.reduce((accumulate, movie) => {
    if (movie.director == "Steven Spielberg" && movie.genre.includes("Drama")) {
      return accumulate + 1;
    }
    return accumulate;
  }, 0);
  return dramaMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
console.log(scoresAverage(movies));
function scoresAverage(moviesArray) {
  console.log("\nIteration 3");
  const moviesWithScores = moviesArray.filter(
    (movie) => movie.score !== undefined && movie.score !== null
  );
  const totalScore = moviesWithScores.reduce((accumulate, movie) => {
    return accumulate + movie.score;
  }, 0);
  let average = 0;
  moviesArray.length == 0
    ? (average = 0)
    : (average = +(totalScore / moviesArray.length).toFixed(2));
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
console.log(dramaMoviesScore(movies));
function dramaMoviesScore(moviesArray) {
  console.log("\nIteration 4");
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length == 0) return 0;
  const totalDramaMoviesScore = dramaMovies.reduce((accumulate, movie) => {
    return accumulate + movie.score;
  }, 0);

  return +(totalDramaMoviesScore / dramaMovies.length).toFixed(2); //Dividido entre la cantidad de peliculas de Drama o el Total?
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
console.log(orderByYear(movies));
function orderByYear(moviesArray) {
  console.log("\nIteration 5");
  const moviesSortYear = [...moviesArray];
  moviesSortYear.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.title.localeCompare(b.title);
  });
  return moviesSortYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
console.log(orderAlphabetically(movies));
function orderAlphabetically(moviesArray) {
  console.log("\nIteration 6");
  const moviesSortedAlphabetic = [...moviesArray];
  moviesSortedAlphabetic.sort((a, b) => a.title.localeCompare(b.title));
  return moviesSortedAlphabetic.map((movie) => movie.title).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
/**
 * 0.- Mapear para devolver los minutos Totales.
 * 1.- Separar la duración por " ", donde la primera parte serán las Xh y la segunda la Ymin
 * 2.- la primera parte se multiplicará por 60 (horas a minutos) y se le sumarán a los minutos
 * 3.- los minutos totales se guaradrán en una variable, que será el nuevo valor de la duración del objeto.
 * 4.- Map debe devolver cada objeto actualizado y la función debe devolver todos los objetos actualizados que devuelve map: return {...movie, duration:durationTotal}
 */
console.log(turnHoursToMinutes(movies));
function turnHoursToMinutes(moviesArray) {
  console.log("\nIteration 7");

    return moviesArray.map((e) => {
      const hour = e.duration.split(' ')[0].replace('h', '')>0 ? Number(e.duration.split(' ')[0].replace('h', ''))*60: 0;
      const minute = e.duration.split(' ')[1] ? Number(e.duration.split(' ')[1].replace('min', '')): 0;
      return {...e, duration:`${hour+minute} min`};
    });
    
  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  console.log("\nIteration 8");
}

// {
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Frank Darabont",
//     "duration": "2h 22min",
//     "genre": ["Crime","Drama"],
//     "score": 9.3
//   }
