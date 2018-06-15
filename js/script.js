var a = parseInt(prompt('Введите номер задания от 1 до 9'));

switch (a) {
  case 1: exercise1();
  break;
  case 2: exercise2();
  break;
  case 3: exercise3();
  break;
  case 4: exercise4();
  break;
  case 5: exercise5();
  break;
  case 6: exercise6();
  break;
  case 7: exercise7();
  break;
  case 8: exercise8();
  break;
  case 9: exercise9();
  break;
  default: console.log("Введите корректный номер задания");
}

// Задание 1
function exercise1() {
  var admin,
      name;
  name = "Василий";
  admin = name;
  console.log(admin);
}
// Задание 2
function exercise2() {
  var a = prompt("Введите логин");
  if (a == null){
    console.log(0);
  } else if (a < 0){
    console.log("Значение меньше нуля");
  } else if (a > 0){
    console.log("Значение больше нуля");
  } else {
    console.log("Значение равно нулю");
  }
}
// Задание 3
function exercise3() {
  var a = prompt("Введите логин");
  if (a == null) {
    console.log("Вход отменен");
  } else if (a == "admin"){
    var b = prompt("Введите пароль");
      if (b == null){
        console.log("Вход отменен");
      } else if (b == 123321){
        console.log("Добро пожаловать!");
    } else {
        console.log("Пароль неверен");
    }
  } else {
    console.log("Пользователь не найден");
  }
}
// Задание 4
function exercise4() {
  var age = prompt("Введите Ваш возраст");
  if (age >= 14&& age <=90) {
    console.log("Добро пожаловать");
  } else {
    console.log("Доступ запрещен");
  }
}
// Задание 5
function exercise5() {
  var i;
  for (i = 2; i <= 10; i++) {
    if (i%2==0){
      console.log( i );
    }
  }
}
// Задание 6
function exercise6() {
  var i;
  do {
    i = prompt("Введите число больше 100?", 0);
  } while (i <= 100 && i != null);
  console.log('Отлично!')
}
 // Задание 7
function exercise7() {
  var a = parseInt(prompt('Введите значение a:'));
  var b = parseInt(prompt('Введите значение b:'));
  var result = ((a + b) < 4) ? "мало" : "много";
  console.log(result);
}
// Задание 8
function exercise8() {
  var i = 0;
  while ( i < 3) {
    alert( "номер " + i + "!" );
    i++;
  }
}
// Задание 9
function exercise9() {
  var browser = prompt("Введите браузер");
  if ( browser == "IE" ){
    alert( 'О, да у вас IE!' );
  } else if ( browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera"){
    alert( 'Да, и эти браузеры мы поддерживаем' );
  } else {
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
  }
}
