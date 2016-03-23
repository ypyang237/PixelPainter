function pixelpainter() {

// Prompt
  var units = 0;

  function promptMachine() {

  var unitsPrompt = prompt('Would you like a small or large canvas? Please enter small or large.');
  unitsPrompt.toLowerCase();

  if (unitsPrompt === 'small') {
    document.getElementById('gridDiv').className = 'gridDivSmall';
    units = 256;
  }
  else if (unitsPrompt === 'large') {
   document.getElementById('gridDiv').className = 'gridDivLarge';
   units = 806;
  }
  else {
    alert('please enter either large or small.');
  }
}

promptMachine();

//pixelPainterRuns

  var colorArray = ['heart', 'pink', 'blue', 'purple', 'green', 'red', 'yellow', 'brown', 'black', 'white'];

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
  document.getElementById('heart').addEventListener('click', function(){
     storecolor = 'heart';
  });
  document.getElementById('star').addEventListener('click', function(){
     storecolor = 'star';
  });
  document.getElementById('circle').addEventListener('click', function(){
     storecolor = 'circle';
  });


  document.getElementById('eraseBtn').addEventListener('click', function(){
     storecolor = 'white';
  });

  document.getElementById('clearBtn').addEventListener('click', clearAll);

  //Make OuterDiv Element
  outerDiv = document.getElementById('gridDiv');

  //Create Little Divs


  function  createLittleDivs() {
    for(var i = 0; i < units; i++) {
      var newDiv = document.createElement('div');
      newDiv.className = 'empty white';
      outerDiv.appendChild(newDiv);
      // newDiv.addEventListener('mouseover', function(event) {
      //   newDiv.style.background = 'red';
      // });
    }
  }
  createLittleDivs();


    var keepGoing = false;
  function addEventListener() {
    console.log('keepGoing1',keepGoing);

    gridDiv.addEventListener('mousedown', function(event) {
      for (var i = 0; i < colorArray.length; i++) {
        if(event.target.classList.contains(colorArray[i])) {
          event.target.classList.remove(colorArray[i]);
          event.target.classList.add(storecolor);
        }
      } //END OF MOUSEDOWN ASSIGNCOLOR
      keepGoing = true;
      console.log('keepGoing2',keepGoing);
    }); //END OF MOUSEDOWN


    var allDivs = document.querySelectorAll('.empty');
    console.log('hello');



    document.getElementById('gridDiv').addEventListener('mouseover', function(event) {
      if(keepGoing === true) {
      event.target.style.background = 'red';
      }
    });

        document.getElementById('gridDiv').addEventListener('drag', function(event) {
          keepGoing = false;
    });

    if(keepGoing === false) {
      gridDiv.addEventListener('mouseup', function(event) {
      keepGoing = false;
      console.log('keepGoing4',keepGoing);
    });//END OF MOUSEUP
    }//END OF ELSEIF

  }//END OF ADDEVENTLISTENER FUNCTION

  addEventListener();


  divsToClear = document.querySelectorAll('.empty');

  function clearAll(event) {
    for(var i = 0; i < divsToClear.length; i++) {
      divsToClear[i].className = '';
      divsToClear[i].className = 'empty white';
    }
  }



}




var pixelpainter = pixelpainter();