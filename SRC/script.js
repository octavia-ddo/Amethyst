function order() {
  let name = prompt("What is your name?");
  let email = prompt("What is yout email?");
  let crystal = prompt("What's you favorite crystal?");

  alert(
    "Thank you " +
      name +
      "! We'll be in touch, meanwhile keep your " +
      crystal +
      " with you! "
  );
}

let orderButton = document.querySelector(".order-button");
orderButton.addEventListener("click", order);
