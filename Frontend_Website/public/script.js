// const { del } = require("request");

//const { del } = require("request");

let scores = [
    { name: "Adam", score: 1658,},
    { name: "Carlos", score: 1654,},
    { name: "Bobby", score: 1520,},
    { name: "Tyler", score: 1592,},
    { name: "Russell", score: 1738}
];

function generateTable(table, data) {
    var headerRow = table.insertRow();
    //Making the table header
    var nameTitle = headerRow.insertCell();
    var scoreTitle = headerRow.insertCell();
    var outOfTitle = headerRow.insertCell();
    nameTitle.innerHTML = "ID";
    scoreTitle.innerHTML = "Score";
    outOfTitle.innerHTML = "Out Of";
        
    //Populate the table
    console.log(JSON.parse(data));
    if(data) {

        Array.prototype.forEach.call(JSON.parse(data), line => {
            var newRow = table.insertRow();     //Object.keys(line).length
            //  Looping through each line's items and adding them to the table
            for (const [key, val] of Object.entries(line)) {
                var cell = newRow.insertCell();
                cell.innerHTML = `${val}`;
            }

            //  Delete button setup
            let deleteButton = document.createElement("BUTTON");
            deleteButton.innerHTML = 'Delete';
            deleteButton.id = line.id;
            deleteButton.classList.add('deleteButton');
            deleteButton.setAttribute('type', 'submit');
            //  Inserting the delete button
            let deleteCell = newRow.insertCell();
            deleteCell.appendChild(deleteButton);
        })
        // data.forEach(function (line) {
        //     console.log(line);
        //     var newRow = table.insertRow();     //Object.keys(line).length
        //     // Might need sorting here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        //     for (const [key, val] of Object.entries(line)) {
        //         var cell = newRow.insertCell();
        //         cell.innerHTML = `${val}`;
        //     }
        // })
    }
}

// 2. Receiving Data and Processing
function reqListener () {
    //test = this.responseText;
    let data = JSON.parse(xmlReq.responseText);
    console.log(xmlReq.responseText);
    console.log(data);
    // console.log(JSON.parse(data));

    //Editing data
    // let parsedData = data.split(/","|"]/);
    console.log(data);

    generateTable(table, data);

    // var newRow2 = table.insertRow();

    // for (var i = 0; i < data.length; i++) {
    //     var cell2 = newRow2.insertCell();
    //     cell2.innerHTML = data[i];
    // }
}

// 1. Request Setup and Call
var xmlReq = new XMLHttpRequest();
xmlReq.addEventListener("load", reqListener);
xmlReq.open("GET", 'http://localhost:26678/scores');    //  "http://flip3.engr.oregonstate.edu:17832/Person?name=George_Washington");
xmlReq.send();

let table = document.querySelector("table");
// generateTable(table);

//  Delete button listener
$('body').on('click', '.deleteButton', function () {
    console.log("Entering .deteleButton");
    console.log(Number(event.target.id));
    event.preventDefault();
    
    $.ajax({
        url: "/" + Number(event.target.id),
        type: "DELETE",
        success: function(){
            //makeRows(rows);
        }
    });

    //location.reload();
});

// $(".deleteButton").click(function( event ) {
//     console.log("Entering .deteleButton");
//     console.log(Number(event.target.id));
//     event.preventDefault();
    
//     $.ajax({
//         url: "/" + Number(event.target.id),
//         type: "DELETE",
//         success: function(){
//             //makeRows(rows);
//         }
//     });
// });