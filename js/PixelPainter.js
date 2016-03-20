function pixelpainter() {

  var colorArray = ['pink', 'blue', 'purple', 'green', 'red', 'yellow', 'brown', 'black', 'white'];

  var classToRemove = null;

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

  //Make OuterDiv Element
  outerDiv = document.getElementById('gridDiv');

  //Create Little Divs
    var units = document.getElementById('prompt').innerHTML;

  function  createLittleDivs() {
    for(var i = 0; i < units; i++) {
      var newDiv = document.createElement('div');
      newDiv.className = 'empty white';
      newDiv.addEventListener('click', function(event) {
        for (var i = 0; i < colorArray.length; i++) {
          if(this.classList.contains(colorArray[i])) {
            this.classList.remove(colorArray[i]);
            this.classList.add(storecolor);
          }
        }
      });
      outerDiv.appendChild(newDiv);
    }
  }
  createLittleDivs();

  divsToClear = document.querySelectorAll('.empty');

  function clearAll(event) {
    for(var i = 0; i < divsToClear.length; i++) {
      divsToClear[i].className = '';
      divsToClear[i].className = 'empty white'
    }
  }


}
var unitsPrompt = prompt('How many units?');
Number(unitsPrompt);

if (unitsPrompt > 806) {
  document.getElementById('prompt').innerHTML = 806;
}
else {
  document.getElementById('prompt').innerHTML = unitsPrompt;
}

var pixelpainter = pixelpainter();