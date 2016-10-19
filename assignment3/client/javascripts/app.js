var main = function () {
  'use strict';
  
  var convertToInt = function (array) {
    var i = 0;
    for (; i < array.length; i++) {
      array[i] = parseInt(array[i], 10);
    }
    return array;
  };
  
  var sendAJAX = function (url, data, idResult) {
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: data,
      contentType: 'application/json',
      success: function (response) {
        $(idResult).text(response.result);
      }
    });
  };

  $('#avg').on('click', function (event) {
    var input = $('#avgNums').val().split(',');
    convertToInt(input);
    sendAJAX('/avg', JSON.stringify({
      array: input
    }), '#avgResult');
  });

  $('#max').on('click', function (event) {
    var input = $('#maxNums').val().split(',');
    convertToInt(input);
    sendAJAX('/max', JSON.stringify({
      array: input
    }), '#maxResult');
  });

  $('#even').on('click', function (event) {
    var input = $('#evenNums').val().split(',');
    convertToInt(input);
    sendAJAX('/even', JSON.stringify({
      array: input
    }), '#evenResult');
  });

  $('#allEven').on('click', function (event) {
    var input = $('#allEvenNums').val().split(',');
    convertToInt(input);
    sendAJAX('/allEven', JSON.stringify({
      array: input
    }), '#allEvenResult');
  });

  $('#arrayContains').on('click', function (event) {
    var inputArray = $('#containsArray').val().split(',');
    var inputQuery = $('#containsQuery').val();
    sendAJAX('/arrayContains', JSON.stringify({
      array: inputArray,
      query: inputQuery
    }), '#arrayContainsResult');
  });

  $('#arrayContainsNTimes').on('click', function (event) {
    var inputArray = $('#containsNTimesArray').val().split(',');
    var inputQuery = $('#containsNTimesQuery').val();
    var inputN = parseInt($('#nTimes').val(), 10);
    sendAJAX('/arrayContainsNTimes', JSON.stringify({
      array: inputArray,
      query: inputQuery,
      n: inputN
    }), '#arrayContainsNTimesResult');
  });
};

$(document).ready(main);