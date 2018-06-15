/* Задание 1
var admin, 
    name;
name = "Василий";
admin = name;
console.log(admin);*/



/* Задание 2
var a = prompt("Введите логин");
if (a == null){
    console.log(0);
} else if (a < 0){
    console.log("Значение меньше нуля");
} else if (a > 0){
    console.log("Значение больше нуля");
} else {
    console.log("Значение равно нулю");
}*/


/* Задание 3
var a = prompt("Введите логин");
if (a == null) {
    console.log("Вход отменен");
} else if (a == "admin"){
    var b = prompt("Введите пароль"); if (b == null){
        console.log("Вход отменен");
    } else if (b == 123321){
        console.log("Добро пожаловать!");
    } else {
        console.log("Пароль неверен");
    }
} else {
    console.log("Пользователь не найден");
}*/



/* Задание 4
var age = prompt("Введите Ваш возраст");
if (age >= 14&& age <=90) {
    console.log("Добро пожаловать");
} else {
    console.log("Доступ запрещен");
}*/



/* Задание 5
var i;
for (i = 2; i <= 10; i++) {
    if (i%2==0){
  console.log( i );
}
}*/



/* Задание 6
var i;

do {
  i = prompt("Введите число больше 100?", 0);
} while (i <= 100 && i != null);
*/


/* Задание 7
result = a + b < 4 ? "мало" : "много"*/




/* Задание 8
var i = 0
while ( i < 3) {
    alert( "номер " + i + "!" )
    i++;
}*/



/* Задание 9
var browser = prompt("Введите браузер");
if ( browser == "IE" ){
    alert( 'О, да у вас IE!' );
} else if ( browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera"){
alert( 'Да, и эти браузеры мы поддерживаем' );
} else {
 alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
*/


