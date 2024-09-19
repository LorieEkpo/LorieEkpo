//planning on adding json file for language options
//currently using set values for each variable

let navHome = "Hem";
let navAbout = "Om mig";
let navSkills = "Färdigheter";
let navProjects = "Projekt";
let title = "Mjukvaruutvecklare";
let welcomeText = "Välkommen till mitt projektportfolio";
let aboutHeader = "Om mig";
let aboutText = "Här är en text om mig";
let skillHeader = "Färdigheter";
/* for future variable skill list
let skillList = [
        "Färdighet", 
        "Färdighet",
        "Färdighet", 
        "Färdighet"
    ];
*/
let projectHeader = "Projekt";
let projectText = "Här är mina projekt";

//displays variables as text
function displayText() {
    document.getElementById("navHome").innerHTML = navHome;
    document.getElementById("navAbout").innerHTML = navAbout;
    document.getElementById("navSkills").innerHTML = navSkills;
    document.getElementById("navProjects").innerHTML = navProjects;
    document.getElementById("title").innerHTML = title;
    document.getElementById("welcomeText").innerHTML = welcomeText;
    document.getElementById("aboutHeader").innerHTML = aboutHeader;
    document.getElementById("aboutText").innerHTML = aboutText;
    document.getElementById("skillHeader").innerHTML = skillHeader;
    //document.getElementById("skills").innerHTML =
    document.getElementById("projectHeader").innerHTML = projectHeader;
    document.getElementById("projectText").innerHTML = projectText;
}

/*
//function for choosing language

function setLanguage(){
    if (document.documentElement.lang === "en"){
        //add code for english translate
    }
    else{
        //add code for swedish language
    }
}
*/

//add fetch to get skills array and create skills array
