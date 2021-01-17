// var characters = JSON.parse(data);

const numRadicals = 214;    // The number of Kangxi radicals.
const maxStroke = 17;       // The maximum number of strokes a radical can have.
const minRowSize = 6;
const maxRowSize = 16;

var radTable = document.getElementById("radicals-table");

/* Get the json file. */
let requestURL = "https://raw.githubusercontent.com/erntan/hanziradicals_visualization/master/data.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = "json";
request.send();


// request.onload = function () {
const charactersJSON = request.response;
const characters = JSON.parse(charactersJSON);
  // createRadicalsTable(charactersJSON);
const printThis = document.createElement("p");
printThis.textContent = characters;
radTable.appendChild(printThis);
// }

/* Need: rads["radicals"][i] */

/* Create and populate the radicals table. */
// function createRadicalsTable(obj) {
  // const radsJSON = charactersJSON["radicals"];

  for (let i = 0; i < numRadicals; i++) {
    const radDiv = document.createElement("div");
    radDiv.textContent = i;
    // radDiv.textContent = radsJSON[i].id;
    radTable.appendChild(radDiv);
  }
// }