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

  document.getElementById('red').addEventListener('click', function(){
     storecolor = 'red';
  });
  document.getElementById('yellow').addEventListener('click', function(){
     storecolor = 'yellow';
  });
  document.getElementById('brown').addEventListener('click', function(){
     storecolor = 'brown';
  });
  document.getElementById('black').addEventListener('click', function(){
     storecolor = 'black';
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
  //Make OuterDiv Element
  outerDiv = document.getElementById('gridDiv')

  //Create Little Divs
    var units = 20;

  function  createLittleDivs() {
      for (var i = 0; i < units; i++) {
    var newDiv = document.createElement('div');
        newDiv.className = 'pink';
        newDiv.addEventListener('click', changeColor);
        outerDiv.appendChild(newDiv)
    }
  }
return createLittleDivs();

}

var pixelpainter = pixelpainter();