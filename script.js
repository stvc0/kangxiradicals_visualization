const numRadicals = 214;    
const maxStroke = 17;
const minRowSize = 6;
const maxRowSize = 16;

var radTable = document.getElementById("radicals-table");
var buttonArea = document.getElementById("buttons");

var tableType = chart;

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

/* Create and populate the radicals table. */
function createRadicalsTable(obj) {
  const radsJSON = obj["radicals"];

  for (let i = 0; i < numRadicals; i++) {
    const radDiv = document.createElement("div");
    radDiv.textContent = radsJSON[i].character;
    radTable.appendChild(radDiv);
  }
}
