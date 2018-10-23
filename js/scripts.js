//back-end

function countArray(inputArray) {
  return inputArray.length;
}


var highStressTitle = "High Stress Coping Methods"
var highStressBody = "Xanax. Counseling. Go to sleep. Quit your job. Smoke some f'ing weed. "
var lowStressTitle = "Low Stress Coping Methods"
var lowStressBody = "Take a walk. Pet your cat. Take a power nap. Eat a snack (snickers). Smoke some f'ing weed. "
var healthyTitle = "You are healthy!"
var healthyBody = "Do normal things!"

function generateResults(inputArray, modifier) {
  if (countArray(inputArray) + modifier >= 5) {
    //display high stress results
    displayResults(highStressTitle, highStressBody);

  } else if (countArray(inputArray) + modifier >= 2) {
    //display low stress options
    displayResults(lowStressTitle, lowStressBody);
  } else {
    //you are healthy
    displayResults(healthyTitle, healthyBody);
  }
}

// front-end
function displayResults(title, body) {
  $("#results").toggle();
  $("#methods div h5").text(title);
  $("#modal-body p").text(body);
};



$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var modifier = parseInt($("#paranoia").val());
    console.log(modifier);
    var boxesChecked = [];
    $("input:checkbox[name=warning-signs]:checked").each(function() {
      boxesChecked.push($(this).val());
    })
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      boxesChecked.push($(this).val());
    })
    generateResults(boxesChecked, modifier);

  });

  $("#x").click(function closeModal(){
    $("#results").toggle();
  });


});
