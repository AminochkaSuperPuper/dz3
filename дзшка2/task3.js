/*
Задача 3: Определение чётности
Напишите программу, которая проверяет, является ли введённое число чётным или нечётным, и выводит соответствующее сообщение.
Пример ввода и вывода:
Введите число: 7
Это нечётное число
*/

let num = parseInt(prompt("Введите число"))

if (num % 2 === 0) {
    alert("Это чётное число")
} else {
    alert("Это нечётное число")
}