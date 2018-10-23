//back-end

function countArray(inputArray) {
  return inputArray.length;

}


var highStressTitle = "High Stress Coping Methods"
var highStressBody = "High Stress Coping Methods"
var lowStressTitle = "Low Stress Coping Methods"
var lowStressBody = "Low Stress Coping Methods"

function generateResults(inputArray) {
  if (countArray(inputArray) >= 4) {
    displayResults(highStressTitle, highStressBody);
    //display high stress results

  } else if (countArray(inputArray) >= 1) {
    displayResults(lowStressTitle, lowStressBody);
    //display low stress options
  } else {
    //you are healthy
  }
}

// front-end

function displayResults(arg1, arg2) {
  $("#results").slideDown();
  $("#methods div h4").text(arg1);
  $("#panel-body").text(arg2);
};


// function displayHighStressResults() {
//   $("#results").slideDown();
//   $("#methods div h4").text("High Stress Coping Methods");
//   $("#panel-body").text("You should meditate and pet a cat");
// };
//
// function displayLowStressResults() {
//   $("#results").slideDown();
//   $("#methods div h4").text("Low Stress Coping Methods");
//   $("#panel-body").text("You should meditate.");
// };


$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var boxesChecked = [];
    $("input:checkbox[name=warning-signs]:checked").each(function() {
      boxesChecked.push($(this).val());
    })
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      boxesChecked.push($(this).val());
    })
    generateResults(boxesChecked);

  });



});
