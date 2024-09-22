
// triangle styles 

function calculateTriangleArea(){
    // traingle base value
    const ractanleBaseInput = document.getElementById('rectangleBase');
    const ractangleBaseText = ractanleBaseInput.value;
    const base = parseFloat(ractangleBaseText) ;
    
    // triangle hight value
    const ractanleHightInput = document.getElementById('ractraingle-hight');
    const ractangleHightText = ractanleHightInput.value;
    const hight = parseFloat(ractangleHightText);

    const areas = 0.5 * base * hight ;

    const traingleArea = document.getElementById('traingle-area');
    traingleArea.innerText = areas;
}


// Rectraingle styles

function calculateReactraingleArea(){

    // Reactraingle-Weight
    const ractraigleWeightInput = document.getElementById('reactraingle-weight');
    const ractraingleWeightText = ractraigleWeightInput.value;
    const weight = parseFloat(ractraingleWeightText);

    // Reactraingle-leaght
    const reactraingleLeanghtInput = document.getElementById('reactraingle-leaght');
    const racttraingleLeanghtText = reactraingleLeanghtInput.value;
    const leanght = parseFloat(racttraingleLeanghtText);

    const ractraingleArea = weight * leanght;

    const reactraingleAreas = document.getElementById('ractraingle-area');
    reactraingleAreas.innerText = ractraingleArea ;


}

// Parallelogram style

// function calculateParallelogramArea(){
//     // Parallelogram-base
//     const pallalelogramBaseInput = document.getElementById('parallelogram-base');
//     const pallalelogramBaseText = pallalelogramBaseInput.value;
//     const parallelogramBase = parseFloat(pallalelogramBaseText);

//     // Parallelogram-hight 
//     const pallalelogramHightInput = document.getElementById('parallelogram-hight');
//     const pallalelogramHightText = pallalelogramHightInput.value;
//     const parallelogramHight = parseFloat(pallalelogramHightText) ;

//     const pallalelogramResult = parallelogramBase * parallelogramHight ;

//     const pallalelogramAreas = document.getElementById('pallalelogram-areas');
//     pallalelogramAreas.innerText = pallalelogramResult ;
// }

// no reapet and shortcut rule
function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const hight = getInputValueById('parallelogram-hight');
    const area = base * hight ;

    setInnerTextById('pallalelogram-areas', area)
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat (inputValueText);
    return inputValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area ;
}


// RombosArea

function calculateRhombusArea(){
    // Rombos first Corno input
    const rombosFirstKornoInput = document.getElementById('rombos-first-korno');
    const rombosFirstkornoText = rombosFirstKornoInput.value;
    const firstCorno = parseFloat(rombosFirstkornoText) ;
    // Rombos second Corno input
    const rombosSecondCornoInput = document.getElementById('rombos-second-korno');
    const rombosSeconCornoText = rombosSecondCornoInput.value;
    const secondCorno = parseFloat(rombosSeconCornoText) ;
    // Rombos Formulla
    const rombosArea = 0.5 * firstCorno * secondCorno ;
    // Sent Area in Areas
    const rombosAreas = document.getElementById('rombos-areas');
    rombosAreas.innerText = rombosArea ;
}


// PentagonArea
function calculatePentagonArea(){
    // Pentagon input
    const pentagonPoridhiInput = document.getElementById('pentagon-poridhi');
    const pentagonPoridhiText = pentagonPoridhiInput.value;
    const poridhi = parseFloat( pentagonPoridhiText);
    //Pentagon input
    const pentagonBaseInput = document.getElementById('pentagon-base');
    const pentagonBaseText = pentagonBaseInput.value;
    const base =parseFloat(pentagonBaseText);
    //pentagon Formulla
    const pentagonArea = 0.5 * poridhi * base ;
    // Sent Area in Areas
    const pentagonAreas = document.getElementById('pentagon-areas');
    pentagonAreas.innerText = pentagonArea ;
}



//  EllipseArea
function calculateEllipsArea(){
    // Ellipse area input
    const ellipsAreaInput = document.getElementById('ellips-Area');
    const ellipsAreaText = ellipsAreaInput.value;
    const area = parseFloat(ellipsAreaText) ;
    // Ellipse base input
    const ellipsBaseInput = document.getElementById('ellips-base');
    const ellipsBaseText = ellipsBaseInput.value;
    const base = parseFloat(ellipsBaseText) ;
    // Ellips Formulla
    const ellipsResult = 3.1416 * area * base ;
    // Sent Area in Areas
    const ellipsAreas = document.getElementById('ellips-result');
    ellipsAreas.innerText = ellipsResult ;
}