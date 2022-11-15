try {
  // Declaration
  let calculator = document.createElement('div');
  let calculatorInput = document.createElement('input');
  let calculatorOutput = document.createElement('div');

  // Styling
  calculatorInput.style = 'position: absolute; top: 60px; left: 0; width: 200px; height: 100px; border: 1px solid black;';
  calculatorOutput.style = 'position: absolute: top: 0; left: 0; width: 200px; height: 20px; border: 1px solid black;';
  calculator.style = 'border: 1px solid black; width: fit-content: height: fit-content;';

  function arcsin(sine) {
    return Math.asin(sine) * 57.2958 + " degrees";
  }
  function arccos(cosine) {
    return Math.acos(cosine) * 57.2958 + " degrees";
  }
  function sqrt(num) {
    if (num < 0) {
      return Math.sqrt(num * -1) + "i";
    } else {
      return Math.sqrt(num);
    }
  }
  var pi = Math.PI;
  var e = Math.E;
  var abs = Math.abs;
  var rand = Math.random;
  function log(number, base) {
    return Math.log(number) / Math.log(base);
  }
  function randrange(min, max) {
    return (Math.random() * (max - min)) + min;
  }
  // Functionality
  calculatorInput.onchange = function() {
    calculatorOutput.innerHTML = new Function(`return ${calculatorInput.value}`)();
  }

  // Appending
  document.body.appendChild(calculator);
  document.body.appendChild(calculatorInput);
  document.body.appendChild(calculatorOutput);
}
catch (err) {
  alert(err);
}
