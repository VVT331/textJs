"use strict"
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilms = prompt('Один из последних просмотренных фильмов?', '');
let estimationLastFilms = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilms] = estimationLastFilms;

console.log(personalMovieDB);