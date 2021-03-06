'use strict';

var saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', function(event) {
  saveImage();
});

function saveImage() {
  var allDivs = document.querySelectorAll('.empty');
  var divStates = {};
  var targetDiv;
  var targetDivColor;
  var name = document.getElementById('saveInput').value;

  Array.prototype.forEach.call(allDivs, function(element) {
      targetDiv = element.id;
      targetDivColor = element.style.background;
      divStates[targetDiv] = targetDivColor;
  });
  var saveReq = new XMLHttpRequest();
  saveReq.addEventListener('load', function(data) {
    console.log(data); //data is 'successPost'
  })
  saveReq.open("POST", "/image");
  saveReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  saveReq.send("imageState=" + JSON.stringify(divStates) + "&name=" + name);

}