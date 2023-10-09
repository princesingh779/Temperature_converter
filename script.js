let fahrenheitinput = document.querySelector('#fahrenheit input')
let celciusinput = document.querySelector('#celsius input')
let kelvininput = document.querySelector('#Kelvin input')
let button=document.querySelector('#button button')

function roundnumber(number){
    return Math.round(number * 100) / 100;
}

fahrenheitinput.addEventListener('input', function (event) {
    let fTemp = parseFloat(event.target.value);
    let cTemp = (fTemp - 32) * (5 / 9);
    let kTemp = (fTemp -32) * (5 / 9)+273.15;
    celciusinput.value = roundnumber(cTemp);
    kelvininput.value = roundnumber(kTemp);
});


celciusinput.addEventListener('input', function (event) {
    let cTemp = parseFloat(event.target.value);
    let fTemp = (cTemp*(9/5)) +32;
    let kTemp = cTemp+273.15;
    fahrenheitinput.value = roundnumber(fTemp);
    kelvininput.value = roundnumber(kTemp);
});

kelvininput.addEventListener('input', function (event) {
    let kTemp = parseFloat(event.target.value);
    let cTemp = kTemp-273.15;
    let fTemp = (kTemp-273.15)*(9/5)+32;
    celciusinput.value = roundnumber(cTemp);
    fahrenheitinput.value = roundnumber(fTemp);
});

button.addEventListener('click', function () {
    fahrenheitinput.value = ''; // Clear Fahrenheit input
    celciusinput.value = '';    // Clear Celsius input
    kelvininput.value = '';     // Clear Kelvin input
});



