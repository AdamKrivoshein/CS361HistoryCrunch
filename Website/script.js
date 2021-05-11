var fullName = "George Washington";
var dob = "2/22/1732";
var dod = "12/14/2799";
var summary = "George Washington (February 22, 1732[b] – December 14, 1799) was an American political leader, military general, statesman, and Founding Father who served as the first president of the United States from 1789 to 1797. Previously, he led Patriot forces to victory in the nation's War for Independence. He presided at the Constitutional Convention of 1787, which established the U.S. Constitution and a federal government. Washington has been called the 'Father of His Country' for his manifold leadership in the formative days of the new nation. ";

function populateDOB(fullName, dob, dod, summary) {
    document.getElementById("name").innerHTML = fullName;
    document.getElementById("dob").innerHTML = dob;
    document.getElementById("dod").innerHTML = dod;
    document.getElementById("summary").innerHTML = summary;
    //Temporary patch to demonstrate function and prevent immediate revert to old text.
    return false;
}

document.getElementById("people").onclick = function() {
    populateDOB(fullName, dob, dod, summary);
}

