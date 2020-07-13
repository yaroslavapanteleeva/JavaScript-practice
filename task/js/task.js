'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        //for
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count >=0 && personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(favoriteGenre === '' || favoriteGenre == null) {
                i--; 
            } else {
                personalMovieDB.genres[i - 1] = favoriteGenre;
            }
            //personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);

        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
            
    }
};

/* personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();

console.log(personalMovieDB.movies);
personalMovieDB.showMyDB();


personalMovieDB.writeYourGenres();

console.log(personalMovieDB.genres);

personalMovieDB.toggleVisibleMyDB(); */

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

/* function showMyDB(privacy) {
    if (privacy == false) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat); */








