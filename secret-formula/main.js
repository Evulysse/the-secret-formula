// Part One
const greetForm = document.querySelector("#greet");

function greetUser() {
    const userName = greetForm.firstElementChild.value;

    alert(`Hello, ${userName}!`);
}

greetForm.addEventListener("submit", greetUser);

// Part Two
const sandwichForm = document.querySelector("#sandwich");
const ingredients = sandwichForm.querySelectorAll("div p input[type='checkbox']");

function showIngredientsUsed() {
    let ingredientsUsed = "";

    for(const ingredient of ingredients) {
        if(ingredient.checked) {
            ingredientsUsed += `${ingredient.name}, `;
        }
    }

    alert(`Your sandwich contains: ${ingredientsUsed}.`);
}

sandwichForm.addEventListener("submit", showIngredientsUsed);

//  Part Three

const haircutForm = document.querySelector("#haircutForm");
const haircutDate = document.querySelector("#haircutDate");
const haircutter = document.querySelector("#haircutter");
const longHair = document.querySelector("#longHair");
const shortHair = document.querySelector("#shortHair");

haircutForm.addEventListener('submit',function (event) {
 event.preventDefault();

 let str =
 "Haircut scheduled for " + haircutDate.value + " " + "with " + haircutter.value + " " + "for " ;

 if (longHair.checked) {
    str += "long hair.";
 } else if (shortHair.checked) {
    str += "short hair.";
 }
 alert (str);

});

// Part Four

const newAccount  = document.querySelector("#newAccount");
const username = document.querySelector("#username");
const emailAddress = document.querySelector("#emailAddress");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

function createNewAccount() {

    alert(`Your account information is: `)
}
newAccount.addEventListener("submit", createNewAccount);