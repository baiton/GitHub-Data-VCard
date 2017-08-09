let htmlBod = document.querySelector("body");
let myStats = [];


let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/baiton");
req.addEventListener("load", reqListener);
req.send();

function reqListener(){
  let data = JSON.parse(this.responseText);

console.log(data);
    function myGithub(data) {
      let profile =
    `<header class="container title">
      <h1>${data.name}</h1>
    </header>
    <main class="wrapper zigzag">
      <section id="left">
        <h2>The Basics</h2>
        <ul>
          <li><p>Name: </p>${data.name}</li>
          <li><p>GitHub URL: </p><a href="${data.html_url}">${data.html_url}</a></li>
          <li><p>Email: </p>${data.email}</li>
          <li><p>Company: </p>${data.company}</li>
          <li><a href=${data.blog}>${data.blog}</a></li>
        </ul>
      </section>
      <section id="middle">
        <h2>The Story</h2>
        <p>${data.bio}</p>
      </section>
      <img src="${data.avatar_url}" alt"My Profile Pic">
    </main>`;

      return (profile);
    }
let addToHtml = myGithub(data)


htmlBod.innerHTML = addToHtml;
// let myPromise = new Promise(function (resolve, reject){
}
