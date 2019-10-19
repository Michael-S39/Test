'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let statja = prompt("Введите обязательную статью расходов в этом месяце", "");
let summa = prompt("Во сколько обойдется?", "");

let statjaT = prompt("Введите обязательную статью расходов в этом месяце", "");
let summaT = prompt("Во сколько обойдется?", "");

let appData = {бюджет: money, timeData: time, expenses: {"ответ на первый вопрос": summa, 
"ответ на второй вопрос": summaT}, optionalExpenses: {}, income: [], savings: false};

alert(appData["бюджет"] / 30);
