let button = document.getElementById("button");
console.log(button.src);
let xhr = new XMLHttpRequest();
let chuckJokes = document.getElementById("chuck-jokes");

button.addEventListener("click", function () {
  xhr.onreadystatechange = (event) => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      button.setAttribute('src', JSON.parse(xhr.responseText).data.images.fixed_width.url);
    };
  }
  xhr.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=Z9QiRk4GYMrYdy1JsIVTjj8AXjQY9yO7&tag=chuck-norris&rating=G', true);
  xhr.send();
  console.log('request sent');

  let url = 'http://api.icndb.com/jokes/random'

  fetch(url)
    .then((response) => response.json())
    .then((myJson) => chuckJokes.innerHTML = `${chuckJokes.innerHTML}  <p>${myJson.value.joke}</p>`)
});
