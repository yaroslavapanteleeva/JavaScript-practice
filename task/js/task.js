'use strict';

let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for

for (let i = 0; i < 2; i++) {
    let lastOfFilm = prompt("Один из последних просмотренных фильмов?", ""),
        ratingFilm = +prompt("На сколько оцените его?", "");
        
    if ( (lastOfFilm != null && ratingFilm != null) && (lastOfFilm != '' && ratingFilm != '') && (lastOfFilm.length < 50) ) {
        personalMovieDB.movies[lastOfFilm] = ratingFilm;
        console.log('yes');
    } else {
        console.log('no');
        i--;
    }

} 

// while

/* let i = 0;

while (i < 2) {
    let lastOfFilm = prompt("Один из последних просмотренных фильмов?", ""),
        ratingFilm = +prompt("На сколько оцените его?", "");
        
    if ( (lastOfFilm != null && ratingFilm != null) && (lastOfFilm != '' && ratingFilm != '') && (lastOfFilm.length < 50) ) {
        personalMovieDB.movies[lastOfFilm] = ratingFilm;
        console.log('yes');
    } else {
        console.log('no');
        i--;
    }
    i++;
} */

// do while

/* let i = 0;

do {

    let lastOfFilm = prompt("Один из последних просмотренных фильмов?", ""),
        ratingFilm = +prompt("На сколько оцените его?", "");
        
    if ( (lastOfFilm != null && ratingFilm != null) && (lastOfFilm != '' && ratingFilm != '') && (lastOfFilm.length < 50) ) {
        personalMovieDB.movies[lastOfFilm] = ratingFilm;
        console.log('yes');
    } else {
        console.log('no');
        i--;
    }
    i++;
} while (i < 2); */

console.log(personalMovieDB.movies);

if (personalMovieDB.count >=0 && personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


