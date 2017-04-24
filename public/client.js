$( document ).ready( onReady );
console.log('JQ');

function onReady() {
  console.log('onReady');
  $('#calculate').on('click', calcIt);
  $('#clear').on('click', clearFunc);
} // end onReady

function calcIt() {
  console.log('calculate button');
  var val1 = $('#val1').val();
  var val2 = $('#val2').val();
  var operator = $('#operator').val();

  var objToSend = {
    x: val1,
    y: val2,
    type: operator
  };

  $.ajax({
    method: 'POST',
    url: '/calc',
    data: objToSend,
    success: function(response) {
      console.log('in success', response);
      displayAnswer(response);
    }
  });

} // end calcIt

function displayAnswer(respObj) {
  console.log('in displayAnswer, respObj=', respObj);
  $('#answerDiv').text('Result: ' + respObj.answer);
}

function clearFunc () {
  console.log('clear button');
  $('#val1').val('');
  $('#val2').val('');
  $('#answerDiv').empty();
} // end clearFunc
