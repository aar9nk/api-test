const form = document.querySelector("#form");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const createHtml = (profileLink, imageSource) => {
  return `
    <a target="_blank" href="${profileLink}">Link to the profile</a>
    <img src="${imageSource}" alt="cool dude" />
  `;
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = input.value;
  const serverResponse = await getData(
    "https://api.github.com/search/users?q=" + username
  );
  list.innerHTML = +createHtml(
    serverResponse.items[0].html_url,
    serverResponse.items[0].avatar_url
  );
});
