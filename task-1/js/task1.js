'use strict';

let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastOfFilmQ1 = prompt("Один из последних просмотренных фильмов?", ""),
    ratingFilmQ1 = +prompt("На сколько оцените его?", ""),
    lastOfFilmQ2 = prompt("Один из последних просмотренных фильмов?", ""),
    ratingFilmQ2 = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastOfFilmQ1] = ratingFilmQ1;
personalMovieDB.movies[lastOfFilmQ2] = ratingFilmQ2;



console.log(personalMovieDB.movies);


