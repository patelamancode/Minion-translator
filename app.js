// selectors
var inputtxt =document.querySelector("#input-txt")
var btntranslate =document.querySelector("#btn-translate")
var outputtxt =document.querySelector("output-txt")

// server handling
var serverurl = "https://api.funtranslations.com/translate/minion.json?text=Hello%2C%20I%20am%20hungry%21"


// btn functioning
btntranslate.addEventListener("click0",
function callback(){ 
    fetch(serverurl +"?text=" + inputtext.value) 
    .then(Response => Response.json())
    .then(json =>outputtext.innertext = json.contents.translated)
    
