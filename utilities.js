// input element value function
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.value;
    const elementValue = parseFloat(elementString);
    return elementValue;
}
function elementTextValue(elementId){
    const firstElement = document.getElementById(elementId).innerText;
    return firstElement
}