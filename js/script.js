"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    } 3
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilms = prompt('Один из последних просмотренных фильмов?', ''),
            estimationLastFilms = +prompt('На сколько оцените его?', '');

        if (lastFilms != null && estimationLastFilms != null && lastFilms != '' && estimationLastFilms != '' && lastFilms.length < 50) {
            personalMovieDB.movies[lastFilms] = estimationLastFilms;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonaLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы - классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы - киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonaLevel();



function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const loveYourGenre = prompt(`Ваш любимый жанр под номер ${i}?`)
        personalMovieDB.genres[i - 1] = loveYourGenre;
    }
}

writeYourGenres();

