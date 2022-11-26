//DOM elements
const resultElement = document.getElementById("result")
const lengthElement = document.getElementById("length")
const uppercaseElement = document.getElementById("uppercase")
const lowercaseElement = document.getElementById("lowercase")
const numbersElement = document.getElementById("numbers")
const symbolsElement = document.getElementById("symbols")
const generateElement = document.getElementById("generate")
const clipboardElement = document.getElementById("clipboard")



const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


generateElement.addEventListener('click', () =>{
    const length = +lengthElement.value
    const hasLower = lowercaseElement.checked
    const hasUpper = uppercaseElement.checked
    const hasNumber = numbersElement.checked
    const hasSymbol = symbolsElement.checked

    resultElement.innerHTML = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length)
})

//Generate password function

function generatePassword(lower, upper, number, symbol, length){

    let generatedPassword = ""

    const typeCount = lower + upper + number + symbol

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    
    
    if(typeCount === 0){
        return ''
    }
    
    for(let i = 0; i < length; i += typeCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
            console.log("funcName", funcName)
        })
    }

    console.log(generatedPassword)

    
}

// funcion generar random

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = "!@<>$#!?¡¿=)(/&%,.;"
    return String.fromCharCode[Math.floor(Math.random() * symbols.length)]
}