



const myForm = document.querySelector("form");
const email = document.querySelector("input[name='email']");
const emailR = document.querySelector("input[name='emailR']");
const password = document.querySelector("input[name='password']");
const passwordR = document.querySelector("input[name='passwordR']");
const nameInput = document.querySelector("input[name='name']");
const phone = document.querySelector("input[name='phone']");
const city = document.querySelector("input[name='city']");
const select = document.querySelector("select[name='select']");
const gender = document.querySelectorAll("input[name='gender']");
const checkbox = document.querySelector("input[name='checkbox']");
const btn = document.querySelector("button");



function checkEmptyInput(input) {
    if (input.value == "" || input.value == null) {
        input.previousElementSibling.classList.add("red");
    } else {
        input.previousElementSibling.classList.remove("red");
    }
}

function checkSimilarity(firstInput, secondInput) {
    if (firstInput.value != secondInput.value) {
        secondInput.previousElementSibling.classList.add("red");
    }
    else {
        secondInput.previousElementSibling.classList.remove("red");
    }
}

function checkSelectBox(select) {
    if (select.value == "choose") {
        select.previousElementSibling.classList.add("red");
    } else {
        select.previousElementSibling.classList.remove("red");
    }
}

var yoxlama = false;

function checkRadio(radioInput) {
    radioInput.forEach((element) => {
        if (element.checked == true) {
            yoxlama = true
        }

        if (yoxlama == false) {
            element.parentElement.firstElementChild.classList.add("red");
        } else {
            element.parentElement.firstElementChild.classList.remove("red");
        }

    });
}

function Agree() {
    if (this.checked) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", true);
    }
}


myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    checkEmptyInput(email);
    checkEmptyInput(emailR);
    checkEmptyInput(password);
    checkEmptyInput(passwordR);
    checkEmptyInput(nameInput);
    checkEmptyInput(phone);
    checkEmptyInput(city);
    checkRadio(gender);
    checkSelectBox(select)
    checkSimilarity(password,passwordR)
    checkSimilarity(email,emailR)
})

checkbox.addEventListener('click', Agree);