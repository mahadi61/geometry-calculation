// input element value function
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.value;
    const elementValue = parseFloat(elementString);
    return elementValue;
}
// bring the text form a element
function elementTextValue(elementId){
    const firstElement = document.getElementById(elementId).innerText;
    return firstElement
}
// random color generator
function generateRGBColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function cardBgChange(elementId){
    const color = generateRGBColor();
    const cardBg = document.getElementById(elementId);
    cardBg.style.backgroundColor = color
}