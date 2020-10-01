let btn = document.createElement("button")
btn.textContent = "Translate"
let x =document.querySelector("body")
x.appendChild(btn)

btn.addEventListener('click', translateText)

let alphabet = {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----', 
}

function translateText(evt){
    let inputText = document.getElementById("myInput").value
    console.log(inputText)
    let arr = inputText.split('')
    console.log(arr)
    let res= arr.map(function(e){return alphabet[e.toLowerCase()]})
    let result = res.join('')
    console.log(result)
    let y = document.getElementById("myspan")
    y.innerHTML = result

}