'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for

function rememberMyFilms() {

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
}

rememberMyFilms();



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

function detectPersonalLevel() {

    if (personalMovieDB.count >=0 && personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

console.log(personalMovieDB.movies);

/* function showMyDB(privacy) {
    if (privacy == false) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat); */


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = favoriteGenre;

        //personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDB.genres);




