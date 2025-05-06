
const movies = require('./data.js');


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
console.log("Ejercicios por consola");
console.log(getAllDirectors(movies));
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie=>movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
console.log(howManyMovies(movies));
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.reduce((accumulate, movie)=>{
        if (movie.director=="Steven Spielberg" && movie.genre.includes("Drama")){
            return accumulate+1; 
        }
        return accumulate;
    },0);
    return dramaMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
console.log(scoresAverage(movies));
function scoresAverage(moviesArray) {
    const moviesWithScores = moviesArray.filter(movie => movie.score !== undefined && movie.score !== null);
    const totalScore = moviesWithScores.reduce((accumulate, movie)=>{
        return accumulate + movie.score;
    },0);
    let average = 0;
    moviesArray.length == 0 ? average = 0: average = +(totalScore/ moviesArray.length).toFixed(2);
    return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


// {
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Frank Darabont",
//     "duration": "2h 22min",
//     "genre": ["Crime","Drama"],
//     "score": 9.3
//   }