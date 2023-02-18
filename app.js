// edit icon to visible the input field

// parallelogram edit icon
document.getElementById('parallelogram-edit-icon').addEventListener('click', function(){
const parallelogramElement = document.getElementById('parallelogram-input');
parallelogramElement.style.display = 'inline-block';
})
// rhombus edit icon
document.getElementById('rhombus-edit-icon').addEventListener('click', function(){
const rhombusElement = document.getElementById('rhombus-input');
rhombusElement.style.display = 'inline-block';
})
// Pentagon edit icon
document.getElementById('pentagon-edit-icon').addEventListener('click', function(){
const pentagonElement = document.getElementById('pentagon-input');
pentagonElement.style.display = 'inline-block';
})
// Ellipse edit icon
document.getElementById('ellipse-edit-icon').addEventListener('click', function(){
const ellipseElement = document.getElementById('ellipse-input');
ellipseElement.style.display = 'inline-block';
})



// cart 1 (triangle)
document.getElementById('cart-1-btn').addEventListener('click', function(){
    const geometryTitle = elementTextValue('card-1-title');
    const valueOfB = getElementValueById('triangle-b');
    const valueOfH = getElementValueById('triangle-h');
    if(isNaN(valueOfB) || isNaN(valueOfH) || valueOfB <= 0 || valueOfH <= 0){
        alert ('This is not a valid number')
    }
    const areaOfTriangle = 0.5 * valueOfB * valueOfH;
    const areaOfTriangleFloat = areaOfTriangle.toFixed(2);
    const tableBody = document.getElementById('t-body');

    if(isNaN(areaOfTriangleFloat) === false){
        const tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${1}<td>
    <td>${geometryTitle}<td>
    <td>${areaOfTriangleFloat}<td>
    
    `;
    tableBody.appendChild(tr);
    }
    
})
// cart 2 (rectangle)
document.getElementById('cart-2-btn').addEventListener('click', function(){
    const geometryTitle = elementTextValue('cart-2-title');
    const valueOfW = getElementValueById('rectangle-w');
    const valueOfL = getElementValueById('rectangle-l');
    if(isNaN(valueOfW) || isNaN(valueOfL) || valueOfW <= 0 || valueOfL <= 0){
        alert ('This is not a valid number')
    }
    const areaOfRectangle = valueOfW * valueOfL;
    const areaOfRectangleFloat = areaOfRectangle.toFixed(2);
    const tableBody = document.getElementById('t-body');

    if(isNaN(areaOfRectangleFloat) === false){
        const tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${1}<td>
    <td>${geometryTitle}<td>
    <td>${areaOfRectangleFloat}<td>
    
    `;
    tableBody.appendChild(tr);
    }
    
})

// cart 3 (parallelogram)
document.getElementById('cart-3-btn').addEventListener('click', function(){
    const geometryTitle = elementTextValue('cart-3-title');
    const valueOfB = getElementValueById('parallelogram-b');
    const valueOfH = getElementValueById('parallelogram-h');
    if(isNaN(valueOfB) || isNaN(valueOfH) || valueOfB <= 0 || valueOfH <= 0){
        alert ('This is not a valid number')
    }
    const areaOfParallelogram = valueOfB * valueOfH;
    const areaOfParallelogramFloat = areaOfParallelogram.toFixed(2);
    const tableBody = document.getElementById('t-body');

    if(isNaN(areaOfParallelogramFloat) === false){
        const tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${1}<td>
    <td>${geometryTitle}<td>
    <td>${areaOfParallelogramFloat}<td>
    
    `;
    tableBody.appendChild(tr);
    
    }
})
// cart 4 (rhombus)
document.getElementById('cart-4-btn').addEventListener('click', function(){
    const geometryTitle = elementTextValue('cart-4-title');
    const valueOfD1 = getElementValueById('rhombus-d-1');
    const valueOfD2 = getElementValueById('rhombus-d-2');
    if(isNaN(valueOfD1) || isNaN(valueOfD2) || valueOfD1 <= 0 || valueOfD1 <= 0){
        alert ('This is not a valid number')
    }
    const areaOfRhombus = 0.5 * valueOfD1 * valueOfD2;
    const areaOfRhombusFloat = areaOfRhombus.toFixed(2);
    const tableBody = document.getElementById('t-body');

    if(isNaN(areaOfRhombusFloat) === false){
        const tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${1}<td>
    <td>${geometryTitle}<td>
    <td>${areaOfRhombusFloat}<td>
    
    `;
    tableBody.appendChild(tr);
    }
    
})
// cart 5 (Pentagon)
document.getElementById('cart-5-btn').addEventListener('click', function(){
    const geometryTitle = elementTextValue('cart-5-title');
    const valueOfP = getElementValueById('pentagons-p');
    const valueOfB = getElementValueById('pentagons-b');
    if(isNaN(valueOfP) || isNaN(valueOfB) || valueOfP <= 0 || valueOfB <= 0){
        alert ('This is not a valid number')
    }
    const areaOfPentagon = 0.5 * valueOfP * valueOfB;
    const areaOfPentagonFloat = areaOfPentagon.toFixed(2);
    const tableBody = document.getElementById('t-body');

    if(isNaN(areaOfPentagonFloat) === false){
        const tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${1}<td>
    <td>${geometryTitle}<td>
    <td>${areaOfPentagonFloat}<td>
    
    `;
    tableBody.appendChild(tr);
    }
    
})
// cart 6 (Ellipse)
document.getElementById('cart-6-btn').addEventListener('click', function(){
    const geometryTitle = elementTextValue('cart-6-title');
    const valueOfB = getElementValueById('ellipse-b');
    const valueOfH = getElementValueById('ellipse-h');
    if(isNaN(valueOfB) || isNaN(valueOfH) || valueOfB <= 0 || valueOfH <= 0){
        alert ('This is not a valid number')
    }
    const areaOfEllipse = 3.1416 * valueOfB * valueOfH;
    const areaOfEllipseFloat = areaOfEllipse.toFixed(2);
    const tableBody = document.getElementById('t-body');


    if(isNaN(areaOfEllipseFloat) === false){
        const tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${1}<td>
    <td>${geometryTitle}<td>
    <td>${areaOfEllipseFloat}<td>
    <td>${1}<td>
    
    `;
    tableBody.appendChild(tr);
    }
    
})

// random color in every card
// cart - 1
document.getElementById('cart-1-bg').addEventListener('mousemove', function(){
    cardBgChange('cart-1-bg');
})
// cart - 2
document.getElementById('cart-2-bg').addEventListener('mousemove', function(){
    cardBgChange('cart-2-bg');
})
// cart - 3
document.getElementById('cart-3-bg').addEventListener('mousemove', function(){
    cardBgChange('cart-3-bg');
})
// cart - 4
document.getElementById('cart-4-bg').addEventListener('mousemove', function(){
    cardBgChange('cart-4-bg');
})
// cart - 5
document.getElementById('cart-5-bg').addEventListener('mousemove', function(){
    cardBgChange('cart-5-bg');
})
// cart - 6
document.getElementById('cart-6-bg').addEventListener('mousemove', function(){
    cardBgChange('cart-6-bg');
})

// blog button
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = '/blog.html';
})
