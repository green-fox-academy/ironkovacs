let xhr = new XMLHttpRequest();
xhr.onreadystatechange = (event) => {
  if (xhr.readyState === XMLHttpRequest.DONE) {

    const body = document.querySelector('body')
    JSON.parse(xhr.responseText).response.docs.forEach(e => {
      let div = document.createElement('div');
      console.log(e);
      div.innerHTML = `
        <h2 class="news">
          <a href="${e.web_url}">${e.headline.main}</a>
        </h2>
        <p class="snippet">${e.snippet}</p>
        <p class="date">${e.pub_date.substring(0,10)}</p>`

      body.appendChild(div);
    });
  }
}
xhr.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c3a6664f983d4815b47a5f7041576a52&q=apollo11&fq=moon', true);
xhr.send();
console.log('request sent');
