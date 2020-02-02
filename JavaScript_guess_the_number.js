function getRandom() {
    return Math.floor(Math.random() * 100);
}
let number = getRandom();
let userNumber = Number(prompt("введите число от 0 до 100"));



while (number != userNumber) {
if (number > userNumber) {
    alert("ваше число меньше загаданного!");
    } else {
        alert('ваше число больше загаданного!');
    }
    userNumber = prompt("введите число от 0 до 100");
}
alert("поздравляю, вы угадали!");
