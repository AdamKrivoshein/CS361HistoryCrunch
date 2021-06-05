function generateHeader(table) {
    var headerRow = table.insertRow();

    //  Making the table header
    var nameTitle = headerRow.insertCell();
    var scoreTitle = headerRow.insertCell();
    var outOfTitle = headerRow.insertCell();
    var deleteTitle = headerRow.insertCell();

    nameTitle.innerHTML = "ID";
    scoreTitle.innerHTML = "Score";
    outOfTitle.innerHTML = "Out Of";
    deleteTitle.innerHTML = "Delete";

    //  Setting header classes for styling
    nameTitle.classList.add('tableTitle');
    scoreTitle.classList.add('tableTitle');
    outOfTitle.classList.add('tableTitle');
    deleteTitle.classList.add('tableTitle');
    nameTitle.classList.add('shadedRow');
    scoreTitle.classList.add('shadedRow');
    outOfTitle.classList.add('shadedRow');
    deleteTitle.classList.add('shadedRow');
}

function populateTable(data, counter) {
    Array.prototype.forEach.call(JSON.parse(data), line => {
        var newRow = table.insertRow();
        //  Looping through each line's items and adding them to the table
        for (const [key, val] of Object.entries(line)) {
            var cell = newRow.insertCell();
            cell.innerHTML = `${val}`;
            if (counter % 2 == 1)
                cell.classList.add('shadedRow');
        }

        //  Delete button setup
        let deleteButton = document.createElement("BUTTON");
        deleteButton.id = line.id;
        deleteButton.innerHTML = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.setAttribute('type', 'submit');
        //  Inserting the delete button
        let deleteCell = newRow.insertCell();
        deleteCell.appendChild(deleteButton);
        if (counter % 2 == 1)
            deleteCell.classList.add('shadedRow');
        counter++;
    })
}

function generateTable(table, data) {
    generateHeader(table);
        
    //Populate the table
    console.log(JSON.parse(data));
    if(data) {
        let counter = 2;
        populateTable(data, counter);
    }
}

// 2. Receiving Data and Processing
function reqListener () {
    let data = JSON.parse(xmlReq.responseText);
    console.log(xmlReq.responseText);
    console.log(data);

    console.log(data);

    generateTable(table, data);
}

// 1. Request Setup and Call
var xmlReq = new XMLHttpRequest();
xmlReq.addEventListener("load", reqListener);
xmlReq.open("GET", 'http://localhost:26678/scores');
xmlReq.send();

let table = document.querySelector("table");

//  Delete button listener
$('body').on('click', '.deleteButton', function () {
    console.log("Entering .deteleButton");
    console.log(Number(event.target.id));
    event.preventDefault();
    
    $.ajax({
        url: "/" + Number(event.target.id),
        type: "DELETE",
        success: function(){
        }
    });
});