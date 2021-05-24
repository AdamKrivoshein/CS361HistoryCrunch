// var fullName = "George Washington";
// var dob = "2/22/1732";
// var dod = "12/14/2799";
// var summary = "George Washington (February 22, 1732[b] – December 14, 1799) was an American political leader, military general, statesman, and Founding Father who served as the first president of the United States from 1789 to 1797. Previously, he led Patriot forces to victory in the nation's War for Independence. He presided at the Constitutional Convention of 1787, which established the U.S. Constitution and a federal government. Washington has been called the 'Father of His Country' for his manifold leadership in the formative days of the new nation. ";

// function populateDOB(fullName, dob, dod, summary) {
//     document.getElementById("name").innerHTML = fullName;
//     document.getElementById("dob").innerHTML = dob;
//     document.getElementById("dod").innerHTML = dod;
//     document.getElementById("summary").innerHTML = summary;
//     //Temporary patch to demonstrate function and prevent immediate revert to old text.
//     return false;
// }

// document.getElementById("people").onclick = function() {
//     populateDOB(fullName, dob, dod, summary);
// }

let scores = [
    { name: "Monte Falco", score: 1658,},
    { name: "Monte Falterona", score: 1654,},
    { name: "Poggio Scali", score: 1520,},
    { name: "Pratomagno", score: 1592,},
    { name: "Monte Amiata", score: 1738}
];

function generateTable(table) {
    scores.forEach(function (line) {
        var newRow = table.insertRow();     //Object.keys(line).length
        // Might need sorting here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        for (const [key, val] of Object.entries(line)) {
            var cell = newRow.insertCell();
            cell.innerHTML = `${val}`;
            //console.log(`${key}: ${val}`);
        }
    })
}
//var test = document.createElement("div");

// 2. Receiving Data and Processing
function reqListener () {
    //test = this.responseText;
    let data = JSON.parse(xmlReq.responseText);
    console.log(data);

    var newRow2 = table.insertRow();
    for (var i = 0; i < data.length; i++) {
        var cell2 = newRow2.insertCell();
        cell2.innerHTML = data[i];
    }

    //let dataPiece = data.personName;
    //test.textContent = dataPiece;
}

// 1. Request Setup and Call
var xmlReq = new XMLHttpRequest();
xmlReq.addEventListener("load", reqListener);
xmlReq.open("GET", "http://flip3.engr.oregonstate.edu:17832/Person?name=George_Washington");
xmlReq.send();

let table = document.querySelector("table");
generateTable(table);

//console.log("Test = ", test);