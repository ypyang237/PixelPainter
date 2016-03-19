function pixelpainter() {

  var storecolor = null;

  document.getElementById('pink').addEventListener('click', function(){
     storecolor = 'pink';
  });
  document.getElementById('blue').addEventListener('click', function(){
     storecolor = 'blue';
  });
  document.getElementById('purple').addEventListener('click', function(){
     storecolor = 'purple';
  });
  document.getElementById('green').addEventListener('click', function(){
     storecolor = 'green';
  });

  document.getElementById('eraseBtn').addEventListener('click', function(){
     storecolor = 'white';
  });

  document.getElementById('clearBtn').addEventListener('click', clearAll);

  var changer = document.querySelectorAll('td');

  for(var i = 0; i < changer.length; i++) {
    changer[i].addEventListener('click', changeColor);
  }

  function changeColor(event) {
    this.className = '';
    this.className  = storecolor;
    }

  function clearAll(event) {
    for(var i = 0; i < changer.length; i++) {
      changer[i].className = '';
    }
  }

}

var pixelpainter = pixelpainter();