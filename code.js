let rows = 24;
let cols = 24;
let playing = false;





document.addEventListener("DOMContentLoaded", function() {
    setupControlButtons();
    createTable();
    
})
// initialize


// lay out the board
function createTable() {
    let gridContainer = document.querySelector("#gridContainer");
    if (!gridContainer) {
        // throw error
        console.error("Problem: no div for the grid table!");
    }
    let table = document.createElement("table"); 

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            cell.onclick = cellClickHandler;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
};


function cellClickHandler() {
    let classes = this.getAttribute('class');
    if (classes.indexOf('live') > -1) {
      this.setAttribute('class', 'dead');
    } else {
      this.setAttribute('class', 'live');
    }
  };
  

  function setupControlButtons() {
    let startButton = document.querySelector('#start');
    let clearButton = document.querySelector('#clear');
    startButton.onclick = () => {
        if (playing) {
            console.log('Pause the Game');
            playing = false;
            startButton.innerHTML = 'continue';
          } else {
            console.log('Cont the game');
            playing = true;
            startButton.innerHTML = 'pause';
            play();
          }
    };
    clearButton.onclick = function() {
        playing = false;
        startButton.innerHTML = "start";
    };
  };

  function play() {
    console.log("Play the game")
};



    
// start everything
