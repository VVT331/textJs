"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let lastFilms = prompt('Один из последних просмотренных фильмов?', '').trim(),
                estimationLastFilms = +prompt('На сколько оцените его?', '');

            if (lastFilms != null && estimationLastFilms != null && lastFilms != '' && estimationLastFilms != '' && lastFilms.length < 50) {
                personalMovieDB.movies[lastFilms] = estimationLastFilms;
            } else {
                i--;
            }
        }
    },
    detectPersonaLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы - классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы - киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let loveYourGenre = prompt(`Ваш любимый жанр под номер ${i}?`)
            if (loveYourGenre === '' || loveYourGenre === null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = loveYourGenre;
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonaLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
