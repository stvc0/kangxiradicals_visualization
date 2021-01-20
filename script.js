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

// var tableType = chart;

/* Get the json file. */
let requestURL = "https://raw.githubusercontent.com/erntan/kangxiradicals_visualization/master/data.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const charactersJSON = request.response;
  createRadicalsTable(charactersJSON);
}

/* Create divs for the number of strokes */
function createStrokeDivs() {
  for (let i = 1; i <= maxStroke; i++) {
    const strokeDiv = document.createElement("div");
    strokeDiv.className = "stroke-div";
    strokeDiv.id = "stroke-div-" + i;
    radTable.appendChild(strokeDiv);
  }
}

/* Create and populate the radicals table. */
function createRadicalsTable(obj) {
  const radsJSON = obj["radicals"];

  createStrokeDivs();

  for (let i = 0; i < numRadicals; i++) {
    const radDiv = document.createElement("div");
    const currentRad = radsJSON[i];
    
    radDiv.textContent = currentRad.character + currentRad.strokeCount;

    const strokeCount = currentRad.strokeCount;
    const strokeDiv = document.getElementById( "stroke-div-" + strokeCount);
    strokeDiv.appendChild(radDiv);
  }
}



function createStrokeHistogram() {

}


/** Add event listeners */
// buttonHistFreq.addEventListener("click", createStrokeHistogram());