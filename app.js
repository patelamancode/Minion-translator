// selectors
var inputTxt =document.querySelector("#input-txt")
var btnTranslate =document.querySelector("#btn-translate")
var outputTxt =document.querySelector("#output-txt")

// server handling
var serverURL = "https://api.funtranslations.com/translate/minion.json?text="


// btn functioning
btnTranslate.addEventListener("click", function translate(){
    fetch (serverURL + inputTxt.value)
    .then(res => res.json())
    .then(json => outputTxt.innerText = json.contents.translated)
})