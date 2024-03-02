function convert() {
    var temperatureInput = document.getElementById('temperature');
    var inputUnitSelect = document.getElementById('inputUnit');
    var outputUnitSelect = document.getElementById('outputUnit');
    var resultElement = document.getElementById('result');
  
    var temperature = parseFloat(temperatureInput.value);
    var inputUnit = inputUnitSelect.value;
    var outputUnit = outputUnitSelect.value;
  
    if (!isNaN(temperature)) {
      var convertedTemperature;
  
      if (inputUnit === 'celsius') {
        if (outputUnit === 'fahrenheit') {
          convertedTemperature = (temperature * 9 / 5) + 32;
        } else if (outputUnit === 'kelvin') {
          convertedTemperature = temperature + 273.15;
        } else {
          convertedTemperature = temperature;
        }
      } else if (inputUnit === 'fahrenheit') {
        if (outputUnit === 'celsius') {
          convertedTemperature = (temperature - 32) * (5 / 9);
        } else if (outputUnit === 'kelvin') {
          convertedTemperature = (temperature - 32) * (5 / 9) + 273.15;
        } else {
          convertedTemperature = temperature;
        }
      } else if (inputUnit === 'kelvin') {
        if (outputUnit === 'celsius') {
          convertedTemperature = temperature - 273.15;
        } else if (outputUnit === 'fahrenheit') {
          convertedTemperature = (temperature - 273.15) * (9 / 5) + 32;
        } else {
          convertedTemperature = temperature;
        }
      } else {
        resultElement.innerHTML = 'Please select valid input and output units.';
        return;
      }
  
      resultElement.innerHTML = `${temperature} ${inputUnit} is ${convertedTemperature.toFixed(2)} ${outputUnit}.`;
    } else {
      resultElement.innerHTML = 'Please enter a valid number for temperature.';
    }
  }
  