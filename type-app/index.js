"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./module");
var Movie = /** @class */ (function () {
    function Movie(title, year) {
        this.title = title;
        this.year = year;
        this.rating = 1;
    }
    return Movie;
}());
function rateMovie(movie, rating) {
    movie.rating = rating;
}
var ironMan = new Movie('iron', 2025);
rateMovie(ironMan, 19993);
var cat = 'Sebastian';
var Status;
(function (Status) {
    Status[Status["open"] = 0] = "open";
    Status[Status["done"] = 1] = "done";
})(Status || (Status = {}));
var task = {
    title: 'get up',
    status: Status.done,
};
if (task.status === Status.done) {
    console.log('Erledigt');
}
var age;
age = 42;
console.log("age is right now ".concat(age));
age = 'alexis';
console.log("age was updated to ".concat(age));
var User = /** @class */ (function () {
    function User() {
        this.name = '';
    }
    User.prototype.setName = function (name) {
        this.name = name;
    };
    return User;
}());
var userA = new User();
userA.setName('John');
var userB = new User();
userB.setName('Steve');
function compare(userA, userB) {
    return userA.name === userB.name;
}
var comp = function (userA, userB) {
    return userA.name === userB.name;
};
console.log('compare:', compare(userA, userB));
console.log('comp:', comp(userA, userB));
function defaultParameters(a, b) {
    if (b === void 0) { b = 4; }
    return a + b;
}
console.log('with default :', defaultParameters(3));
function withOptionalParameter(a, b) {
    return b !== undefined ? a + b : a;
}
console.log('with optional', withOptionalParameter(5));
console.log('with optional', withOptionalParameter(5, 6));
function withVarArgsParams(a) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return numbers.reduce(function (prev, curr) { return prev + curr; }, a);
}
console.log('with var args: ', withVarArgsParams(1, 2, 3));
console.log('adding: ', (0, module_1.add)(10, 22));
//if (age.isInteger()){
//	console.log('Right now I am an integer');
//}
