try {
  // Declaration
  let calculatorInput = document.createElement('input');

  // Styling
  calculatorInput.style = 'position: fixed; top: 60px; left: 0; width: 200px; height: 100px; border: 1px solid black;';

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
    new Function(`try{alert(${calculatorInput.value})} catch(err) {alert(err)}`)();
  }

  // Appending
  document.body.appendChild(calculatorInput);
}
catch (err) {
  alert(err);
}
