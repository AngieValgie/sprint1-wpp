import { URL_USERS } from "../services/endpoints.js";
import postUser from "../services/postPeople.js";

const form = document.getElementById("form");
const phoneNumber = document.getElementById("phoneNumber").value;
const password = document.getElementById("password").value;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formElements = Object.values(form);
  const newUser = {};
  formElements.forEach((input) => {
    if (input.id) {
      newUser[input.id] = input.value;
    }
  });
  let noEmpty = true;
  for (const key in newUser) {
    const valueProperty = newUser[key];
    if (!valueProperty) {
      noEmpty = false;
      Swal.fire({
        title: `The field ${key} is not completed, please fill in!`,
      });
    } else {
      window.open("http://127.0.0.1:5500/chat/chat.html?");
    }
  }
  if (noEmpty) {
    await postUser(URL_USERS, newUser);
  }
});
