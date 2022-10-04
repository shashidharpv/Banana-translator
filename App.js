var inputText = document.querySelector("#input-textarea");
// console.log(inputText.value)
var btnTranslate = document.querySelector("#click");

var outputText = document.querySelector("#output-textarea");

const url = "https://api.funtranslations.com/translate/minion.json";

function clickHandler(){
    console.log("clicked")
    var textInput = inputText.value;
    var finalURL = constructURL(textInput);
    fetch(finalURL)
    .then(res => res.json())
    .then(val => {
        
        outputText.innerText = val.contents.translated;
    })
    .catch(() => alert("some error occured"))    
}

btnTranslate.addEventListener("click", clickHandler)

function constructURL(textInput){
    var url2 = url+"?text="+textInput;
    return url2;
}