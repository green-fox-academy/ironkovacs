
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = (event) => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    let ulGif = document.getElementById('gif')
    JSON.parse(xhr.responseText).data.forEach(e => {
      let li = document.createElement('li');
      console.log(e);
      console.log(`<img src="${e.images.fixed_width.url}">`);
      li.innerHTML = `<a href="${e.url}/fullscreen"> <img src="${e.images.fixed_width_still.url}"> </a>`;
      ulGif.appendChild(li);
    });
    
  }
}
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=Z9QiRk4GYMrYdy1JsIVTjj8AXjQY9yO7&q=stormtrooper&limit=16&offset=0&rating=R&lang=en', true);
xhr.send();
console.log('request sent');

// POST    INSERT   CREATE
// GET     SELECT   READ
// PUT     UPDATE   UPDATE
// DELETE  DELETE   DELETE

// POST   funny-domain.com/products       req-body: teljes dokumentum (id is missing)    res-body:  new product (or rather none)
// GET    funny-domain.com/products       req-body: none                                 res-body:  list of products
// GET    funny-domain.com/products/12    req-body: none                                 res-body:  product with id:12
// PUT    funny-domain.com/products/12    req-body: teljes dokumentum                    res-body:  updated product (or rather none)
// DELETE funny-domain.com/products/12    req-body: teljes dokumentum                    res-body:  none
