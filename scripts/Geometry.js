
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

function calculateParallelogramArea(){
    // Parallelogram-base
    const pallalelogramBaseInput = document.getElementById('parallelogram-base');
    const pallalelogramBaseText = pallalelogramBaseInput.value;
    const parallelogramBase = pallalelogramBaseText;

    // Parallelogram-hight 
    const pallalelogramHightInput = document.getElementById('parallelogram-hight');
    const pallalelogramHightText = pallalelogramHightInput.value;
    const parallelogramHight = pallalelogramHightText;

    const pallalelogramResult = parallelogramBase * parallelogramHight ;

    const pallalelogramAreas = document.getElementById('pallalelogram-areas');
    pallalelogramAreas.innerText = pallalelogramResult ;
}