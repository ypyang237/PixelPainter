'use strict';

var loadBtn = document.getElementById('loadBtn');
loadBtn.addEventListener('click', function(event) {
  loadImage();
});

function loadImage() {

var loadReq = new XMLHttpRequest();
  loadReq.addEventListener('load', function(data) {
    var mapToImage = JSON.parse(data.target.responseText);
    console.log(mapToImage)
  });
  loadReq.open("GET", "/image");
  loadReq.send();
}

