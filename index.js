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
    let meters = value * 0.3048
    let feet = value * 3.28084
    lengthOutput.textContent = makeConversionString(value, 'meters', 'feet', feet, meters);
}

function renderVolume(value) {
    let liters = value * 4.54609
    let gallons = value * 0.219969
    volumeOutput.textContent = makeConversionString(value, 'liters', 'gallons', gallons, liters);
}

function renderMass(value) {
    let kilos = value * 2.20462
    let pounds = value * 0.453592
    massOutput.textContent = makeConversionString(value, 'kilos', 'pounds', pounds, kilos);
}

function makeConversionString(input, unitA, unitB, conversionA, conversionB) {
    let result = `${input} ${unitA} = ${conversionB.toFixed(2)} / ${input} ${unitB} = ${conversionA.toFixed(2)}`
    console.log(result)
    return result
}

convert()