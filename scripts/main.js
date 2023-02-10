import { URL_USERS } from "../services/endpoints.js";
import { getUser } from "../services/getPeople.js";

const form = document.getElementById("form");
export const phoneNumber = document.getElementById("phoneNumber");
export const password = document.getElementById("password");
const userStorage = JSON.parse(localStorage.getItem("UserStorage")) || [];
let userAcount = {};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const infoUser = await getUser(URL_USERS);
  infoUser.forEach((user) => {
    if (
      user.phoneNumber == phoneNumber.value &&
      user.password == password.value
    ) {
      Swal.fire({
        title: `Welcome ${user.userName}`,
      });
      userAcount = {
        Number: phoneNumber.value,
        Password: password.value,
      };
      userStorage.push(userAcount);
      localStorage.setItem("UserStorage", JSON.stringify(userStorage));
      console.log(userStorage);
      window.open("http://127.0.0.1:5500/chat/chat.html?");
    }
  });
});
export { userAcount };
