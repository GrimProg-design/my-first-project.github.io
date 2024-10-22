const card = document.getElementById('card');
const corners = {
    topLeft: document.getElementById('top-left'),
    topRight: document.getElementById('top-right'),
    bottomLeft: document.getElementById('bottom-left'),
    bottomRight: document.getElementById('bottom-right'),
};

function tiltCard(xTilt, yTilt) {
    card.style.transform = `rotateX(${xTilt}deg) rotateY(${yTilt}deg)`;
}

corners.topLeft.addEventListener('mouseenter', () => tiltCard(5, -5));
corners.topRight.addEventListener('mouseenter', () => tiltCard(5, 5));
corners.bottomLeft.addEventListener('mouseenter', () => tiltCard(-5, -5));
corners.bottomRight.addEventListener('mouseenter', () => tiltCard(-5, 5));

card.addEventListener('mouseleave', () => tiltCard(0, 0));

document.getElementById('main-form').addEventListener("submit", chekform);

function chekform(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    var passwordRegex = /^(?!.*[!@#$%^&*()<>?/\\]).*$/;

    if (!emailRegex.test(email)) {
        alert("Email введен неверно (допустимые символы: a-z, A-Z, 0-9, ., _, %, +, -)");
    } else if (!passwordRegex.test(password)) {
        alert("Пароль содержит недопустимые символы (разрешены только буквы, цифры и пробелы)");
    } else if (password.length < 3) {
        alert("Пароль слишком короткий");
    } else {
        window.location.href = "index2.html";
    }
}
