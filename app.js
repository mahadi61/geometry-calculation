// edit icon to visible the input field

// parallelogram
document.getElementById('parallelogram-edit-icon').addEventListener('click', function(){
const parallelogramElement = document.getElementById('parallelogram-input');
parallelogramElement.style.display = 'inline-block';
})
// rhombus
document.getElementById('rhombus-edit-icon').addEventListener('click', function(){
const rhombusElement = document.getElementById('rhombus-input');
rhombusElement.style.display = 'inline-block';
})


// cart 1
document.getElementById('cart-1-btn').addEventListener('click', function(){
    const geometryTitle = elementTextValue('card-1-title');
    const valueOfB = getElementValueById('triangle-b');
    const valueOfH = getElementValueById('triangle-h');
    if(isNaN(valueOfB) || isNaN(valueOfH) || valueOfB <= 0 || valueOfH <= 0){
        alert ('This is not a valid number')
    }
    const areaOfTriangle = 0.5 * valueOfB * valueOfH;
    const tableBody = document.getElementById('t-body');

    const tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${1}<td>
    <td>${geometryTitle}<td>
    <td>${areaOfTriangle}<td>
    
    `;
    tableBody.appendChild(tr);
    
})
// cart 2
document.getElementById('cart-2-btn').addEventListener('click', function(){
    const geometryTitle = elementTextValue('cart-2-title');
    const valueOfW = getElementValueById('rectangle-w');
    const valueOfL = getElementValueById('rectangle-l');
    if(isNaN(valueOfW) || isNaN(valueOfL) || valueOfW <= 0 || valueOfL <= 0){
        alert ('This is not a valid number')
    }
    const areaOfRectangle = valueOfW * valueOfL;
    const tableBody = document.getElementById('t-body');

    const tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${1}<td>
    <td>${geometryTitle}<td>
    <td>${areaOfRectangle}<td>
    
    `;
    tableBody.appendChild(tr);
    
})

// cart 3
document.getElementById('cart-3-btn').addEventListener('click', function(){
    const geometryTitle = elementTextValue('cart-3-title');
    const valueOfB = getElementValueById('parallelogram-b');
    const valueOfH = getElementValueById('parallelogram-h');
    if(isNaN(valueOfB) || isNaN(valueOfH) || valueOfB <= 0 || valueOfH <= 0){
        alert ('This is not a valid number')
    }
    const areaOfParallelogram = valueOfB * valueOfH;
    const tableBody = document.getElementById('t-body');

    const tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${1}<td>
    <td>${geometryTitle}<td>
    <td>${areaOfParallelogram}<td>
    
    `;
    tableBody.appendChild(tr);
    
})