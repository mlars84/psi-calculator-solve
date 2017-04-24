var calculateObj = function( objToCalc ) {

  var x = parseFloat(objToCalc.x);
  var y = parseFloat(objToCalc.y);
  var operator = objToCalc.type;

  var finalAnswer = '';

  switch( operator ) {
    case 'add':
      finalAnswer = x + y;
      break;
    case 'subtract':
      finalAnswer = x - y;
      break;
    case 'multiply':
      finalAnswer = x * y;
      break;
    case 'divide':
      finalAnswer = x / y;
      break;
    default:
      console.log('That is not an operator!');
  }
  return finalAnswer;
};


module.exports = calculateObj;
