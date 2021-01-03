var characters = JSON.parse(data);

const numRadicals = 214;    // The number of Kangxi radicals.
const maxStroke = 17;       // The maximum number of strokes a radical can have.
const minRowSize = 6;
const maxRowSize = 16;

var radTable = document.getElementById("radicals-table");

/* Get the json file. */
let requestURL = "https://github.com/erntan/hsk/blob/master/data.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const characters = request.response;
  createRadicalsTable(characters);
}

/* Create and populate the radicals table. */
function createRadicalsTable(obj) {
  const rads = obj["radicals"];

  for (let i = 1; i <= numRadicals; i++) {
    var radDiv = document.createElement("div");
    // radDiv.textContent = rads[i];
    radDiv.textContent = i;
    radTable.appendChild(radDiv);
  }
// }
