// https://developer.mozilla.org/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
// https://learn.javascript.ru/prototypes

// Функция-конструктор для рисованных персонажей
var Pers = function (numsys, name) {
	this.numsys = numsys;
	this.name = name;
	this.quotes = ["Ты справишься!", "Молодец!", "Попробуй еще!"];
	this.visible = true;
};

// метод запуска танца персонажа
Pers.prototype.dance = function() {
	console.log("im dancing, woo-hoo!");
};

// метод запуска анимации бездействия
Pers.prototype.idle = function() {
	console.log("nothing to do");
};

// метод вызова умных высказываний от персонажа
Pers.prototype.sayQuote = function() {
	var len = this.quotes.length;
	var rand = Math.floor(Math.random() * len);
	console.log(this.quotes[rand]);
};

// модифицированный унаследованный конструктор для двоичного персонажа
function PersBinary(numsys, name, imageSrc) {
  Pers.call(this, numsys, name);
  this.imageSrc = imageSrc;
};

// модифицированный унаследованный конструктор для восьмеричного персонажа
function PersOct(numsys, name, imageSrc) {
  Pers.call(this, numsys, name);
  this.imageSrc = imageSrc;
};

// модифицированный унаследованный конструктор для шестнадцатеричного персонажа
function PersHex(numsys, name, imageSrc) {
  Pers.call(this, numsys, name);
  this.imageSrc = imageSrc;
};

// Присваиваем каждому констуктору конструктор суперкласса
PersBinary.prototype = Object.create(Pers.prototype);
PersBinary.prototype.constructor = Pers;
PersOct.prototype = Object.create(Pers.prototype);
PersOct.prototype.constructor = Pers;
PersHex.prototype = Object.create(Pers.prototype);
PersHex.prototype.constructor = Pers;

// методы преобразования в 2, 8, 16-ую систему счисления из 10-ой
PersBinary.prototype.eval = function(number) {
	console.log(number.toString(this.numsys))
};

PersOct.prototype.eval = function(number) {
	console.log(number.toString(this.numsys))
};

PersHex.prototype.eval = function(number) {
	console.log(number.toString(this.numsys))
};

// Функция-конструктор для класса игрок
var Player = function (name, age, klass, gender) {
	this.name = name;
	this.age = age;
	this.klass = klass;
	this.gender = gender;
	this.lvl = 1;

};

// создаем объекты из классов Персонажей
var pers2 = new Pers(2, "Сабдвач");
var pers8 = new Pers(8, "Восьмач");
var pers16 = new Pers(16, "Шестач");

// для примера создаем объекты из классов наследников Персонажа
var persbin = new PersBinary(2, "Сабик", "img/2.png");
var persoct = new PersOct(8, "Восьмик", "img/8.png");
var pershex = new PersHex(16, "Шестик", "img/16.png");

// вызов метода преобразования из различных систем счисления
persbin.eval(15);
persoct.eval(15);
pershex.eval(15);

// pers2.sayQuote();