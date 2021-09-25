const GenerateBtn= document.getElementById('generateBtn');
const word= document.getElementById("word");

const data= document.getElementById("number");


GenerateBtn.addEventListener('click', ()=>{
    let input = prompt("How many number you want to generate");
console.log(input);
 fetch(`https://random-word-api.herokuapp.com/word?number=${input}`)
.then(response =>response.json())
 .then( function(text){
      word.innerHTML=text;
      console.log(text);
      data.innerHTML=input +"  words";
 })
});






