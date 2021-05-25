let scores = [
    { name: "Adam", score: 1658,},
    { name: "Carlos", score: 1654,},
    { name: "Bobby", score: 1520,},
    { name: "Tyler", score: 1592,},
    { name: "Russell", score: 1738}
];

function generateTable(table) {
    var headerRow = table.insertRow();
    //Making the table header
    var nameTitle = headerRow.insertCell();
    var scoreTitle = headerRow.insertCell();
    nameTitle.innerHTML = "Name";
    scoreTitle.innerHTML = "Score";
    //Populate the table
    scores.forEach(function (line) {
        var newRow = table.insertRow();     //Object.keys(line).length
        // Might need sorting here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        for (const [key, val] of Object.entries(line)) {
            var cell = newRow.insertCell();
            cell.innerHTML = `${val}`;
        }
    })
}

// 2. Receiving Data and Processing
function reqListener () {
    //test = this.responseText;
    let data = JSON.parse(xmlReq.responseText);
    console.log(xmlReq.responseText);
    console.log(data);
    console.log(JSON.parse(data));

    //Editing data
    // let parsedData = data.split(/","|"]/);
    let parsedData = JSON.parse(data);
    console.log(parsedData);

    var newRow2 = table.insertRow();

    for (var i = 0; i < parsedData.length; i++) {
        var cell2 = newRow2.insertCell();
        cell2.innerHTML = parsedData[i];
    }
}

// 1. Request Setup and Call
var xmlReq = new XMLHttpRequest();
xmlReq.addEventListener("load", reqListener);
xmlReq.open("GET", "http://flip3.engr.oregonstate.edu:17832/Person?name=George_Washington");
xmlReq.send();

let table = document.querySelector("table");
generateTable(table);

//console.log("Test = ", test);