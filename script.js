const numRadicals = 214;    
const maxStroke = 17;
const minRowSize = 6;
const maxRowSize = 16;

var radTable = document.getElementById("radicals-table");
var buttonArea = document.getElementById("buttons");
const buttonChart = document.getElementById("button-chart");
const buttonHistStroke = document.getElementById("button-histogram-stroke");
const buttonHistFreq = document.getElementById("button-histogram-frequency");
const buttonChunk = document.getElementById("button-chunk");
const radList = [];
// var tableType = chart;

/* Get the json file. */
const fetchRads = fetch('https://raw.githubusercontent.com/wordmunch/kangxiradicals_visualization/master/data.json');

fetchRads
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (let item of data) {
      radList.push(item);
    }
  })
  .catch((error) => {
    console.error(`Could not get radicals: ${error}`);
  })

/* Create button action for buttonChart */
buttonChart.addEventListener('click', () => {
  createRadicalsTable(radList);
});

/* Create divs for the number of strokes */
function createStrokeDivs() {
  for (let i = 1; i <= maxStroke; i++) {
    const strokeDiv = document.createElement("div");
    strokeDiv.className = "stroke-div";
    strokeDiv.id = "stroke-div-" + i;
    radTable.appendChild(strokeDiv);
  }
}

/* 
  Create and populate the radicals table. 
  TODO: add param: orderBy = character, frequenct, etc
  TODO: sort elements by chosen value
  */
function createRadicalsTable(obj) {
  for (let i = 0; i < numRadicals; i++) {
    const radDiv = document.createElement("div");
    const currentRad = obj[i];

    radDiv.className = "rad-div";
    radDiv.classList.add("rad-stroke-" + currentRad.strokeCount); /** Causes multiple divs of the same class to be created */
    radDiv.textContent = currentRad.character;

    radTable.appendChild(radDiv);
  }
}

function createStrokeHistogram(obj) {
  createStrokeDivs();
  let i = 1;
  // while (i <= maxStroke && )
  for (let i = 0; i < numRadicals; i++) {
    const radDiv = document.createElement("div");
  }
}


/** Add event listeners */
// buttonHistFreq.addEventListener("click", createStrokeHistogram());