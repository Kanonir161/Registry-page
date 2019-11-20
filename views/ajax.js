document.getElementById("sign-in").addEventListener("click", function (e) {
    e.preventDefault();

    let registerForm = document.forms["enter"];
    let email = registerForm.elements["email"].value;
    let password = registerForm.elements["password"].value;

    let user = JSON.stringify({ email: email, password: password });
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        let message = document.getElementById("message")
        if (request.status == 404) {
            message.innerHTML = "Неверный логин или пароль"
        }
    }
    request.open("POST", "/enter", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function () {
        let receivedUser = JSON.parse(request.response);
        console.log(receivedUser.email, "-", receivedUser.password);   // смотрим ответ сервера
    });
    request.send(user);
});

document.getElementById("sign-in").addEventListener("click", function () {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        let message = document.getElementById("message")
        if (request.status == 404) {
            message.innerHTML = "Неверный логин или пароль"
        }
        else if (request.status = 200) {
            alert("Регистрация успешно пройдена")
        }
    }
})



