'use strict';

var loadBtn = document.getElementById('loadBtn');
loadBtn.addEventListener('click', function(event) {
  loadImage();
});

function loadImage() {



var loadReq = new XMLHttpRequest();
  loadReq.addEventListener('load', function(data) {
    var mapToImage = JSON.parse(data.target.responseText);
    var imageInstructions = JSON.parse(mapToImage.imageState);
    for(var i in imageInstructions) {
      document.getElementById(i).style.background = imageInstructions[i];
    }
  });
  loadReq.open("GET", "/image");
  loadReq.send();
}

