console.log("script response: OK")


var word = document.getElementById("inpt").value;
var output = document.getElementById("word-rslt");
var wait = document.getElementById("wait");

document.getElementById("hit-btn").addEventListener("click", wordShow);

function wordShow(){
    console.log(word);
    console.log("word show called");
    wait.style.display = "inline-block";
    wait.innerHTML = `Wait....`;
    fetch("https://wordsapiv1.p.rapidapi.com/words/"+document.getElementById("inpt").value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "2dd3ba16fbmsh1580f71d6b00bc0p12927ejsn408e1da834a2"
	}
})
.then(res => res.json())
.then(data => {
    console.log(data);
    wait.style.display = "none";
    output.innerHTML = `<h1>${data.word}</h1><br><h2>Pronounciation: ${data.pronunciation.all}</h2><br><h2>Defination: ${data.results[0].definition}</h2>
    <br><h3>(${data.results[0].partOfSpeech})</h3><br><h4>Synnomnys: ${data.results[0].synonyms[0]}</h4><br><h3>Frequency : ${data.frequency}</h3>
    `
})
.catch(err => {
    console.log(err);
    wait.style.display = "inline-block";
    wait.innerHTML = `Error`;
});
}
