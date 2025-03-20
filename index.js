const inputEl = document.getElementById('conversion-input');
const convertBtn = document.getElementById('convert-button');
const lengthOutput = document.getElementById('length-conversion');
const volumeOutput = document.getElementById('volume-conversion');
const massOutput = document.getElementById('mass-conversion');

convertBtn.addEventListener('click', convert);

function convert() {
    let targetValue = parseFloat(inputEl.textContent);
    renderOutput(targetValue ? targetValue : 0.0);
}

function renderOutput(value) {
    renderLength(value);
    renderVolume(value);
    renderMass(value);
}

function renderLength(value) {
    let meters = value * 0.3048;  // 1 foot = 0.3 meters
    let feet = value * 3.28084;
    lengthOutput.textContent = makeConversionString(value, 'meters', 'feet', meters, feet);
}

function renderVolume(value) {
    let liters = value * 4.54609;
    let gallons = value * 0.219969;
    volumeOutput.textContent = makeConversionString(value, 'liters', 'gallons', liters, gallons);
}

function renderMass(value) {
    let kilos = value * 0.453592;
    let pounds = value * 2.20462;
    massOutput.textContent = makeConversionString(value, 'kilos', 'pounds', kilos, pounds);
}

function makeConversionString(input, unitA, unitB, conversionA, conversionB) {
    let result = `${input} ${unitA} = ${conversionB.toFixed(2)} ${unitB} / ${input} ${unitB} = ${conversionA.toFixed(2)} ${unitA}`
    console.log(result)
    return result
}

convert()