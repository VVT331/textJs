"use strict"
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    let lastFilms = prompt('Один из последних просмотренных фильмов?', ''),
        estimationLastFilms = +prompt('На сколько оцените его?', '');

    if (lastFilms != null && estimationLastFilms != null && lastFilms != '' && estimationLastFilms != '' && lastFilms.length < 50) {
        personalMovieDB.movies[lastFilms] = estimationLastFilms;
    } else {
        i--;
    }
}


if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы - классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы - киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);




