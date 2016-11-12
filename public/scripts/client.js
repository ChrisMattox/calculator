$(document).ready(function(){

//setting empty input value object
var calcInputs = {
  x:"",
  y:"",
  type:""
};

//click events for specific number buttons
$('#calculator').on('click', 'button', function (){
  var number = $(this).data("id");
  if (calcInputs.type === ""){
  calcInputs.x += number;
  }else{
  calcInputs.y += number;
  }
  console.log(calcInputs);
  });

// click events for specific operators
$('#clear').on("click", 'button', function(){
  $('#numbersOnDom').empty();
    calcInputs = {
    x:"",
    y:"",
    type:""
  };
});

$('#operator').on('click', 'button', function (){
  var operator = $(this).attr("id");
  calcInputs.type=operator;
  console.log(calcInputs);
});

$('#equals').on('click', function (){
$('#numbersOnDom').empty();
var currentOperator = calcInputs.type;
console.log(currentOperator);
switch (currentOperator) {
  case 'add':
    getAdd();
    break;
  case 'subtract':
    getSubtract();
    break;
  case 'multiply':
    getMultiply();
    break;
  case 'divide':
    getDivide();
    break;
  default:
  }
});

function getAdd(){
  $.ajax({
    type: 'POST',
    url: '/add',
    data: calcInputs,
    success: function(data) {
    additionToDom();
    }
  });
}

function additionToDom(){
  $.ajax({
    type:'GET',
    url: '/add',
    success: function(data) {
      $("#numbersonDom").empty();
      $("#numbersOnDom").append("<p>"+ data.result +"<p>");
    }
  });
}
function getSubtract(){
  $.ajax({
    type: 'POST',
    url: '/subtract',
    data: calcInputs,
    success: function(data) {
    subtractToDom();
    }
  });
}

function subtractToDom(){
  $.ajax({
    type:'GET',
    url: '/subtract',
    success: function(data) {
      $("#numbersonDom").empty();
      $("#numbersOnDom").append("<p>"+ data.result +"<p>");
    }
  });
}

function getMultiply(){
  $.ajax({
    type: 'POST',
    url: '/multiply',
    data: calcInputs,
    success: function(data) {
    multiplyToDom();
    }
  });
}

function multiplyToDom(){
  $.ajax({
    type:'GET',
    url: '/multiply',
    success: function(data) {
      $("#numbersonDom").empty();
      $("#numbersOnDom").append("<p>"+ data.result +"<p>");
    }
  });
}

function getDivide(){
  $.ajax({
    type: 'POST',
    url: '/divide',
    data: calcInputs,
    success: function(data) {
    divideToDom();
    }
  });
}

function divideToDom(){
  $.ajax({
    type:'GET',
    url: '/divide',
    success: function(data) {
      $("#numbersonDom").empty();
      $("#numbersOnDom").append("<p>"+ data.result +"<p>");
    }
  });
}

});
