let objects = [];

fetch('veriler.txt')
  .then(response => response.text())
  .then(data => {
    // Verileri parçalayın
    const lines = data.split('\n');

    objects = lines.map(line => {
      const [ad, içerik, firma, küb, kt] = line.split('$');
      return { ad, içerik, firma, küb, kt };
    });

    console.log(objects); // Her satır bir obje içeren bir dizi
    console.log(objects[0].ad);
  })
  .catch(error => {
    console.error(error);
  });

let row = document.querySelector(".row");
let search;
let searchBtn = document.querySelector(".searchBtn");

setTimeout(() => {
  for (let i = 0; i < objects.length; i++) {
    let card = `        <div class="column">\n          <div class="card">\n            <div class="slider">\n              <div class="img-box">\n                <img src="img/Ventolin/antiyobik.png" class="slider-img">\n                <button class="btn prev" onclick="prev()"><i class="fa-solid fa-chevron-left"></i></button>\n                <button class="btn next" onclick="next()"><i class="fa-solid fa-chevron-right"></i></button>\n              </div>\n            </div>\n            <h3>${objects[i].ad}</h3>\n            <div class="buttons">\n              <a href="./video.html">VİDEO <i class="fa-solid fa-film"></i></a>\n              <a href="#">DETAYLI BİLGİ <i class="fa-regular fa-file-pdf"></i></a>\n              <a href="${objects[i].kt}" target="_blank">KULLANIM TALİMATI <i class="fa-regular fa-file-pdf"></i></a>\n              <a href="${objects[i].küb}" target="_blank">KÜB <i class="fa-regular fa-file-pdf"></i></a>\n            </div>\n            <div class="info">\n              <p>Firma: <b>${objects[i].firma}</b></p>\n              <p>Etkin Madde: <b>${objects[i].içerik}</b><p>\n            </div>\n          </div>\n        </div>`
    row.innerHTML = row.innerHTML + card;
  }
}, 900);

function filterProducts() {
  
  var searchQuery = document.querySelector('#searchbar').value.toLowerCase();
  
  objects.forEach(function(object) {
    var productName = object.ad.toLowerCase();
    let card = `        <div class="column">\n          <div class="card">\n            <div class="slider">\n              <div class="img-box">\n                <img src="img/Ventolin/antiyobik.png" class="slider-img">\n                <button class="btn prev" onclick="prev()"><i class="fa-solid fa-chevron-left"></i></button>\n                <button class="btn next" onclick="next()"><i class="fa-solid fa-chevron-right"></i></button>\n              </div>\n            </div>\n            <h3>${object.ad}</h3>\n            <div class="buttons">\n              <a href="./video.html">VİDEO <i class="fa-solid fa-film"></i></a>\n              <a href="#">DETAYLI BİLGİ <i class="fa-regular fa-file-pdf"></i></a>\n              <a href="${objects[i].kt}" target="_blank">KULLANIM TALİMATI <i class="fa-regular fa-file-pdf"></i></a>\n              <a href="${object.küb}" target="_blank">KÜB <i class="fa-regular fa-file-pdf"></i></a>\n            </div>\n            <div class="info">\n              <p>Firma: <b>${objects[i].firma}</b></p>\n              <p>Etkin Madde: <b>${object.içerik}</b><p>\n            </div>\n          </div>\n        </div>`

    if (productName.indexOf(searchQuery) !== -1) {
      row.innerHTML = row.innerHTML + card;
    }
  });
}

document.querySelector('#searchbar').addEventListener('input', function(){
  row.innerHTML = "";
  filterProducts();
});
