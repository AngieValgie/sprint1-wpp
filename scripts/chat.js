console.log("chat");
const form = document.getElementById("form");
const userName = document.getElementById("userName").value;
const phoneNumber = document.getElementById("phoneNumber").value;
const password = document.getElementById("password").value;
const userPhoto = document.getElementById("userPhoto").value;
const button__signUp = document.getElementById("button__signUp");

search.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputSearch = document.getElementById("inputSearch");
  const searchTerm = inputSearch.value;
  if (searchTerm) {
    getPokemons(URL_API, searchTerm);
  }
});
