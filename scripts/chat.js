import { URL_USERS } from "../services/endpoints.js";
import { getUser } from "../services/getPeople.js";

/* const userName = document.getElementById("userName").value;
const phoneNumber = document.getElementById("phoneNumber").value;
const password = document.getElementById("password").value;
const userPhoto = document.getElementById("userPhoto").value;
const inputSearch = document.getElementById("inputSearch"); */
const chatList = document.getElementById("chatList");

export const renderContacts = async (pHOne) => {
  const { data } = await getUser(URL_USERS);
  console.log(chatList);
  chatList.innerHTML = "";
  data.forEach((element) => {
    if (element.phoneNumber !== pHOne) {
      chatList.innerHTML = `
            <li>
              <div class="chatList__element">
                <figure>
                  <img
                    class="imgPerson"
                    src="${element.userPhoto}"
                    alt=""
                  />
                </figure>
                <div class="chatList__info">
                  <div class="chatList__text">
                    <h4 class="chatList__name">${element.userName}</h4>
                    <p class="chatList__date">viernes</p>
                  </div>
                  <p class="chatList__message">${element.userPhrase}</p>
                </div>
              </div>
            </li>
      `;
    }
  });
};
