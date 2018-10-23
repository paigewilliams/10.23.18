//back-end
// convert string to array
function createArray(unprocessedString){
  var unprocessedArray = unprocessedString.split("");
  return unprocessedArray;
}

// replace vowels with dashes with splice
function replaceVowels(string){
  var array = createArray(string)
  for (var i = 0; i < array.length; i ++){
    if ((array[i] === "a") || (array[i] === "e") ||(array[i] === "i") || (array[i] === "o") || (array[i] === "u")){
      array.splice(array.indexOf(array[i]), 1, "-")
    }
    // console.log(array);
  }

  return array.join("");
}


// without splice
function createNewArray(array){
  var processedArray = []

  for (var i = 0; i < array.length; i ++){
    //replace vowels
    if ((array[i] === "a") || (array[i] === "e") ||(array[i] === "i") || (array[i] === "o") || (array[i] === "u")){
      processedArray.push("-");
    } else {
      processedArray.push(array[i]);
    }
  }
  return(processedArray);
}

$(function() {



});
