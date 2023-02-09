import { URL_USERS } from "../services/endpoints.js";
import postUser from "../services/postPeople.js";

console.log("zapa");
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
      //alert(`El campo ${key} no se encuentra diligenciado, por favor llénelo!`);
    }
  }
  if (noEmpty) {
    await postUser(URL_USERS, newUser);
  }
});
